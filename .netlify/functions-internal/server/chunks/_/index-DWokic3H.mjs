import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { a9 as LogoTailwindCSS, S as Section, aa as LogoPostCSS } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageCSSLibraries() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoTailwindCSS, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Tailwind CSS",
      href: "https://tailwindcss.com/"
    }];
    t2 = [{
      label: "Tailwind CSS",
      href: "https://tailwindcss.com/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "tailwind-css", className: "bg-[oklch(0.7484_0.1551_233.2517)]", logo: t0, title: "Tailwind CSS", links: t1, docsLinks: t2, subTitle: "Utility-first, responsive, and customizable", description: "A modern utility-first CSS framework that revolutionizes web development by providing atomic classes for rapid UI construction. Tailwind CSS v4.0 introduced a CSS-first approach, allowing seamless integration of custom CSS alongside utility classes. Features include responsive design, dark mode support, CSS variables, wide-gamut P3 colors, container queries, and logical properties for RTL support. The framework optimizes for production by automatically removing unused CSS, typically resulting in bundles under 10kB. While not covering every CSS feature, Tailwind's design system can be easily extended with custom CSS when needed.", features: ["Utility-first atomic classes", "CSS-first: seamless custom CSS integration (v4)", "Responsive design utilities", "Dark mode support", "Wide-gamut P3 color palette", "CSS variables and theming", "Container queries", "Logical properties for RTL/LTR", "Automatic unused CSS purging"], issues: ["Results in polluted HTML", "Results in non-contextual HTML identifiers"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoPostCSS, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "PostCSS",
      href: "https://postcss.org/"
    }];
    t6 = [{
      label: "PostCSS",
      href: "https://postcss.org/docs/"
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
      /* @__PURE__ */ jsx(Section, { id: "postcss", className: "bg-[oklch(0.5924_0.2056_34.55)]", logo: t4, title: "PostCSS", links: t5, docsLinks: t6, subTitle: "Transform CSS with JavaScript plugins", description: "PostCSS is a powerful tool for transforming CSS with JavaScript, enabling a vast ecosystem of plugins to automate, enhance, and future-proof your stylesheets. Widely adopted by industry leaders, it supports features like autoprefixing, modern CSS polyfills, linting, and modular CSS. PostCSS is highly extensible, letting you customize your CSS workflow to fit any project, from simple enhancements to complex build pipelines.", features: ["Plugin ecosystem", "Autoprefixing", "Modern CSS polyfills", "CSS linting", "Custom transformations", "Modular CSS support", "CSS minification", "Build tool integration", "Source maps"], issues: [] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-DWokic3H.mjs.map
