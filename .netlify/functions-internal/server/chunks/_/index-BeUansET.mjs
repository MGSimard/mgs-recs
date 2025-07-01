import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { c as LogoAdobeIllustrator, S as Section, d as LogoInkscape } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageVectorGraphics() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoAdobeIllustrator, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Adobe Illustrator",
      href: "https://www.adobe.com/products/illustrator.html"
    }];
    t2 = [{
      label: "Adobe Illustrator",
      href: "https://helpx.adobe.com/illustrator/user-guide.html"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "adobe-illustrator", className: "bg-[oklch(0.2_0.0827_29.23)]", logo: t0, title: "Adobe Illustrator", links: t1, docsLinks: t2, subTitle: "Industry standard.", description: "Adobe Illustrator is the industry standard for vector graphics and illustration. It offers advanced tools for creating logos, icons, typography, and complex illustrations, and integrates with other Adobe Creative Cloud apps.", features: ["Industry-standard vector graphics editor", "Advanced illustration, logo, and icon tools", "Precision typography and text effects", "AI-powered vectorization and features", "Artboards, layers, and asset export", "Seamless Creative Cloud integration", "Cross-platform: Windows, Mac, web (beta)"], issues: ["Adobe has shady cancellation fee policies"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoInkscape, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Inkscape",
      href: "https://inkscape.org/"
    }];
    t6 = [{
      label: "Inkscape",
      href: "https://inkscape-manuals.readthedocs.io/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      /* @__PURE__ */ jsx(Section, { id: "inkscape", className: "bg-[conic-gradient(from_90deg_at_50%_-2rem,oklch(0.5_0.0079_286.11)_0deg,oklch(0.08_0.0325_276.31)_90deg,oklch(0.52_0.0389_272.26)_180deg)]", logo: t4, title: "Inkscape", links: t5, docsLinks: t6, subTitle: "Free alternative to Illustrator.", description: "Inkscape is a free, open source vector graphics editor for creating and editing SVG files, illustrations, and designs. It supports a wide range of features, extensions, and plugins, making it a strong alternative to Illustrator for those who want professional vector tools without a subscription.", features: ["Free, open source vector editor", "SVG, PDF, EPS, and AI file support", "Drawing, shape, and text tools", "Node editing and path operations", "Extensions and plugin support", "Customizable UI and keyboard shortcuts", "Cross-platform: Windows, Mac, Linux"], issues: ["Lacks fundamental features like straightforward canvas mirroring"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-BeUansET.mjs.map
