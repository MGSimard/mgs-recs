import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";

function setCanvasSize(canvas: HTMLCanvasElement, offscreen: OffscreenCanvas) {
  const dpr = Math.round(Math.max(1, Math.min(window.devicePixelRatio ?? 1, 2)));
  canvas.width = offscreen.width = canvas.offsetWidth * dpr;
  canvas.height = offscreen.height = canvas.offsetHeight * dpr;
  return dpr;
}

export interface ShaderProps {
  source: string;
  textures?: string[];
  maxFps?: number;
  initialState?: "playing" | "paused";
  onRender?: (time: number) => void;
}
export interface ShaderHandle {
  play: () => void;
  pause: () => void;
  fireEvent: () => number;
}
export const Shader = forwardRef<ShaderHandle, ShaderProps>(function ShaderComponent(props, ref) {
  const { source, textures = [], maxFps = 1 / 0, initialState = "playing", onRender } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playbackStateRef = useRef<"playing" | "paused">(initialState);
  const timeRef = useRef<number>(0);
  const eventTimeRef = useRef<number>(0);
  const glStateRef = useRef<{
    gl?: WebGL2RenderingContext;
    program?: WebGLProgram;
    uniformLocations?: Map<string, WebGLUniformLocation | null>;
  }>({});

  useImperativeHandle(
    ref,
    () => ({
      play() {
        playbackStateRef.current = "playing";
      },
      pause() {
        playbackStateRef.current = "paused";
      },
      fireEvent: () => {
        eventTimeRef.current = timeRef.current;
        return eventTimeRef.current;
      },
    }),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl = canvas as HTMLCanvasElement;

    const offscreenCanvas = new window.OffscreenCanvas(canvasEl.offsetWidth, canvasEl.offsetHeight);
    let dpr = setCanvasSize(canvasEl, offscreenCanvas);

    let animationId: number;
    const glRaw = offscreenCanvas.getContext("webgl2");
    const ctxRaw = canvasEl.getContext("2d");
    if (!glRaw || !ctxRaw) return;
    const gl = glRaw as WebGL2RenderingContext;
    const ctx = ctxRaw as CanvasRenderingContext2D;

    function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      `#version 300 es\nprecision mediump float;\nin vec2 coordinates;\n\nuniform vec2 u_resolution;\n\nout vec2 fragCoord;\n\nvoid main(void) {\n  gl_Position = vec4(coordinates, 0.0, 1.0);\n  fragCoord = (coordinates + 1.0) * 0.5 * u_resolution;\n  fragCoord.y = u_resolution.y - fragCoord.y;\n}\n`
    );
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, source);
    if (!vertexShader || !fragmentShader) return;

    function createProgram(gl: WebGL2RenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
      const program = gl.createProgram();
      if (!program) return null;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    }
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const coordLoc = gl.getAttribLocation(program, "coordinates");
    gl.enableVertexAttribArray(coordLoc);
    gl.vertexAttribPointer(coordLoc, 2, gl.FLOAT, false, 0, 0);
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uEventTime = gl.getUniformLocation(program, "u_event_time");
    glStateRef.current = { gl, program };
    gl.uniform2f(uResolution, canvasEl.width / dpr, canvasEl.height / dpr);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.disable(gl.DEPTH_TEST);

    let startTime: number | null = null;
    let lastFrame = 0;
    type TextureInfo = {
      width: number;
      height: number;
      texture: WebGLTexture;
      location: WebGLUniformLocation | null;
    };
    const loadedTextures: TextureInfo[] = [];
    function render(frameTime: number) {
      if (playbackStateRef.current === "paused") {
        animationId = window.requestAnimationFrame(render);
        return;
      }
      const now = frameTime / 1000;
      if (startTime === null) startTime = now;
      if (maxFps !== 1 / 0) {
        if (frameTime - lastFrame < 1000 / maxFps) {
          animationId = window.requestAnimationFrame(render);
          return;
        }
        lastFrame = frameTime;
      }
      timeRef.current = now - startTime;
      if (onRender) onRender(timeRef.current);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(uTime, timeRef.current);
      gl.uniform1f(uEventTime, eventTimeRef.current);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      for (let i = 0; i < loadedTextures.length; i++) {
        const tex = loadedTextures[i];
        if (tex && tex.location) {
          gl.uniform1i(tex.location, i);
          gl.activeTexture(gl.TEXTURE0 + i);
          gl.bindTexture(gl.TEXTURE_2D, tex.texture);
        }
      }
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      if (offscreenCanvas.width > 0 && offscreenCanvas.height > 0) ctx.drawImage(offscreenCanvas as any, 0, 0);
      animationId = window.requestAnimationFrame(render);
    }
    (async () => {
      for (let i = 0; i < textures.length; i++) {
        try {
          const texInfo = await new Promise<TextureInfo>((resolve, reject) => {
            const texture = gl.createTexture();
            if (!texture) return reject();
            gl.activeTexture(gl.TEXTURE0 + i);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            const info: TextureInfo = {
              width: 1,
              height: 1,
              texture,
              location: gl.getUniformLocation(program, `u_texture_${i}`),
            };
            const img = new window.Image();
            img.addEventListener("load", () => {
              info.width = img.width;
              info.height = img.height;
              gl.activeTexture(gl.TEXTURE0 + i);
              gl.bindTexture(gl.TEXTURE_2D, info.texture);
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
              resolve(info);
            });
            img.src = textures[i] ?? "";
          });
          loadedTextures.push(texInfo);
        } catch {
          return;
        }
      }
      animationId = window.requestAnimationFrame(render);
    })();
    const resizeObserver = new window.ResizeObserver(() => {
      dpr = setCanvasSize(canvasEl, offscreenCanvas);
      gl.uniform2f(uResolution, canvasEl.width / dpr, canvasEl.height / dpr);
    });
    resizeObserver.observe(canvasEl);

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
      for (const { texture } of loadedTextures) {
        gl.deleteTexture(texture);
      }
      glStateRef.current = {};
    };
  }, [source, textures.join("")]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
});
