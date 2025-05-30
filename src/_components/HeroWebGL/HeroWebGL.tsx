import { useRef, useEffect } from "react";
import { Shader, ShaderHandle, ShaderProps } from "./Shader";

const shaderTextures = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACO4fbyAAAAFXRSTlMAECAwQFBgb3B/gI+Qn6CvsL/P3+8tfMkfAAACAElEQVR42u2Sy7LcIAxEGyETjMGOLPT/v5oIxuNFfG9VNlmk5iygS0JqXvjw4f8m5LbxpcsdS5dqrgap0FjkDAnemgsqE9dhnbVTRXwFaT/EVgySXbEm1l7qMA2vrLHHTB2Xq8mhSuAZ6sagrvUYtbF7lxVf0JSA4h2XJmZw5IrNbLQ8t3MMY7aASbIFCCpgo7Ggeu1YwoAe8C4RjwTbfOoN4FLE4FgemQJIAgBtPorwMF4MzjseI6KEcYYAaB39MnhaasUjy+iFvcMphlk27AsmZG7/o9M0TsplW9zRmLfNc/f5UZWAHxaRjDwqJx7JFi7He2IafXjo1np1954xjUv3X9EAttZF7AwYiPgY9i6n75yswEfFI+XJ2IluN4zFWphtpzFXApJlJFPyhQX3vWDpUg89yG8xR1ZVPJKMnoy9HhfUC3JPzNkyEybyEzw/XdX77q5zqgChmvVcTzwSbblf4jZerQ7LNfi0K3Z7kUIasUMQ5hmLwjnOP5+OAGl4RuV9TbfxZhm49n9/EDZ6x7RdTUXgnIL7ZzRDEL4+7yOLNX8J78jcjDkinLan3zCw2xpps3QbeyxHlk4Az2yE05uPQZUDrVYAVabcK74iq5nMhgMB2aWA2v2hcBvPtzMZbknNlDGwBod2e1WQmPWCbyD62yzRN9lA9FYBHz78G34BbJAea2DLcxgAAAAASUVORK5CYII=",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAABC0lEQVQoz82RPUvCYRTFf1mKUURLrhFhXyCbaqvNhhYNzM/jN2i0qbelaKnJxhyaI8ItCBt6QzKMv+RpudK9ILT6LA/Pj8M557kXxuJMhFeNNSBhh75T7JMH3tn10mUGCHEfDDYQQjQg5XDVcg6DuGL3caz0gBADlhxL84IQ38x7acHiboLBttEz8DWGcUcjSwSa4gkh+uQcneETITpMe/GWxV0G36rRevzcgeG9QK+MbnqY5QMhvph1dIEEIdpMDrsCFG0wF3SduEwagBN+vPO5xRVDiabRVQ/n6CHEGxlHF235LT8yKJEF4JTk3+VzbXHrgd4ZXflDU8ArDaBF00kzPPIM3PoaY3J+AdhYZfg614niAAAAAElFTkSuQmCC",
];

