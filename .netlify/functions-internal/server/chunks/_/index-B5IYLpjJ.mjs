import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { H as LogoViteTanStack, S as Section, l as LogoTanStackStart, I as LogoNextjs, J as LogoPayload, K as LogoFumaDocs } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageFrameworks() {
  const $ = c(20);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoViteTanStack, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Vite",
      href: "https://vite.dev/"
    }, {
      label: "TanStack Router",
      href: "https://tanstack.com/router/latest"
    }];
    t2 = [{
      label: "Vite",
      href: "https://vite.dev/guide/"
    }, {
      label: "Tanstack Router",
      href: "https://tanstack.com/router/latest/docs/framework/react/overview"
    }, {
      label: "create-tsrouter-app",
      href: "https://github.com/TanStack/create-tsrouter-app/tree/main/cli/create-tsrouter-app"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "vite-tanstack-router", className: "bg-[linear-gradient(135deg,oklch(0.78_0.1341_230.13),oklch(0.63_0.2788_311.44))]", logo: t0, title: "Vite + Tanstack Router", links: t1, docsLinks: t2, subTitle: "Most recommended for both new & seasoned React devs.", description: "This combination utilizes Vite for its modern build tooling and TanStack Router's type-safe routing capabilities, it provides an unmatched React development experience. This Vite and TanStack Router setup can be scaffolded through create-tsrouter-app, offering a modern alternative to the older create-react-app (CRA) by focusing on an improved developer experience and performant application builds. This setup can easily be upgraded to a full-stack framework with TanStack Start (even if all you want is server-side rendering which improves SEO, amongst other things).", features: ["100% type-safe file-based routing", "Lightning-fast HMR", "Parallel route loaders", "First-class search param APIs & schemas", "Optimized production builds", "Modern CSS & asset support", "Automatic prefetching & suspense support"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoTanStackStart, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "TanStack Start",
      href: "https://tanstack.com/start/latest"
    }, {
      label: "Vite",
      href: "https://vite.dev/"
    }];
    t6 = [{
      label: "TanStack Start",
      href: "https://tanstack.com/start/latest/docs/overview"
    }, {
      label: "Vite",
      href: "https://vite.dev/guide/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "tanstack-start", className: "bg-[linear-gradient(to_right,oklch(0.7_0.123_182.5),oklch(0.71_0.1257_215.22))]", logo: t4, title: "TanStack Start", links: t5, docsLinks: t6, subTitle: "Full-stack development, no strings attached.", description: "TanStack Start is a full-stack framework integrating Vite and various TanStack libraries. It provides comprehensive tools for client and server development. While Next.js has a tendency to take fundamental features away from the developer, pretending like their abstractions are always preferable, TanStack Start on the other hand allows you to retain fine control of everything. Two examples are image preloading for CSS backgrounds and local font implementation, which are miserable at best in Next.js compared to the traditional methods. You'll also find that TanStack Start projects integrate seamlessly with all other TanStack libraries.", features: ["Enterprise-grade, type-safe routing", "Full-stack SSR & streaming", "Server functions & RPCs", "Client-side first, 100% server capable", "Deploy anywhere", "Bundling & optimized builds", "Integrated with TanStack ecosystem", "Streaming data & real-time ready", "Modern DX: File-based routing, hot reload & more"], issues: ["Beta, expect potential issues and changes"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoNextjs, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Next.js",
      href: "https://nextjs.org/"
    }];
    t10 = [{
      label: "Next.js",
      href: "https://nextjs.org/docs"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(Section, { id: "nextjs", className: "bg-black", logo: t8, title: "Next.js", links: t9, docsLinks: t10, subTitle: "The most popular full-stack framework.", description: "Next.js is a full-stack React framework maintained by Vercel. It supports server-side rendering with Server Components, static site generation, client-side rendering, and advanced features like Incremental Static Regeneration. Next.js simplifies routing structures through a file-system based router. A key feature is Server Actions, which enable server-side code execution directly within React components, streamlining data mutations and API interactions. While there is a common misconception that using Next.js requires vendor lock-in to Vercel hosting, Next.js can in fact be self-hosted or deployed to a variety of platforms, giving developers flexibility in their deployment choices. Vercel as a platform does provide additional QoL features, but those are not inherently tied to Next.js.", features: ["File-based routing & nested layouts", "React Server Components", "Server Actions", "Dynamic HTML streaming", "Flexible data fetching", "Incremental Static Regeneration (ISR)", "Built-in optimizations (images, fonts, scripts)", "API routes & middleware", "Production-grade tooling (Turbopack, SWC)"], issues: ["Ecosystem changes regularly", "Can't reliably preload images used as CSS backgrounds", "Local font setup is untraditional"] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(LogoPayload, {});
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  let t13;
  let t14;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = [{
      label: "Payload",
      href: "https://payloadcms.com/"
    }];
    t14 = [{
      label: "Payload",
      href: "https://payloadcms.com/docs"
    }];
    $[13] = t13;
    $[14] = t14;
  } else {
    t13 = $[13];
    t14 = $[14];
  }
  let t15;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(Section, { id: "payload", className: "bg-[linear-gradient(45deg,oklch(0.23_0.0561_246.8),oklch(0_0_0))]", logo: t12, title: "Payload", links: t13, docsLinks: t14, subTitle: "Headless CMS & app framework built on Next.js.", description: "Payload is a flexible headless CMS and application framework designed for developers, built entirely on Next.js. It offers a highly customizable admin interface, robust tools for backend services, granular access control, and extensible APIs. While the full app framework and admin panel are exclusive to Next.js, you can fetch and manage content from any frontend via Payload's APIs, or use its Local API in scripts and backend services. If you're used to platforms like WordPress, you'll find Payload a much more powerful, performant, and hands-on alternative.", features: ["Code-first, TypeScript-native config", "Powerful admin panel out of the box", "Built-in authentication & access control", "Local API for direct server access", "Multi-tenancy & localization", "Custom components & extensibility", "Versioning, drafts & file uploads", "Next.js native & serverless ready", "Open source & no vendor lock-in"], issues: [] });
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  let t16;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsx(LogoFumaDocs, {});
    $[16] = t16;
  } else {
    t16 = $[16];
  }
  let t17;
  let t18;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = [{
      label: "Fumadocs",
      href: "https://fumadocs.dev/"
    }];
    t18 = [{
      label: "Fumadocs",
      href: "https://fumadocs.dev/docs/"
    }];
    $[17] = t17;
    $[18] = t18;
  } else {
    t17 = $[17];
    t18 = $[18];
  }
  let t19;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      t11,
      t15,
      /* @__PURE__ */ jsx(Section, { id: "fumadocs", className: "bg-[radial-gradient(circle,oklch(0.28_0.0807_260.94),oklch(0_0_0))]", logo: t16, title: "Fumadocs", links: t17, docsLinks: t18, subTitle: "Next.js-based documentation generator.", description: "Fumadocs is a documentation generator using MDX, built on Next.js. It is designed to simplify the creation of documentation websites, focusing on readability and navigation, allowing developers to concentrate on writing content rather than code.", features: ["Next.js-first, React Server Component support", "Source agnostic content (MDX, collections, CMS)", "Beautiful, customizable UI", "Full-text search integration (Orama, Algolia)", "Automation & type-safe data validation", "Syntax highlighting & interactive examples", "Accessibility & UX first", "CLI for instant project setup", "Open source & actively maintained"], issues: [] })
    ] });
    $[19] = t19;
  } else {
    t19 = $[19];
  }
  return t19;
};

export { SplitComponent as component };
//# sourceMappingURL=index-B5IYLpjJ.mjs.map
