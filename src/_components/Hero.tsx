// Constraints:
// - Dual digit numbers
// - Single digits change at random intervals, slow
// - Matrix rain sets digit lightness or opacity up
// - Overlay image sets lightness or opacity up, but only when completely encompassed (no partials)
// - Mask out boundaries
// - BG digits don't resize, let overflow and hide overflow (static BG size, like a cover)

const ICON_SVG_BASE64 =
  "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0xNjIuMjQsOTA5SDIyLjk4Yy0xNS44NSwwLTI2LjkzLTE1LjY4LTIxLjY0LTMwLjYyTDI2MC45MywxNDQuOWM2LjM0LTE3LjkyLDIzLjI4LTI5Ljg5LDQyLjI5LTI5Ljg5aDEzOS4yNmMxNS44NSwwLDI2LjkzLDE1LjY4LDIxLjY0LDMwLjYyTDIwNC41Myw4NzkuMWMtNi4zNCwxNy45Mi0yMy4yOCwyOS44OS00Mi4yOSwyOS44OVoiIHN0eWxlPSJmaWxsOiAjMDAwOyIvPjxwYXRoIGQ9Ik03MjAuNzgsOTA5aC0xMzkuMjZjLTE1Ljg1LDAtMjYuOTMtMTUuNjgtMjEuNjQtMzAuNjJMODE5LjQ3LDE0NC45YzYuMzQtMTcuOTIsMjMuMjgtMjkuODksNDIuMjktMjkuODloMTM5LjI2YzE1Ljg1LDAsMjYuOTMsMTUuNjgsMjEuNjQsMzAuNjJsLTI1OS42LDczMy40OGMtNi4zNCwxNy45Mi0yMy4yOCwyOS44OS00Mi4yOSwyOS44OVoiIHN0eWxlPSJmaWxsOiAjMDAwOyIvPjwvc3ZnPg==";

import { useEffect, useRef } from "react";

interface DigitCell {
  left: {
    value: number;
    lastChange: number;
    baseOpacity: number;
    logoLitOpacity: number;
    wasLogoLit: boolean;
  };
  right: {
    value: number;
    lastChange: number;
    baseOpacity: number;
    logoLitOpacity: number;
    wasLogoLit: boolean;
  };
}

interface Column {
  x: number;
  cells: DigitCell[];
  rainY: number;
  speed: number;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const columnsRef = useRef<Column[]>([]);
  const animationFrameRef = useRef(0);
  const iconImageRef = useRef<HTMLImageElement | null>(null);
  const iconCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const iconReadyRef = useRef(false);
  const iconDataRef = useRef<Uint8ClampedArray | null>(null);

  // Refs to store icon transform values
  const iconTransformRef = useRef({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });

  // Refs to store gradient calculation values
  const gradientValuesRef = useRef({
    centerX: 0,
    centerY: 0,
    radius: 0,
  });

  // --- Performance Optimization State ---
  // Store previous grid size for resize logic
  let prevColumns = 0;
  let prevRows = 0;
  // Store precomputed gradient and icon mask per cell
  const cellGradientCache = useRef<{ tLeft: number; tRight: number }[][]>([]);
  const cellIconMaskCache = useRef<{ left: boolean; right: boolean }[][]>([]);
  // Store last digit update times for batching
  const lastDigitUpdateRef = useRef<number>(0);
  // Store last render time for FPS throttling
  const lastRenderTimeRef = useRef<number>(0);
  // Target FPS
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Color fallback detection (run once)
    let useOklch = true;
    try {
      ctx.fillStyle = "oklch(0.6532 0.2202 25.76 / 1)";
      if (ctx.fillStyle === "") throw new Error("Unsupported");
    } catch {
      useOklch = false;
    }

    // Load base64 SVG as image
    const iconImg = new window.Image();
    iconImg.src = ICON_SVG_BASE64;
    iconImageRef.current = iconImg;
    iconReadyRef.current = false;

    iconImg.onload = () => {
      // Draw SVG to offscreen canvas for pixel access
      const offCanvas = document.createElement("canvas");
      offCanvas.width = iconImg.width || 1024;
      offCanvas.height = iconImg.height || 1024;
      const offCtx = offCanvas.getContext("2d");
      if (offCtx) {
        offCtx.drawImage(iconImg, 0, 0, offCanvas.width, offCanvas.height);
        iconCanvasRef.current = offCanvas;
        iconReadyRef.current = true;
        // Cache iconData
        iconDataRef.current = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;
        // Update transforms now that icon is ready and dimensions are known
        updateCanvasSize();
      }
    };

