import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { t as LogoLucide, S as Section, u as LogoHeroicons, v as LogoSvgl } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageIconLibraries() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoLucide, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Lucide",
      href: "https://lucide.dev/"
    }];
    t2 = [{
      label: "Lucide",
      href: "https://lucide.dev/guide/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "lucide", className: "bg-[oklch(0.69_0.1776_22.95)]", logo: t0, title: "Lucide", links: t1, docsLinks: t2, subTitle: "Standardized, optimized, community-designed icons.", description: "An open source icon library offering 1000+ SVG icons with multiple variants and states. Lucide is community-driven, follows strict design standards, and supports both manual copying of single icons and usage via official packages for every major frontend framework. Features include code optimization for minimal bundle size, accessibility support, and a responsive community for icon requests.", features: ["1000+ SVG icons", "Optimized for minimal bundle size", "Official packages for major frameworks", "Accessibility support", "SVG, PNG, Data URL & JSX"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoHeroicons, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Heroicons",
      href: "https://heroicons.com/"
    }];
    t6 = [{
      label: "Heroicons",
      href: "https://github.com/tailwindlabs/heroicons/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "heroicons", className: "bg-[oklch(0.61_0.2189_292.72)]", logo: t4, title: "Heroicons", links: t5, docsLinks: t6, subTitle: "By the makers of Tailwind CSS.", description: "A free, MIT-licensed set of 300+ hand-crafted SVG icons for UI development, made by the makers of Tailwind CSS. Available as basic SVGs and first-party React & Vue libraries, designed for easy styling and seamless integration.", features: ["300+ hand-crafted icons", "Outline, solid, mini & micro versions", "SVG & JSX copy", "React & Vue libraries"], issues: [] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoSvgl, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "svgl",
      href: "https://svgl.app/"
    }];
    t10 = [{
      label: "svgl",
      href: "https://svgl.app/api/"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      /* @__PURE__ */ jsx(Section, { id: "svgl", className: "bg-[radial-gradient(circle_at_top,oklch(0.38_0_0),oklch(0.25_0_0))]", logo: t8, title: "svgl", links: t9, docsLinks: t10, subTitle: "Open source, community-driven company logo directory.", description: "An open source directory of company logos. Contains a sizeable amount of logos, and is updated regularly. Users can also submit logos to the directory for approval.", features: ["500+ logos", "Copy for SVG & all major frameworks", "Extensions", "API access"], issues: [] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-C8oRjrsI.mjs.map
