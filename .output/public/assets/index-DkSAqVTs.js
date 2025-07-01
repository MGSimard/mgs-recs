import{r as l,j as h,c as Q}from"./main-D5Q2X7ST.js";function j(o,s){const a=Math.round(Math.max(1,Math.min(window.devicePixelRatio??1,2)));return o.width=s.width=o.offsetWidth*a,o.height=s.height=o.offsetHeight*a,a}const J=l.forwardRef(function(s,a){const{source:A,textures:c=[],maxFps:m=1/0,initialState:x="playing",onRender:d}=s,_=l.useRef(null),v=l.useRef(x),T=l.useRef(0),b=l.useRef(0),P=l.useRef({});return l.useImperativeHandle(a,()=>({play(){v.current="playing"},pause(){v.current="paused"},fireEvent:()=>(b.current=T.current,b.current)}),[]),l.useEffect(()=>{const L=_.current;if(!L)return;const n=L,g=new window.OffscreenCanvas(n.offsetWidth,n.offsetHeight);let E=j(n,g),w;const D=g.getContext("webgl2"),M=n.getContext("2d");if(!D||!M)return;const e=D,X=M;function B(t,u,i){const r=t.createShader(u);return r?(t.shaderSource(r,i),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}const S=B(e,e.VERTEX_SHADER,`#version 300 es
precision mediump float;
in vec2 coordinates;

uniform vec2 u_resolution;

out vec2 fragCoord;

void main(void) {
  gl_Position = vec4(coordinates, 0.0, 1.0);
  fragCoord = (coordinates + 1.0) * 0.5 * u_resolution;
  fragCoord.y = u_resolution.y - fragCoord.y;
}
`),F=B(e,e.FRAGMENT_SHADER,A);if(!S||!F)return;function Y(t,u,i){const r=t.createProgram();return r?(t.attachShader(r,u),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)?r:(console.error("Unable to initialize the shader program: "+t.getProgramInfoLog(r)),null)):null}const f=Y(e,S,F);if(!f)return;e.useProgram(f);const N=e.createBuffer(),k=new Float32Array([-1,-1,1,-1,-1,1,1,1]);e.bindBuffer(e.ARRAY_BUFFER,N),e.bufferData(e.ARRAY_BUFFER,k,e.STATIC_DRAW);const G=e.getAttribLocation(f,"coordinates");e.enableVertexAttribArray(G),e.vertexAttribPointer(G,2,e.FLOAT,!1,0,0);const q=e.getUniformLocation(f,"u_resolution"),O=e.getUniformLocation(f,"u_time"),V=e.getUniformLocation(f,"u_event_time");P.current={gl:e,program:f},e.uniform2f(q,n.width/E,n.height/E),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE),e.disable(e.DEPTH_TEST);let I=null,z=0;const R=[];function y(t){if(v.current==="paused"){w=window.requestAnimationFrame(y);return}const u=t/1e3;if(I===null&&(I=u),m!==1/0){if(t-z<1e3/m){w=window.requestAnimationFrame(y);return}z=t}T.current=u-I,d&&d(T.current),e.viewport(0,0,e.canvas.width,e.canvas.height),e.uniform1f(O,T.current),e.uniform1f(V,b.current),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);for(let i=0;i<R.length;i++){const r=R[i];r&&r.location&&(e.uniform1i(r.location,i),e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_2D,r.texture))}e.drawArrays(e.TRIANGLE_STRIP,0,4),X.clearRect(0,0,n.width,n.height),g.width>0&&g.height>0&&X.drawImage(g,0,0),w=window.requestAnimationFrame(y)}(async()=>{for(let t=0;t<c.length;t++)try{const u=await new Promise((i,r)=>{const U=e.createTexture();if(!U)return r();e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,U),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);const C={width:1,height:1,texture:U,location:e.getUniformLocation(f,`u_texture_${t}`)},p=new window.Image;p.addEventListener("load",()=>{C.width=p.width,C.height=p.height,e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,C.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,p),i(C)}),p.src=c[t]??""});R.push(u)}catch{return}w=window.requestAnimationFrame(y)})();const H=new window.ResizeObserver(()=>{E=j(n,g),e.uniform2f(q,n.width/E,n.height/E)});return H.observe(n),()=>{window.cancelAnimationFrame(w),H.disconnect(),e.deleteShader(S),e.deleteShader(F),e.deleteProgram(f),e.deleteBuffer(N);for(const{texture:t}of R)e.deleteTexture(t);P.current={}}},[A,c.join("")]),h.jsx("canvas",{ref:_,className:"absolute inset-0 h-full w-full","aria-hidden":!0})}),W=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACO4fbyAAAAFXRSTlMAECAwQFBgb3B/gI+Qn6CvsL/P3+8tfMkfAAACAElEQVR42u2Sy7LcIAxEGyETjMGOLPT/v5oIxuNFfG9VNlmk5iygS0JqXvjw4f8m5LbxpcsdS5dqrgap0FjkDAnemgsqE9dhnbVTRXwFaT/EVgySXbEm1l7qMA2vrLHHTB2Xq8mhSuAZ6sagrvUYtbF7lxVf0JSA4h2XJmZw5IrNbLQ8t3MMY7aASbIFCCpgo7Ggeu1YwoAe8C4RjwTbfOoN4FLE4FgemQJIAgBtPorwMF4MzjseI6KEcYYAaB39MnhaasUjy+iFvcMphlk27AsmZG7/o9M0TsplW9zRmLfNc/f5UZWAHxaRjDwqJx7JFi7He2IafXjo1np1954xjUv3X9EAttZF7AwYiPgY9i6n75yswEfFI+XJ2IluN4zFWphtpzFXApJlJFPyhQX3vWDpUg89yG8xR1ZVPJKMnoy9HhfUC3JPzNkyEybyEzw/XdX77q5zqgChmvVcTzwSbblf4jZerQ7LNfi0K3Z7kUIasUMQ5hmLwjnOP5+OAGl4RuV9TbfxZhm49n9/EDZ6x7RdTUXgnIL7ZzRDEL4+7yOLNX8J78jcjDkinLan3zCw2xpps3QbeyxHlk4Az2yE05uPQZUDrVYAVabcK74iq5nMhgMB2aWA2v2hcBvPtzMZbknNlDGwBod2e1WQmPWCbyD62yzRN9lA9FYBHz78G34BbJAea2DLcxgAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAQAAABuvaSwAAABC0lEQVQoz82RPUvCYRTFf1mKUURLrhFhXyCbaqvNhhYNzM/jN2i0qbelaKnJxhyaI8ItCBt6QzKMv+RpudK9ILT6LA/Pj8M557kXxuJMhFeNNSBhh75T7JMH3tn10mUGCHEfDDYQQjQg5XDVcg6DuGL3caz0gBADlhxL84IQ38x7acHiboLBttEz8DWGcUcjSwSa4gkh+uQcneETITpMe/GWxV0G36rRevzcgeG9QK+MbnqY5QMhvph1dIEEIdpMDrsCFG0wF3SduEwagBN+vPO5xRVDiabRVQ/n6CHEGxlHF235LT8yKJEF4JTk3+VzbXHrgd4ZXflDU8ArDaBF00kzPPIM3PoaY3J+AdhYZfg614niAAAAAElFTkSuQmCC"];function Z(){const o=Q.c(3),s=l.useRef(null),a=l.useRef(null);let A,c;o[0]===Symbol.for("react.memo_cache_sentinel")?(A=()=>{let x,d;const _=function(){a.current?.play&&a.current.play()};return"requestIdleCallback"in window&&(d=window.requestIdleCallback(_)),d===void 0&&(x=window.setTimeout(_,1)),()=>{x!==void 0&&window.clearTimeout(x),d!==void 0&&window.cancelIdleCallback&&window.cancelIdleCallback(d)}},c=[],o[0]=A,o[1]=c):(A=o[0],c=o[1]),l.useEffect(A,c);let m;return o[2]===Symbol.for("react.memo_cache_sentinel")?(m=h.jsx("div",{ref:s,className:"relative w-full h-full select-none [mask:radial-gradient(50%_50%_at_50%_50%,#000_23.06%,transparent)]","aria-hidden":!0,children:h.jsx(J,{ref:a,initialState:"paused",maxFps:60,textures:W,source:`#version 300 es
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
`})}),o[2]=m):m=o[2],m}const $=function(){const s=Q.c(1);let a;return s[0]===Symbol.for("react.memo_cache_sentinel")?(a=h.jsx(h.Fragment,{children:h.jsx(Z,{})}),s[0]=a):a=s[0],a};export{$ as component};
