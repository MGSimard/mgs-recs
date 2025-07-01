import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { B as LogoGIMP, S as Section, C as LogoAdobePhotoshop } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageGraphicDesign() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoGIMP, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "GIMP",
      href: "https://www.gimp.org/"
    }];
    t2 = [{
      label: "GIMP",
      href: "https://www.gimp.org/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "gimp", className: "bg-[oklch(0.61_0.0241_69.58)]", logo: t0, title: "GIMP", links: t1, docsLinks: t2, subTitle: "Evergreen free & open source Photoshop alternative.", description: "GIMP is a powerful, free alternative to Photoshop for photo editing, graphic design, and digital art. Its plugin support is extensive, with tools like Resynthesizer, G'MIC-Qt, Darktable, and many more for advanced editing, creative effects, and workflow enhancements. GIMP is open source and ideal for anyone who wants professional tools without dealing with Adobe's subscription fees and shady cancellation penalties.", features: ["Free & open source", "Advanced photo editing & retouching", "Custom brushes, filters, and effects", "Extensive plugin support (e.g. Resynthesizer, G'MIC)", "Supports PSD, RAW, and many other formats", "Cross-platform: Windows, Mac, Linux"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoAdobePhotoshop, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Adobe Photoshop",
      href: "https://www.adobe.com/products/photoshop.html"
    }];
    t6 = [{
      label: "Adobe Photoshop",
      href: "https://helpx.adobe.com/photoshop/user-guide.html"
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
      /* @__PURE__ */ jsx(Section, { id: "adobe-photoshop", className: "bg-[oklch(0.23_0.0588_246.17)]", logo: t4, title: "Adobe Photoshop", links: t5, docsLinks: t6, subTitle: "Industry standard.", description: "Adobe Photoshop is the industry standard for photo editing, graphic design, and digital art. It offers advanced tools for retouching, compositing, and illustration, and integrates with other Adobe Creative Cloud apps. Photoshop requires a paid subscription, an Adobe account, and is subject to cancellation fees and other restrictions. Recommended if you can get it for free as a student or through other means.", features: ["Industry-standard photo editing & retouching", "AI tools: Generative Fill, Remove, Expand, and more", "Advanced compositing & layer management", "RAW, PSD, and wide format support", "Vector, raster, and 3D tools", "Smart objects, filters, and adjustment layers", "Content-aware fill, healing, and selection", "Cloud sync & Creative Cloud integration", "Cross-platform: Windows, Mac, web (beta)"], issues: ["Adobe has shady cancellation fee policies"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-BOWqX5Tj.mjs.map
