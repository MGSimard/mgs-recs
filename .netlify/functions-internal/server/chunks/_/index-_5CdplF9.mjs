import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { N as LogoNodejs, S as Section, O as LogoPnpm, P as LogoPrettier, Q as LogoESLint } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageEnvironment() {
  const $ = c(16);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoNodejs, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Node.js",
      href: "https://nodejs.org/"
    }];
    t2 = [{
      label: "Node.js",
      href: "https://nodejs.org/docs/latest/api/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "nodejs", className: "bg-[radial-gradient(circle_at_center,oklch(0.3105_0.0524_151.99),oklch(0.1822_0.0221_263.79))]", logo: t0, title: "Node.js", links: t1, docsLinks: t2, subTitle: "JavaScript runtime environment", description: "Node.js is a free, open source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It enables developers to run JavaScript on the server, powering web apps, APIs, command-line tools, and more. Node.js is known for its asynchronous, event-driven architecture, making it ideal for real-time and data-intensive applications.", features: ["Asynchronous and event-driven architecture for high concurrency", "Single-threaded but highly scalable via event loop", "Built on the fast V8 JavaScript engine", "Rich ecosystem with npm (over 1 million packages)", "Cross-platform support (Windows, macOS, Linux)", "Ideal for real-time applications (e.g., chat, gaming, collaboration)", "Strong community and corporate backing", "Native support for JSON and modern ECMAScript features", "Excellent for building RESTful APIs and microservices", "Supports WebSockets and real-time communication"], issues: ["Does not natively support TypeScript, needs build step or ts-node"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoPnpm, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "pnpm",
      href: "https://pnpm.io/"
    }];
    t6 = [{
      label: "pnpm",
      href: "https://pnpm.io/motivation/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "pnpm", className: "bg-[linear-gradient(oklch(0.8002_0.167375_77.0488)50%,oklch(0.4239_0_0)50%)]", logo: t4, title: "pnpm", links: t5, docsLinks: t6, subTitle: "Fast, disk space efficient package manager", description: "pnpm is a performant npm alternative that saves disk space and boosts install speed by using a content-addressable store and hard links. It supports monorepos, strict dependency isolation, and efficient workflows for modern JavaScript projects.", features: ["Up to 2x faster than npm for installs", "Saves disk space by sharing dependencies across projects", "Uses hard links and a global content-addressable store", "Built-in support for monorepos", "Strict dependency isolation with non-flat node_modules", "Works on Windows, macOS, and Linux", "Supports advanced features like patching, hooks, and side-effects cache"], issues: [] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoPrettier, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Prettier",
      href: "https://prettier.io/"
    }];
    t10 = [{
      label: "Prettier Docs",
      href: "https://prettier.io/docs/"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(Section, { id: "prettier", className: "bg-[linear-gradient(oklch(0.711_0.0882_196.3)25%,oklch(0.8226_0.1501_80.4)25%,oklch(0.8226_0.1501_80.4)50%,oklch(0.6616_0.1741_23.11)50%,oklch(0.6616_0.1741_23.11)75%,oklch(0.6938_0.1053_326.64)75%)]", logo: t8, title: "Prettier", links: t9, docsLinks: t10, subTitle: "Opinionated code formatter for consistent style", description: "Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules. It supports many languages, integrates with most editors, and eliminates debates over code style.", features: ["Supports JavaScript, TypeScript, CSS, HTML, Markdown, and more", "Integrates with all major editors and CI workflows", "Formats code on save for instant feedback", "Removes original styling and enforces consistency", "Reduces time spent on code reviews and style debates", "Minimal configuration and few options", "Widely adopted in the JavaScript ecosystem"], issues: ["Can't prevent line breaks on larger imports without additional ignore lines (i.e. icon libraries)"] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(LogoESLint, {});
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  let t13;
  let t14;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = [{
      label: "ESLint",
      href: "https://eslint.org/"
    }];
    t14 = [{
      label: "ESLint",
      href: "https://eslint.org/docs/latest/"
    }];
    $[13] = t13;
    $[14] = t14;
  } else {
    t13 = $[13];
    t14 = $[14];
  }
  let t15;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      t11,
      /* @__PURE__ */ jsx(Section, { id: "eslint", className: "bg-[radial-gradient(circle_at_center,oklch(0.638_0.1614_280.81)1rem,oklch(0.4379_0.2059_281.84)1rem)]", logo: t12, title: "ESLint", links: t13, docsLinks: t14, subTitle: "Pluggable JavaScript linter", description: "ESLint is an open source, configurable static analysis tool for JavaScript and JSX. It helps developers find and fix problems in their code, from potential bugs to style issues, by running a set of rules on the codebase. ESLint integrates with most editors and CI pipelines, supports custom rules and plugins, and can automatically fix many issues.", features: ["Statically analyzes code to quickly find problems", "Highly configurable with support for custom rules and plugins", "Automatically fixes many issues with --fix flag or editor integration", "Supports JavaScript, JSX, and extensions via plugins (e.g., TypeScript, React)", "Integrates with all major editors and CI workflows", "Shareable configurations for enforcing style guides (e.g., Airbnb)", "Extensive ecosystem and strong community adoption", "Helps maintain code quality and consistency across teams"], issues: [] })
    ] });
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  return t15;
};

export { SplitComponent as component };
//# sourceMappingURL=index-_5CdplF9.mjs.map