    // Initialize canvas size
    let displayWidth = 0;
    let displayHeight = 0;
    let digitWidth = 10; // Default, will be measured
    let cellHeight = 18; // Fewer rows
    let pairGap = 0; // Will be set in updateCanvasSize
    let columnWidth = 0; // Will be set in updateCanvasSize
    function updateCanvasSize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      displayWidth = canvas.clientWidth;
      displayHeight = canvas.clientHeight;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
      ctx.font = "10px monospace";
      digitWidth = ctx.measureText("0").width;
      // If icon is ready and canvas exists, update iconDataRef and icon transform
      if (iconReadyRef.current && iconCanvasRef.current) {
        const iconCtx = iconCanvasRef.current.getContext("2d");
        if (iconCtx) {
          iconDataRef.current = iconCtx.getImageData(
            0,
            0,
            iconCanvasRef.current.width,
            iconCanvasRef.current.height
          ).data;
        }
        // Calculate and store icon transform values
        const iconW = iconCanvasRef.current.width;
        const iconH = iconCanvasRef.current.height;
        const fitScale = Math.min(displayWidth / iconW, displayHeight / iconH);
        iconTransformRef.current.scale = fitScale * 0.6; // 60% of natural fit
        iconTransformRef.current.offsetX = (displayWidth - iconW * iconTransformRef.current.scale) / 2;
        iconTransformRef.current.offsetY = (displayHeight - iconH * iconTransformRef.current.scale) / 2;
      }

      // Calculate and store gradient values
      gradientValuesRef.current.centerX = displayWidth * 0.75;
      gradientValuesRef.current.centerY = displayHeight * 0.25;
      gradientValuesRef.current.radius = Math.max(displayWidth, displayHeight) * 0.5;

