import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { R as LogoReactScan, S as Section, T as LogoLighthouse, U as LogoSentry, V as LogoCheckSiteMeta } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageDiagnostics() {
  const $ = c(15);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoReactScan, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "React Scan",
      href: "https://react-scan.com/"
    }];
    t2 = [{
      label: "React Scan",
      href: "https://github.com/aidenybai/react-scan#readme/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "react-scan", className: "bg-[oklch(0.6_0.1849_285.85)]", logo: t0, title: "React Scan", links: t1, docsLinks: t2, subTitle: "Free React performance diagnostics.", description: "React Scan is an open source tool that automatically detects and highlights performance issues in your React app, such as unnecessary renders, without requiring any code changes. It visually identifies which components need optimization and can be integrated via script tag, npm, CLI, or browser extension. React Scan works with frameworks like Next.js, Vite, Remix, and more, and is designed to provide actionable insights for developers directly in their workflow. Unlike traditional tools that require manual setup or lack actionable visual cues, React Scan makes it easy to spot and fix slow components, helping you keep your React apps fast and efficient.", features: ["Detects React performance issues automatically", "No code changes required, drop-in usage", "Highlights components needing optimization", "Works via script tag, npm, CLI, or extension", "Supports Next.js, Vite, Remix, CRA, and more", "Visual cues for unnecessary renders", "Actionable insights directly in your workflow", "Open source and free for all projects"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoLighthouse, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Lighthouse",
      href: "https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk"
    }];
    t6 = [{
      label: "Lighthouse",
      href: "https://developer.chrome.com/docs/lighthouse/overview"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "lighthouse", className: "bg-[radial-gradient(circle_at_center_calc(50%-0.5rem),oklch(0.95_0.1242_103.05)0.5rem,transparent_2rem),linear-gradient(135deg,oklch(0.5_0.1858_265.53),oklch(0.42_0.2196_264.08))] bg-blend-overlay", logo: t4, title: "Lighthouse", links: t5, docsLinks: t6, subTitle: "Website audits built into Chrome.", description: "Lighthouse is an open source tool for auditing web pages, built directly into Chrome DevTools. It analyzes performance, accessibility, SEO, best practices, and progressive web app features, providing detailed reports and suggestions for improvement. You can run Lighthouse on any page from the Chrome browser without installing anything extra, making it a standard choice for web diagnostics and optimization.", features: ["Performance audits for speed and loading times", "Accessibility audits for inclusive design", "Best practices checks for modern web standards", "SEO audits for search engine optimization", "Progressive Web App (PWA) audits", "Detailed reports with actionable suggestions", "Runs in Chrome DevTools, CLI, Node, or web UI", "Open source and extensible with plugins"], issues: [] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoSentry, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Sentry",
      href: "https://sentry.io/"
    }];
    t10 = [{
      label: "Sentry",
      href: "https://docs.sentry.io/"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(Section, { id: "sentry", className: "bg-[linear-gradient(135deg,oklch(0.39_0.1556_293.06),oklch(0.55_0.2085_322.43))]", logo: t8, title: "Sentry", links: t9, docsLinks: t10, subTitle: "Error and performance monitoring for every stack.", description: "Sentry is a full-stack application monitoring platform used by millions of developers to identify, debug, and resolve errors and performance issues across web, mobile, backend, and distributed systems. It provides error monitoring, distributed tracing, session replay, profiling, code coverage, uptime and cron monitoring, and release health tracking, all in one place. Sentry automatically captures unhandled exceptions, groups similar errors, and connects issues to the relevant code and commit authors. With support for over 100 platforms and frameworks, Sentry integrates with popular developer tools like GitHub, GitLab, Slack, and Jira. Its tracing and performance monitoring features help pinpoint bottlenecks from frontend to backend, while session replay and user feedback provide visual context for debugging. Sentry can be set up with just a few lines of code and supports both cloud and self-hosted deployments, making it suitable for teams of any size who want to improve code quality and fix problems faster.", features: ["Error monitoring with alerts and stack traces", "Distributed tracing for performance visibility", "Session replay for visual debugging", "Continuous profiling for bottlenecks", "Uptime and cron monitoring", "Code coverage and PR feedback", "User feedback linked to errors", "Integrations with GitHub, Slack, Jira, etc.", "100+ platform and framework support", "Fast setup, cloud or self-hosted"], issues: [] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(LogoCheckSiteMeta, {});
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  let t13;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = [{
      label: "check-site-meta",
      href: "https://github.com/alfonsusac/check-site-meta/"
    }];
    $[13] = t13;
  } else {
    t13 = $[13];
  }
  let t14;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      t11,
      /* @__PURE__ */ jsx(Section, { id: "check-site-meta", className: "bg-[oklch(0.5366_0.0477_262.77)]", logo: t12, title: "check-site-meta", links: t13, subTitle: "Local metadata and link preview checker.", description: "check-site-meta is a command-line tool for inspecting website metadata and generating link previews without requiring deployment. It runs a local Node.js backend to bypass CORS restrictions and caching issues, providing accurate retrieval of OpenGraph and Twitter metadata from any URL, including localhost. The tool supports previewing how your site will appear on X (Twitter), Discord, Google, and Facebook, and can also check sitemaps and robots.txt. To use, run pnpx check-site-meta or npx check-site-meta in your terminal.", features: ["Extracts metadata from any URL", "Works with both localhost and websites", "Generates previews for X, Discord, Google, Facebook", "Bypasses CORS and caching limitations", "Command-line tool, no deployment required", "Open source and easy to use"], issues: [] })
    ] });
    $[14] = t14;
  } else {
    t14 = $[14];
  }
  return t14;
};

export { SplitComponent as component };
//# sourceMappingURL=index-CjtDSEik.mjs.map
