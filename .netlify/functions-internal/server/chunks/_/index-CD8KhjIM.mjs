import { jsx, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

function setCanvasSize(canvas, offscreen) {
  var _a;
  const dpr = Math.round(Math.max(1, Math.min((_a = window.devicePixelRatio) != null ? _a : 1, 2)));
  canvas.width = offscreen.width = canvas.offsetWidth * dpr;
  canvas.height = offscreen.height = canvas.offsetHeight * dpr;
  return dpr;
}
const Shader = forwardRef(function ShaderComponent(props, ref) {
  const {
    source,
    textures = [],
    maxFps = 1 / 0,
    initialState = "playing",
    onRender
  } = props;
  const canvasRef = useRef(null);
  const playbackStateRef = useRef(initialState);
  const timeRef = useRef(0);
  const eventTimeRef = useRef(0);
  const glStateRef = useRef({});
  useImperativeHandle(ref, () => ({
    play() {
      playbackStateRef.current = "playing";
    },
    pause() {
      playbackStateRef.current = "paused";
    },
    fireEvent: () => {
      eventTimeRef.current = timeRef.current;
      return eventTimeRef.current;
    }
  }), []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl = canvas;
    const offscreenCanvas = new window.OffscreenCanvas(canvasEl.offsetWidth, canvasEl.offsetHeight);
    let dpr = setCanvasSize(canvasEl, offscreenCanvas);
    let animationId;
    const glRaw = offscreenCanvas.getContext("webgl2");
    const ctxRaw = canvasEl.getContext("2d");
    if (!glRaw || !ctxRaw) return;
    const gl = glRaw;
    const ctx = ctxRaw;
    function compileShader(gl_0, type, source_0) {
      const shader = gl_0.createShader(type);
      if (!shader) return null;
      gl_0.shaderSource(shader, source_0);
      gl_0.compileShader(shader);
      if (!gl_0.getShaderParameter(shader, gl_0.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl_0.getShaderInfoLog(shader));
        gl_0.deleteShader(shader);
        return null;
      }
      return shader;
    }
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, `#version 300 es
precision mediump float;
in vec2 coordinates;

uniform vec2 u_resolution;

out vec2 fragCoord;

void main(void) {
  gl_Position = vec4(coordinates, 0.0, 1.0);
  fragCoord = (coordinates + 1.0) * 0.5 * u_resolution;
  fragCoord.y = u_resolution.y - fragCoord.y;
}
`);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, source);
    if (!vertexShader || !fragmentShader) return;
    function createProgram(gl_1, vs, fs) {
      const program = gl_1.createProgram();
      if (!program) return null;
      gl_1.attachShader(program, vs);
      gl_1.attachShader(program, fs);
      gl_1.linkProgram(program);
      if (!gl_1.getProgramParameter(program, gl_1.LINK_STATUS)) {
        console.error("Unable to initialize the shader program: " + gl_1.getProgramInfoLog(program));
        return null;
      }
      return program;
    }
    const program_0 = createProgram(gl, vertexShader, fragmentShader);
    if (!program_0) {
      return;
    }
    gl.useProgram(program_0);
    const buffer = gl.createBuffer();
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const coordLoc = gl.getAttribLocation(program_0, "coordinates");
    gl.enableVertexAttribArray(coordLoc);
    gl.vertexAttribPointer(coordLoc, 2, gl.FLOAT, false, 0, 0);
    const uResolution = gl.getUniformLocation(program_0, "u_resolution");
    const uTime = gl.getUniformLocation(program_0, "u_time");
    const uEventTime = gl.getUniformLocation(program_0, "u_event_time");
    glStateRef.current = {
      gl,
      program: program_0
    };
    gl.uniform2f(uResolution, canvasEl.width / dpr, canvasEl.height / dpr);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.disable(gl.DEPTH_TEST);
    let startTime = null;
    let lastFrame = 0;
    const loadedTextures = [];
    function render(frameTime) {
      if (playbackStateRef.current === "paused") {
        animationId = window.requestAnimationFrame(render);
        return;
      }
      const now = frameTime / 1e3;
      if (startTime === null) startTime = now;
      if (maxFps !== 1 / 0) {
        if (frameTime - lastFrame < 1e3 / maxFps) {
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
      if (offscreenCanvas.width > 0 && offscreenCanvas.height > 0) ctx.drawImage(offscreenCanvas, 0, 0);
      animationId = window.requestAnimationFrame(render);
    }
    (async () => {
      for (let i_0 = 0; i_0 < textures.length; i_0++) {
        try {
          const texInfo = await new Promise((resolve, reject) => {
            var _a;
            const texture = gl.createTexture();
            if (!texture) return reject();
            gl.activeTexture(gl.TEXTURE0 + i_0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            const info = {
              width: 1,
              height: 1,
              texture,
              location: gl.getUniformLocation(program_0, `u_texture_${i_0}`)
            };
            const img = new window.Image();
            img.addEventListener("load", () => {
              info.width = img.width;
              info.height = img.height;
              gl.activeTexture(gl.TEXTURE0 + i_0);
              gl.bindTexture(gl.TEXTURE_2D, info.texture);
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
              resolve(info);
            });
            img.src = (_a = textures[i_0]) != null ? _a : "";
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
      gl.deleteProgram(program_0);
      gl.deleteBuffer(buffer);
      for (const {
        texture: texture_0
      } of loadedTextures) {
        gl.deleteTexture(texture_0);
      }
      glStateRef.current = {};
    };
  }, [source, textures.join("")]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "absolute inset-0 h-full w-full", "aria-hidden": true });
});
const shaderTextures = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACO4fbyAAAAFXRSTlMAECAwQFBgb3B/gI+Qn6CvsL/P3+8tfMkfAAACAElEQVR42u2Sy7LcIAxEGyETjMGOLPT/v5oIxuNFfG9VNlmk5iygS0JqXvjw4f8m5LbxpcsdS5dqrgap0FjkDAnemgsqE9dhnbVTRXwFaT/EVgySXbEm1l7qMA2vrLHHTB2Xq8mhSuAZ6sagrvUYtbF7lxVf0JSA4h2XJmZw5IrNbLQ8t3MMY7aASbIFCCpgo7Ggeu1YwoAe8C4RjwTbfOoN4FLE4FgemQJIAgBtPorwMF4MzjseI6KEcYYAaB39MnhaasUjy+iFvcMphlk27AsmZG7/o9M0TsplW9zRmLfNc/f5UZWAHxaRjDwqJx7JFi7He2IafXjo1np1954xjUv3X9EAttZF7AwYiPgY9i6n75yswEfFI+XJ2IluN4zFWphtpzFXApJlJFPyhQX3vWDpUg89yG8xR1ZVPJKMnoy9HhfUC3JPzNkyEybyEzw/XdX77q5zqgChmvVcTzwSbblf4jZerQ7LNfi0K3Z7kUIasUMQ5hmLwjnOP5+OAGl4RuV9TbfxZhm49n9/EDZ6x7RdTUXgnIL7ZzRDEL4+7yOLNX8J78jcjDkinLan3zCw2xpps3QbeyxHlk4Az2yE05uPQZUDrVYAVabcK74iq5nMhgMB2aWA2v2hcBvPtzMZbknNlDGwBod2e1WQmPWCbyD62yzRN9lA9FYBHz78G34BbJAea2DLcxgAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAABC0lEQVQoz82RPUvCYRTFf1mKUURLrhFhXyCbaqvNhhYNzM/jN2i0qbelaKnJxhyaI8ItCBt6QzKMv+RpudK9ILT6LA/Pj8M557kXxuJMhFeNNSBhh75T7JMH3tn10mUGCHEfDDYQQjQg5XDVcg6DuGL3caz0gBADlhxL84IQ38x7acHiboLBttEz8DWGcUcjSwSa4gkh+uQcneETITpMe/GWxV0G36rRevzcgeG9QK+MbnqY5QMhvph1dIEEIdpMDrsCFG0wF3SduEwagBN+vPO5xRVDiabRVQ/n6CHEGxlHF235LT8yKJEF4JTk3+VzbXHrgd4ZXflDU8ArDaBF00kzPPIM3PoaY3J+AdhYZfg614niAAAAAElFTkSuQmCC"];
function HeroWebGL() {
  const $ = c(3);
  const containerDivRef = useRef(null);
  const shaderRef = useRef(null);
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      let timeoutId;
      let idleId;
      const playShader = function playShader2() {
        var _a;
        ((_a = shaderRef.current) == null ? void 0 : _a.play) && shaderRef.current.play();
      };
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(playShader);
      }
      if (idleId === void 0) {
        timeoutId = window.setTimeout(playShader, 1);
      }
      return () => {
        if (timeoutId !== void 0) {
          window.clearTimeout(timeoutId);
        }
        if (idleId !== void 0 && window.cancelIdleCallback) {
          window.cancelIdleCallback(idleId);
        }
      };
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("div", { ref: containerDivRef, className: "relative w-full h-full select-none [mask:radial-gradient(50%_50%_at_50%_50%,#000_23.06%,transparent)]", "aria-hidden": true, children: /* @__PURE__ */ jsx(Shader, { ref: shaderRef, initialState: "paused", maxFps: 60, textures: shaderTextures, source: `#version 300 es
precision mediump float;

in vec2 fragCoord;

uniform float u_time;
uniform float u_scroll;
uniform vec2 u_resolution;
uniform sampler2D u_texture_0;
uniform sampler2D u_texture_1;

out vec4 fragColor;

// https://stackoverflow.com/a/28095165
float PHI = 1.61803398874989484820459;
float random(vec2 xy) {
  return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float map_clamp(float value, float min1, float max1, float min2, float max2) {
  return clamp(map(value, min1, max1, min2, max2), min2, max2);
}

// https://github.com/glslify/glsl-easings
float quadraticOut(float t) {
  return -t * (t - 2.0);
}

void main() {
  float freq = 3.0;
  vec2 st = fragCoord.xy;
  vec2 st2 = vec2(int(st.x / 5.0), int(st.y / 12.0));
  vec2 st3 = vec2(int(st.x / 15.0), int(st.y / 12.0));

  float col_offset = 2.0 + random(vec2(st3.x, 0.0)) * 20.0;
  float row_offset = col_offset + (st3.y * 0.1);
  float matrix_elapsed = mod(u_time, 26.0);
  bool highlight = matrix_elapsed >= row_offset && matrix_elapsed < row_offset + 2.0 && mod(st2.x, 3.0) != 2.0;

  freq *= random(st2) * 0.1;
  float rand = random(st2 * floor(((u_time + 12876.0) * freq) + freq) + 1.0);
  float b = float(int(rand * 9.0));
  float a = b * 5.0;
  float x = 10.0 + a + mod(fragCoord.x, 5.0);
  float y = mod(fragCoord.y, 12.0);
  vec4 tex = texture(u_texture_0, vec2(x/60.0, y/12.0));

  fragColor = vec4(250.0/255.0, 66.0/255.0, 66.0/255.0, 1.0);

  vec2 to = vec2(u_resolution.x / 2.0 + (u_resolution.x*0.1), u_resolution.y * 0.25);
  vec2 from = to - 400.0;
  float duration = 5.0;
  float progress = quadraticOut(clamp(u_time / duration, 0.0, 1.0));
  float centerX = from.x + ((to.x - from.x) * progress);
  float centerY = from.y + ((to.y - from.y) * progress);
  float dist = distance(fragCoord, vec2(centerX, centerY));
  float radius = 400.0;
  vec4 secondary_color = vec4(1.0, 0.286, 0.086, 1.0);
  float mix_amount = map_clamp(dist, 0.0, radius, 0.0, 1.0);
  fragColor = mix(secondary_color, fragColor, mix_amount);

  // Logo
  float img_width = u_resolution.y * 0.52;
  float img_x = (u_resolution.x / 2.0) - (img_width / 2.0);
  float img_y = (u_resolution.y / 2.0) - (img_width / 2.0);
  float imgx = map(st2.x, img_x / 5.0, (img_x+img_width) / 5.0, 0.0, 1.0);
  float imgy = map(st2.y, img_y / 12.0, (img_y+img_width) / 12.0, 0.0, 1.0);
  vec4 tex_logo = texture(u_texture_1, vec2(imgx, imgy));

  bool is_logo = tex_logo.a >= 0.2;

  if (highlight && !is_logo) {
    fragColor.a = tex.a * (map(matrix_elapsed, row_offset, row_offset + 2.0, 1.0, 0.5));
  } else {
    fragColor.a = tex.a * map(random(st3 * floor(((u_time + 12876.0) * freq) + freq) + 1.0), 0.0, 1.0, 0.5, 1.0);
  }
  if (mod(st2.x, 3.0) == 2.0) {
    fragColor.a = 0.0;
  }

  if (tex_logo.a < 0.2) {
    if (!highlight) {
      fragColor.a *= clamp(map(u_scroll, 0.0, 200.0, 0.8, 1.0), 0.8, 1.0);
    }
  } else {
    fragColor.a *= clamp(map(u_scroll, 0.0, 200.0, 1.5, 1.0), 1.0, 1.5);
  }

  // intro
  float intro_offset = random(st2) * 3.0;
  fragColor.a *= step(intro_offset, u_time);

  fragColor.rgb *= fragColor.a;
}
` }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
const SplitComponent = function PageHome() {
  const $ = c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(HeroWebGL, {}) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};

export { SplitComponent as component };
//# sourceMappingURL=index-CD8KhjIM.mjs.map