      // Only re-initialize columns if grid size changes, but preserve as much as possible
      cellHeight = 18; // Fewer rows
      pairGap = digitWidth * 1.5; // More gap between pairs
      columnWidth = digitWidth * 2 + pairGap; // Add gap to pair width
      const columns = Math.ceil(canvas.width / columnWidth);
      const rows = Math.ceil(canvas.height / cellHeight);
      // --- Preserve columns/cells ---
      let oldColumns = columnsRef.current;
      if (columns !== prevColumns || rows !== prevRows) {
        // Grow or shrink columns
        let newColumns: Column[] = [];
        for (let i = 0; i < columns; i++) {
          let oldCol = oldColumns && oldColumns[i] ? oldColumns[i] : undefined;
          let newCells: DigitCell[] = [];
          for (let j = 0; j < rows; j++) {
            let oldCell = oldCol && oldCol.cells && oldCol.cells[j] ? oldCol.cells[j] : undefined;
            if (oldCell) {
              newCells.push(oldCell);
            } else {
              newCells.push({
                left: {
                  value: Math.floor(Math.random() * 10),
                  lastChange: Math.random() * 10000,
                  baseOpacity: 0.05 + Math.random() * 0.15,
                  logoLitOpacity: 0.3 + Math.random() * 0.7,
                  wasLogoLit: false,
                },
                right: {
                  value: Math.floor(Math.random() * 10),
                  lastChange: Math.random() * 10000,
                  baseOpacity: 0.05 + Math.random() * 0.15,
                  logoLitOpacity: 0.3 + Math.random() * 0.7,
                  wasLogoLit: false,
                },
              });
            }
          }
          newColumns.push({
            x: i * columnWidth + columnWidth / 2 - pairGap / 2,
            cells: newCells,
            rainY: oldCol ? oldCol.rainY : Math.random() * canvas.height,
            speed: oldCol ? oldCol.speed : 1 + Math.random() * 2,
          });
        }
        columnsRef.current = newColumns;
        prevColumns = columns;
        prevRows = rows;
      }
      // --- Precompute gradient and icon mask per cell ---
      cellGradientCache.current = [];
      cellIconMaskCache.current = [];
      const gradientCenterX = gradientValuesRef.current.centerX;
      const gradientCenterY = gradientValuesRef.current.centerY;
      const gradientRadius = gradientValuesRef.current.radius;
      let iconData = iconDataRef.current;
      let iconW = 0,
        iconH = 0,
        iconScale = 1,
        iconOffsetX = 0,
        iconOffsetY = 0;
      if (iconReadyRef.current && iconCanvasRef.current) {
        iconW = iconCanvasRef.current.width;
        iconH = iconCanvasRef.current.height;
        iconScale = iconTransformRef.current.scale;
        iconOffsetX = iconTransformRef.current.offsetX;
        iconOffsetY = iconTransformRef.current.offsetY;
      }
      for (let i = 0; i < columns; i++) {
        cellGradientCache.current[i] = [];
        cellIconMaskCache.current[i] = [];
        for (let j = 0; j < rows; j++) {
          const y = j * cellHeight;
          // Gradient
          const dxLeft = i * columnWidth + columnWidth / 2 - pairGap / 2 - digitWidth / 2 - gradientCenterX;
          const dyLeft = y + 8 - gradientCenterY;
          const distLeft = Math.sqrt(dxLeft * dxLeft + dyLeft * dyLeft);
          const tLeft = Math.max(0, 1 - distLeft / gradientRadius);
          const dxRight = i * columnWidth + columnWidth / 2 - pairGap / 2 + digitWidth / 2 - gradientCenterX;
          const dyRight = y + 8 - gradientCenterY;
          const distRight = Math.sqrt(dxRight * dxRight + dyRight * dyRight);
          const tRight = Math.max(0, 1 - distRight / gradientRadius);
          if (!cellGradientCache.current[i]) cellGradientCache.current[i] = [];
          cellGradientCache.current[i]?.splice(j, 1, { tLeft, tRight });
          // Icon mask
          let leftCovered = false,
            rightCovered = false;
          if (iconData && iconW && iconH) {
            const py = Math.round((y + 8 - iconOffsetY) / iconScale);
            const pxLeft = Math.round(
              (i * columnWidth + columnWidth / 2 - pairGap / 2 - digitWidth / 2 - iconOffsetX) / iconScale
            );
            const idxLeft = (py * iconW + pxLeft) * 4;
            const pxRight = Math.round(
              (i * columnWidth + columnWidth / 2 - pairGap / 2 + digitWidth / 2 - iconOffsetX) / iconScale
            );
            const idxRight = (py * iconW + pxRight) * 4;
            const alphaLeft =
              pxLeft >= 0 && pxLeft < iconW && py >= 0 && py < iconH && idxLeft + 3 < iconData.length
                ? iconData[idxLeft + 3]
                : undefined;
            const alphaRight =
              pxRight >= 0 && pxRight < iconW && py >= 0 && py < iconH && idxRight + 3 < iconData.length
                ? iconData[idxRight + 3]
                : undefined;
            leftCovered = alphaLeft !== undefined && alphaLeft > 128;
            rightCovered = alphaRight !== undefined && alphaRight > 128;
          }
          if (!cellIconMaskCache.current[i]) cellIconMaskCache.current[i] = [];
          cellIconMaskCache.current[i]?.splice(j, 1, { left: leftCovered, right: rightCovered });
        }
      }
    }

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Animation loop
    let lastTime = performance.now();

    // Rain effect parameters (can be defined once)
    const sharpLength = 30; // px, fully opaque part
    const fadeLength = 220; // px, even longer fading part above

    function render(currentTime: number) {
      // --- FPS Throttling ---
      if (currentTime - lastRenderTimeRef.current < FRAME_INTERVAL) {
        animationFrameRef.current = requestAnimationFrame(render);
        return;
      }
      lastRenderTimeRef.current = currentTime;
      if (!canvas || !ctx) return;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      // --- Use precomputed gradient and icon mask ---
      columnsRef.current.forEach((column, i) => {
        if (!column || !column.cells) return;
        column.rainY += deltaTime * 0.1 * column.speed;
        if (column.rainY - sharpLength - fadeLength > displayHeight) {
          column.rainY = -Math.random() * displayHeight * 2;
        }
        column.cells.forEach((cell, rowIndex) => {
          if (!cell) return;
          const y = rowIndex * cellHeight;
          // --- Batch digit change checks: only update every 50ms ---
          if (currentTime - lastDigitUpdateRef.current > 50) {
            if (currentTime - cell.left.lastChange > 2000 + Math.random() * 8000) {
              cell.left.value = Math.floor(Math.random() * 10);
              cell.left.lastChange = currentTime;
              cell.left.baseOpacity = 0.05 + Math.random() * 0.15;
              cell.left.logoLitOpacity = 0.3 + Math.random() * 0.7;
            }
            if (currentTime - cell.right.lastChange > 2000 + Math.random() * 8000) {
              cell.right.value = Math.floor(Math.random() * 10);
              cell.right.lastChange = currentTime;
              cell.right.baseOpacity = 0.05 + Math.random() * 0.15;
              cell.right.logoLitOpacity = 0.3 + Math.random() * 0.7;
            }
          }
          // --- Use precomputed gradient ---
          const gradRow = cellGradientCache.current[i] || [];
          const { tLeft, tRight } = gradRow[rowIndex] || { tLeft: 0, tRight: 0 };
          const leftLightness = 0.6532 + tLeft * (0.9 - 0.6532);
          const leftChroma = 0.2202 + tLeft * (0.25 - 0.2202);
          const leftHue = 25.76;
          const rightLightness = 0.6532 + tRight * (0.9 - 0.6532);
          const rightChroma = 0.2202 + tRight * (0.25 - 0.2202);
          const rightHue = 25.76;
          // --- Use precomputed icon mask ---
          let maskOverride = false;
          let logoLit = false;
          const maskRow = cellIconMaskCache.current[i] || [];
          const iconMask = maskRow[rowIndex] || { left: false, right: false };
          if (iconMask.left && iconMask.right) {
            logoLit = true;
            if (!cell.left.wasLogoLit || !cell.right.wasLogoLit) {
              cell.left.logoLitOpacity = 0.3 + Math.random() * 0.7;
              cell.right.logoLitOpacity = 0.3 + Math.random() * 0.7;
            }
            cell.left.wasLogoLit = true;
            cell.right.wasLogoLit = true;
            maskOverride = true;
          } else {
            cell.left.wasLogoLit = false;
            cell.right.wasLogoLit = false;
          }
          // --- Rain effect ---
          let baseRainEffect = 0;
          if (y >= column.rainY - sharpLength && y <= column.rainY) {
            baseRainEffect = 1;
          } else if (y < column.rainY && y >= column.rainY - sharpLength - fadeLength) {
            baseRainEffect = (y - (column.rainY - sharpLength - fadeLength)) / fadeLength;
          } else {
            baseRainEffect = 0;
          }
          let rainOpacity = Math.min(0.8, baseRainEffect);
          let opacityLeft = Math.min(0.8, cell.left.baseOpacity + rainOpacity);
          let opacityRight = Math.min(0.8, cell.right.baseOpacity + rainOpacity);
          if (logoLit) {
            opacityLeft = cell.left.logoLitOpacity;
            opacityRight = cell.right.logoLitOpacity;
          }
          // --- Draw digits ---
          const textLeft = cell.left.value.toString();
          const textRight = cell.right.value.toString();
          ctx.shadowBlur = 0;
          if (useOklch) {
            ctx.fillStyle = `oklch(${leftLightness} ${leftChroma} ${leftHue} / ${opacityLeft})`;
          } else {
            ctx.fillStyle =
              "#fa4242" +
              Math.round(opacityLeft * 255)
                .toString(16)
                .padStart(2, "0");
          }
          ctx.fillText(textLeft, column.x - digitWidth / 2, y + 8);
          if (useOklch) {
            ctx.fillStyle = `oklch(${rightLightness} ${rightChroma} ${rightHue} / ${opacityRight})`;
          } else {
            ctx.fillStyle =
              "#fa4242" +
              Math.round(opacityRight * 255)
                .toString(16)
                .padStart(2, "0");
          }
          ctx.fillText(textRight, column.x + digitWidth / 2, y + 8);
        });
      });
      if (currentTime - lastDigitUpdateRef.current > 50) {
        lastDigitUpdateRef.current = currentTime;
      }
      animationFrameRef.current = requestAnimationFrame(render);
    }

    render(performance.now());

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-full overflow-hidden
      [-webkit-mask:radial-gradient(50%_50%_at_50%_50%,#000_23.06%,transparent);
      [mask:radial-gradient(50%_50%_at_50%_50%,#000_23.06%,transparent)]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