export function HeroWebGL() {
  const containerDivRef = useRef<HTMLDivElement>(null);
  const shaderRef = useRef<ShaderHandle>(null);

  useEffect(() => {
    let timeoutId: number | undefined, idleId: number | undefined;
    function playShader() {
      shaderRef.current?.play && shaderRef.current.play();
    }
    if ("requestIdleCallback" in window) idleId = (window as any).requestIdleCallback(playShader);
    if (idleId === undefined) timeoutId = window.setTimeout(playShader, 1);
    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (idleId !== undefined && (window as any).cancelIdleCallback) (window as any).cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <div
      ref={containerDivRef}
      className="relative w-full h-full select-none [mask:radial-gradient(50%_50%_at_50%_50%,#000_23.06%,transparent)]"
      aria-hidden>
      <Shader
        ref={shaderRef}
        initialState="paused"
        maxFps={60}
        textures={shaderTextures}
        source={`#version 300 es\nprecision mediump float;\n\nin vec2 fragCoord;\n\nuniform float u_time;\nuniform float u_scroll;\nuniform vec2 u_resolution;\nuniform sampler2D u_texture_0;\nuniform sampler2D u_texture_1;\n\nout vec4 fragColor;\n\n// https://stackoverflow.com/a/28095165\nfloat PHI = 1.61803398874989484820459;\nfloat random(vec2 xy) {\n  return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);\n}\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nfloat map_clamp(float value, float min1, float max1, float min2, float max2) {\n  return clamp(map(value, min1, max1, min2, max2), min2, max2);\n}\n\n// https://github.com/glslify/glsl-easings\nfloat quadraticOut(float t) {\n  return -t * (t - 2.0);\n}\n\nvoid main() {\n  float freq = 3.0;\n  vec2 st = fragCoord.xy;\n  vec2 st2 = vec2(int(st.x / 5.0), int(st.y / 12.0));\n  vec2 st3 = vec2(int(st.x / 15.0), int(st.y / 12.0));\n\n  float col_offset = 2.0 + random(vec2(st3.x, 0.0)) * 20.0;\n  float row_offset = col_offset + (st3.y * 0.1);\n  float matrix_elapsed = mod(u_time, 26.0);\n  bool highlight = matrix_elapsed >= row_offset && matrix_elapsed < row_offset + 2.0 && mod(st2.x, 3.0) != 2.0;\n\n  freq *= random(st2) * 0.1;\n  float rand = random(st2 * floor(((u_time + 12876.0) * freq) + freq) + 1.0);\n  float b = float(int(rand * 9.0));\n  float a = b * 5.0;\n  float x = 10.0 + a + mod(fragCoord.x, 5.0);\n  float y = mod(fragCoord.y, 12.0);\n  vec4 tex = texture(u_texture_0, vec2(x/60.0, y/12.0));\n\n  fragColor = vec4(250.0/255.0, 66.0/255.0, 66.0/255.0, 1.0);\n\n  vec2 to = vec2(u_resolution.x / 2.0 + (u_resolution.x*0.1), u_resolution.y * 0.25);\n  vec2 from = to - 400.0;\n  float duration = 5.0;\n  float progress = quadraticOut(clamp(u_time / duration, 0.0, 1.0));\n  float centerX = from.x + ((to.x - from.x) * progress);\n  float centerY = from.y + ((to.y - from.y) * progress);\n  float dist = distance(fragCoord, vec2(centerX, centerY));\n  float radius = 400.0;\n  vec4 secondary_color = vec4(1.0, 0.286, 0.086, 1.0);\n  float mix_amount = map_clamp(dist, 0.0, radius, 0.0, 1.0);\n  fragColor = mix(secondary_color, fragColor, mix_amount);\n\n  // Logo\n  float img_width = u_resolution.y * 0.52;\n  float img_x = (u_resolution.x / 2.0) - (img_width / 2.0);\n  float img_y = (u_resolution.y / 2.0) - (img_width / 2.0);\n  float imgx = map(st2.x, img_x / 5.0, (img_x+img_width) / 5.0, 0.0, 1.0);\n  float imgy = map(st2.y, img_y / 12.0, (img_y+img_width) / 12.0, 0.0, 1.0);\n  vec4 tex_logo = texture(u_texture_1, vec2(imgx, imgy));\n\n  bool is_logo = tex_logo.a >= 0.2;\n\n  if (highlight && !is_logo) {\n    fragColor.a = tex.a * (map(matrix_elapsed, row_offset, row_offset + 2.0, 1.0, 0.5));\n  } else {\n    fragColor.a = tex.a * map(random(st3 * floor(((u_time + 12876.0) * freq) + freq) + 1.0), 0.0, 1.0, 0.5, 1.0);\n  }\n  if (mod(st2.x, 3.0) == 2.0) {\n    fragColor.a = 0.0;\n  }\n\n  if (tex_logo.a < 0.2) {\n    if (!highlight) {\n      fragColor.a *= clamp(map(u_scroll, 0.0, 200.0, 0.8, 1.0), 0.8, 1.0);\n    }\n  } else {\n    fragColor.a *= clamp(map(u_scroll, 0.0, 200.0, 1.5, 1.0), 1.0, 1.5);\n  }\n\n  // intro\n  float intro_offset = random(st2) * 3.0;\n  fragColor.a *= step(intro_offset, u_time);\n\n  fragColor.rgb *= fragColor.a;\n}\n`}
      />
    </div>
  );
}
