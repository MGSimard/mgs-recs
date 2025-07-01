import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { j as LogoReact, S as Section, k as LogoZustand, l as LogoTanStackStart } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageStateManagement() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoReact, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    t2 = [{
      label: "React State Management",
      href: "https://react.dev/learn/managing-state"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "react-defaults", className: "bg-[oklch(0.7665_0.1039_214.63)]", logo: t0, title: "React Defaults", links: t1, docsLinks: t2, subTitle: "Simple state management", description: "React's built-in state management uses hooks like useState, useReducer, and useContext to manage local and shared state. State is typically local to a component, but can be lifted up or shared via context. For centralized state management, or more complex global state management, it's generally advised to use a state management library like Zustand.", features: ["Component-local state with useState", "Share state by lifting it up to common parents", "Manage larger state objects with useReducer", "Share data deeply with useContext and createContext", "No external dependencies required"], issues: ["States can get overly fragmented and messy in more complex apps"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoZustand, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Zustand Demo",
      href: "https://zustand-demo.pmnd.rs/"
    }];
    t6 = [{
      label: "Zustand",
      href: "https://zustand.docs.pmnd.rs/getting-started/introduction/"
    }, {
      label: "Zustand GitHub",
      href: "https://github.com/pmndrs/zustand"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "zustand", className: "bg-[oklch(0.3679_0.0131_67.4)]", logo: t4, title: "Zustand", links: t5, docsLinks: t6, subTitle: "Small, fast, and scalable state management", description: "Zustand is a minimalistic, fast, and scalable state management library for React. It provides a comfy, hook-based API with no need for providers or boilerplate. Zustand is designed to be explicit and flux-like, but avoids common pitfalls like context loss, zombie children, and React concurrency issues. Stores are easy to create and can hold any kind of state, from primitives to objects and functions. Middleware support enables features like persistence, devtools, and immutable updates.", features: ["Hook-based API for store creation and usage", "No provider needed\u2014use stores anywhere", "Minimal boilerplate for state and actions", "Selective subscriptions for efficient re-renders", "Middleware support: persist, immer, devtools, redux, and more", "TypeScript support with full type inference", "Works with client and server components", "Scales from small to large apps"], issues: ["Requires tweaking & context use for SSR/RSCs"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoTanStackStart, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "TanStack Query",
      href: "https://tanstack.com/query/latest/"
    }];
    t10 = [{
      label: "TanStack Query",
      href: "https://tanstack.com/query/latest/docs/framework/react/overview/"
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
      /* @__PURE__ */ jsx(Section, { id: "tanstack-query", className: "bg-[linear-gradient(90deg,oklch(0.6386_0.2063_26.04),oklch(0.7686_0.1647_70.08))]", logo: t8, title: "TanStack Query", links: t9, docsLinks: t10, subTitle: "State management & data fetching.", description: "TanStack Query (formerly React Query) is the missing data fetching and server state management library for modern web apps. It makes fetching, caching, synchronizing, and updating remote data in your applications simple and automatic. With built-in caching, background updates, and out-of-the-box support for mutations, TanStack Query helps you write less code, avoid async-spaghetti, and deliver a faster, more responsive user experience. Without its client-side data fetching pattern, you'll often just end up implementing a weaker version of TanStack Query. More often than not, the answer is 'Just fucking use TanStack Query'.", features: ["Declarative, automatic data fetching and caching", "Background updates and stale data management", "Built-in support for mutations and optimistic updates", "Devtools for debugging and visualization", "Pagination, infinite scroll, and dependent queries", "Auto refetching on window focus or network reconnect", "Request deduplication and cancellation", "Offline and SSR support", "TypeScript-first, framework-agnostic design", "Extensible and configurable for any use case"], issues: ["Not an issue, just a common mistake: Remember to throw your own HTTP errors (!res.ok) when using fetch within queries so the error handling can catch them"] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-TXF9sjz2.mjs.map
