import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { e as LogoZod, S as Section, f as LogoT3Env } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageValidation() {
  const $ = c(7);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoZod, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Zod",
      href: "https://zod.dev/"
    }];
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(Section, { id: "zod", className: "bg-[linear-gradient(to_top,oklch(0.5823_0.2275_265.82),oklch(0.7128_0.1572_248.39))]", logo: t0, title: "Zod", links: t1, subTitle: "TypeScript-first schema validation with static type inference.", description: "Zod is a TypeScript-first schema validation library that enables you to define and validate data structures with static type inference. With zero external dependencies and a tiny core bundle, Zod works seamlessly in both Node.js and all modern browsers, making it an excellent choice for validating data on the backend or enforcing input constraints in frontend applications. Its concise, immutable API lets you build schemas for everything from simple strings to complex nested objects, ensuring your data is both validated and type-safe. Zod also supports built-in JSON Schema conversion and has a growing ecosystem, making it a popular choice for robust, type-safe validation in TypeScript and JavaScript projects.", features: ["TypeScript-first schema validation", "Static type inference from schemas", "Zero external dependencies, tiny bundle size", "Immutable, concise API for defining schemas", "Works in Node.js and all modern browsers", "Built-in JSON Schema conversion", "Extensive ecosystem and integrations"], issues: [] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(LogoT3Env, {});
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  let t5;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{
      label: "T3 Env",
      href: "https://env.t3.gg/"
    }];
    t5 = [{
      label: "T3 Env",
      href: "https://env.t3.gg/docs/introduction/"
    }];
    $[4] = t4;
    $[5] = t5;
  } else {
    t4 = $[4];
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t2,
      /* @__PURE__ */ jsx(Section, { id: "t3-env", className: "bg-[linear-gradient(oklch(0.2795_0.1569_289.93),oklch(0.2072_0.0454_277.9))]", logo: t3, title: "T3 Env", links: t4, docsLinks: t5, subTitle: "Type-safe environment variables.", description: "T3 Env is a framework-agnostic library for validating and transforming environment variables using Zod. It lets you define a schema for your environment variables, supports transforms and default values, and works safely across both server and client environments. T3 Env helps prevent configuration errors and makes it easier to manage environment variables in TypeScript projects.", features: ["Type-safe environment variable validation", "Supports transforms and default values", "Seamless server and client schema separation", "Framework-agnostic with presets for Next.js, Nuxt, and more", "Runtime and build-time validation", "Auto-completion and static type inference", "Extensible with custom presets and advanced options"], issues: [] })
    ] });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
};

export { SplitComponent as component };
//# sourceMappingURL=index-RGTc0JYn.mjs.map
