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
      }
    };

    // Initialize canvas size
    let displayWidth = 0;
    let displayHeight = 0;
    let digitWidth = 10; // Default, will be measured
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
    }

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize columns
    function initializeColumns() {
      if (!canvas) return [];
      const cellHeight = 12;
      const pairGap = digitWidth; // Gap equal to width of a single digit
      const columnWidth = digitWidth * 2 + pairGap; // Add gap to pair width
      const columns = Math.ceil(canvas.width / columnWidth);
      const rows = Math.ceil(canvas.height / cellHeight);

      return Array.from({ length: columns }, (_, i) => ({
        x: i * columnWidth + columnWidth / 2 - pairGap / 2, // Center pair, accounting for gap
        cells: Array.from({ length: rows }, () => ({
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
        })),
        rainY: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
      }));
    }

    columnsRef.current = initializeColumns();

    // Animation loop
    let lastTime = performance.now();
    function render(currentTime: number) {
      if (!canvas || !ctx) return;

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Make canvas transparent (no black fill)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = "10px monospace";
      ctx.textAlign = "center";

      // Icon overlay setup
      let iconData: Uint8ClampedArray | null = null;
      let iconW = 0,
        iconH = 0;
      let iconScale = 1,
        iconOffsetX = 0,
        iconOffsetY = 0;
      if (iconReadyRef.current && iconCanvasRef.current) {
        iconW = iconCanvasRef.current.width;
        iconH = iconCanvasRef.current.height;
        const iconCtx = iconCanvasRef.current.getContext("2d");
        if (iconCtx) {
          iconData = iconCtx.getImageData(0, 0, iconW, iconH).data;
          // Center and scale icon to fit canvas (contain), but scale down to 60%
          const fitScale = Math.min(displayWidth / iconW, displayHeight / iconH);
          iconScale = fitScale * 0.6; // 60% of natural fit
          iconOffsetX = (displayWidth - iconW * iconScale) / 2;
          iconOffsetY = (displayHeight - iconH * iconScale) / 2;
        }
      }

      // Update and draw columns
      columnsRef.current.forEach((column) => {
        // Rain effect parameters
        const sharpLength = 30; // px, fully opaque part
        const fadeLength = 220; // px, even longer fading part above
        // Update rain position
        column.rainY += deltaTime * 0.1 * column.speed;
        if (column.rainY - sharpLength - fadeLength > displayHeight) {
          // Start a new rain at the top, with a longer random delay
          column.rainY = -Math.random() * displayHeight * 2;
        }

        // Draw cells
        column.cells.forEach((cell, rowIndex) => {
          const y = rowIndex * 12;
          // Random chance to change left digit
          if (currentTime - cell.left.lastChange > 2000 + Math.random() * 8000) {
            cell.left.value = Math.floor(Math.random() * 10);
            cell.left.lastChange = currentTime;
            cell.left.baseOpacity = 0.05 + Math.random() * 0.15;
            cell.left.logoLitOpacity = 0.3 + Math.random() * 0.7;
          }
          // Random chance to change right digit
          if (currentTime - cell.right.lastChange > 2000 + Math.random() * 8000) {
            cell.right.value = Math.floor(Math.random() * 10);
            cell.right.lastChange = currentTime;
            cell.right.baseOpacity = 0.05 + Math.random() * 0.15;
            cell.right.logoLitOpacity = 0.3 + Math.random() * 0.7;
          }

          // Calculate base rain effect based on vertical position (per column, for both digits)
          let baseRainEffect = 0;
          if (y >= column.rainY - sharpLength && y <= column.rainY) {
            baseRainEffect = 1; // Fully opaque at the sharp tip
          } else if (y < column.rainY && y >= column.rainY - sharpLength - fadeLength) {
            // Fading effect above the sharp tip
            baseRainEffect = (y - (column.rainY - sharpLength - fadeLength)) / fadeLength;
          } else {
            baseRainEffect = 0; // No effect outside the rain area
          }

          // Apply the same rain effect to both digits in the pair
          let rainOpacity = Math.min(0.8, baseRainEffect);
          let opacityLeft = Math.min(0.8, cell.left.baseOpacity + rainOpacity);
          let opacityRight = Math.min(0.8, cell.right.baseOpacity + rainOpacity);

          // Per-digit lightness boost (radial from center for testing)
          const gradientCenterX = displayWidth * 0.75; // between center and top right
          const gradientCenterY = displayHeight * 0.25; // a bit down from the top
          const gradientRadius = Math.max(displayWidth, displayHeight) * 0.5; // smaller, more red preserved

          // Left digit position
          const dxLeft = column.x - digitWidth / 2 - gradientCenterX;
          const dyLeft = y + 8 - gradientCenterY;
          const distLeft = Math.sqrt(dxLeft * dxLeft + dyLeft * dyLeft);
          const tLeft = Math.max(0, 1 - distLeft / gradientRadius); // 1 at center, 0 at edge
          // Saturated red glow: increase both lightness and chroma toward the center
          const leftLightness = 0.6532 + tLeft * (0.9 - 0.6532);
          const leftChroma = 0.2202 + tLeft * (0.25 - 0.2202);
          const leftHue = 25.76;

          // Right digit position
          const dxRight = column.x + digitWidth / 2 - gradientCenterX;
          const dyRight = y + 8 - gradientCenterY;
          const distRight = Math.sqrt(dxRight * dxRight + dyRight * dyRight);
          const tRight = Math.max(0, 1 - distRight / gradientRadius);
          const rightLightness = 0.6532 + tRight * (0.9 - 0.6532);
          const rightChroma = 0.2202 + tRight * (0.25 - 0.2202);
          const rightHue = 25.76;

          // Icon overlay setup (refined: only light up both digits if both are covered)
          let maskOverride = false;
          let logoLit = false;
          if (iconData) {
            const py = Math.round((y + 8 - iconOffsetY) / iconScale);

            // Check left digit position against icon
            const pxLeft = Math.round((column.x - digitWidth / 2 - iconOffsetX) / iconScale);
            const idxLeft = (py * iconW + pxLeft) * 4;
            const alphaLeft =
              pxLeft >= 0 && pxLeft < iconW && py >= 0 && py < iconH && idxLeft + 3 < iconData.length
                ? iconData[idxLeft + 3]
                : undefined;

            // Check right digit position against icon
            const pxRight = Math.round((column.x + digitWidth / 2 - iconOffsetX) / iconScale);
            const idxRight = (py * iconW + pxRight) * 4;
            const alphaRight =
              pxRight >= 0 && pxRight < iconW && py >= 0 && py < iconH && idxRight + 3 < iconData.length
                ? iconData[idxRight + 3]
                : undefined;

            const leftCovered = alphaLeft !== undefined && alphaLeft > 128;
            const rightCovered = alphaRight !== undefined && alphaRight > 128;
            if (leftCovered && rightCovered) {
              logoLit = true;
              // Only randomize logoLitOpacity if not previously logo-lit
              if (!cell.left.wasLogoLit || !cell.right.wasLogoLit) {
                cell.left.logoLitOpacity = 0.3 + Math.random() * 0.7;
                cell.right.logoLitOpacity = 0.3 + Math.random() * 0.7;
              }
              opacityLeft = cell.left.logoLitOpacity;
              opacityRight = cell.right.logoLitOpacity;
              cell.left.wasLogoLit = true;
              cell.right.wasLogoLit = true;
              maskOverride = true;
            } else {
              cell.left.wasLogoLit = false;
              cell.right.wasLogoLit = false;
            }
          } else {
            cell.left.wasLogoLit = false;
            cell.right.wasLogoLit = false;
          }

          // Draw both digits as a pair, perfectly spaced
          const textLeft = cell.left.value.toString();
          const textRight = cell.right.value.toString();
          ctx.shadowBlur = 0;
          // Left digit
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
          // Right digit
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
