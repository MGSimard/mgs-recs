import { jsx, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { L as LogoDaVinciResolve, S as Section } from './Icons-CuUqCmYQ.mjs';
import '@radix-ui/react-hover-card';
import './ssr.mjs';
import '@tanstack/react-router';
import 'next-themes';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-collapsible';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function PageVideoEditing() {
  const $ = c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoDaVinciResolve, { className: "drop-shadow-md" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "DaVinci Resolve",
      href: "https://www.blackmagicdesign.com/products/davinciresolve/"
    }];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Section, { id: "davinci-resolve", className: "bg-[conic-gradient(oklch(0.65_0.2_235.5161)0%,oklch(0.65_0.3_22.81)33%,oklch(0.97_0.2_110.13)66%,oklch(0.65_0.2_235.5161)100%)]", logo: t0, title: "DaVinci Resolve", links: t1, subTitle: "All-in-one editing, color, VFX, and audio.", description: "DaVinci Resolve is a professional video editing suite that combines editing, color correction, visual effects, motion graphics, and audio post production in one app. It features advanced tools for editing, color grading, VFX, and audio, plus powerful AI features and real-time collaboration. Available in a free version and a paid Studio version with extra features. Widely used in Hollywood and by independent creators.", features: ["All-in-one editing, color, VFX, audio, and delivery", "Hollywood-grade color correction & grading", "AI tools: IntelliScript, Magic Mask, audio assistant, more", "Fusion: node-based VFX & motion graphics", "Fairlight: pro audio post & mixing", "Multi-user real-time collaboration", "Wide format support, up to 8K+", "Free & Studio (paid) versions", "Cross-platform: Windows, Mac, Linux"], issues: [] }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
};

export { SplitComponent as component };
//# sourceMappingURL=index-D9_J_2hq.mjs.map
