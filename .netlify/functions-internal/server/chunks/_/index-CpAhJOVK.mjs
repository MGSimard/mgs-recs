import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { g as LogoShadcn, S as Section, h as LogoMantine, i as LogoAntDesign } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageUILibraries() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoShadcn, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "shadcn/ui",
      href: "https://ui.shadcn.com/"
    }];
    t2 = [{
      label: "shadcn/ui",
      href: "https://ui.shadcn.com/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "shadcn-ui", className: "bg-black", logo: t0, title: "shadcn/ui", links: t1, docsLinks: t2, subTitle: "Radix-based, built with Tailwind CSS.", description: "shadcn/ui is for developers who want full control over UI design and accessibility. Built on Radix UI primitives, it provides unstyled, accessible React components meant to be customized with Tailwind CSS. Customization is encouraged, and you may need to adjust semantic tags for best accessibility. The library is fully compatible with Tailwind CSS v4 and React Server Components, making it ideal for modern, flexible React projects.", features: ["Open Code", "Composable Components", "Code Distribution System", "Beautiful Defaults", "Framework Agnostic", "Easy Theming", "React 19 compatible", "SSR/RSC support"], issues: ["Components may sometimes be over-nested", "Requires semantic adjustments", "Reliant on Tailwind CSS", "Depends on Radix UI which is no longer maintained"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoMantine, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Mantine",
      href: "https://mantine.dev/"
    }];
    t6 = [{
      label: "Mantine",
      href: "https://mantine.dev/getting-started/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "mantine", className: "bg-[oklch(0.67_0.1575_248.32)]", logo: t4, title: "Mantine", links: t5, docsLinks: t6, subTitle: "UI components, hooks, and regular CSS.", description: "Mantine is for developers who want flexibility, performance, and a modern React experience. It offers customizable components, powerful hooks, and uses regular CSS/PostCSS for styling. As a middle-ground between Ant Design's opinionated system and shadcn/ui's headless approach, Mantine balances ready-to-use, themeable components with deep customization. Its rich hooks and utilities make it a versatile choice for teams seeking both productivity and control.", features: ["Rich component library", "Customizable themes", "Powerful hooks", "Regular CSS/PostCSS support", "SSR/RSC support", "Accessibility focused", "Responsive design utilities", "Dark mode built-in"], issues: ["Implementation & customization is less intuitive"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoAntDesign, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Ant Design",
      href: "https://ant.design/"
    }];
    t10 = [{
      label: "Ant Design",
      href: "https://ant.design/docs/react/introduce/"
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
      /* @__PURE__ */ jsx(Section, { id: "ant-design", className: "bg-[conic-gradient(from_45deg_at_center,oklch(0.74_0.1514_30.35)_0deg,oklch(0.66_0.2083_19.36)_45deg,oklch(0.62_0.2403_25.85)_90deg,transparent_90deg),linear-gradient(oklch(0.78_0.143253_228.8872),oklch(0.62_0.1683_258.71))]", logo: t8, title: "Ant Design", links: t9, docsLinks: t10, subTitle: "Enterprise React UI framework.", description: "Ant Design is designed for enterprise-level applications, targeting teams and organizations that require a robust, scalable, and consistent design system. It stands out with its comprehensive suite of high-quality, polished React components, a strong design language inspired by Ant Financial, and extensive internationalization support. Ant Design 5.0 introduced a new CSS-in-JS theming system, making theme customization more dynamic and flexible than before, addressing long-standing complaints about limited theming. However, theming and deep customization are still less open than in some other libraries, as Ant Design prioritizes a unified, opinionated design system across applications.", features: ["Comprehensive component library", "Enterprise-focused design system", "Flexible theme customization", "Accessibility & internationalization", "Rich ecosystem and extensions", "Cross-framework", "First-class Figma support"], issues: ["Undocumented breaking changes", "Less understood by AI", "Design can be lacking", "Poor documentation", "Extreme over-nesting in some cases"] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-CpAhJOVK.mjs.map
