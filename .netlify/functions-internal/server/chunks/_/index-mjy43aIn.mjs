import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { ae as LogoGitHubActions, S as Section, af as LogoCodeRabbit } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageCICD() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoGitHubActions, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "GitHub Actions",
      href: "https://github.com/features/actions"
    }];
    t2 = [{
      label: "GitHub Actions",
      href: "https://docs.github.com/en/actions"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "github-actions", className: "bg-[oklch(0.55_0.1474_146.26)]", logo: t0, title: "GitHub Actions", links: t1, docsLinks: t2, subTitle: "Automated workflows and CI/CD.", description: "GitHub Actions is a CI/CD platform built into GitHub that lets you automate workflows for building, testing, and deploying your code. Workflows can be triggered automatically by events like pushes, pull requests, releases, or run manually as needed. Defined with simple YAML configuration, jobs can run across different environments and automate a wide range of tasks. GitHub Actions integrates seamlessly with your repositories and is completely free for public repos (with some usage limits), making it easy to set up automated pipelines, enforce code quality, and streamline your development process.", features: ["Automated CI/CD workflows", "Event-driven triggers and scheduling", "Matrix builds for multiple environments", "Reusable actions and workflow templates", "GitHub-hosted and self-hosted runners", "Integrated secrets and environment management", "Rich marketplace of community actions"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoCodeRabbit, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "CodeRabbit",
      href: "https://coderabbit.ai/"
    }];
    t6 = [{
      label: "CodeRabbit",
      href: "https://docs.coderabbit.ai/"
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
      /* @__PURE__ */ jsx(Section, { id: "coderabbit", className: "bg-[oklch(0.68_0.2153_38.76)]", logo: t4, title: "CodeRabbit", links: t5, docsLinks: t6, subTitle: "AI-driven code quality, from editor to pull request.", description: "CodeRabbit is an AI-powered code review tool that helps developers catch bugs, improve code quality, and ship faster. It provides automated, context-aware code reviews directly on pull requests in platforms like GitHub and GitLab, offering line-by-line feedback, summaries, and actionable suggestions. With the free Visual Studio Code extension, you can get instant AI reviews and one-click fixes for your code right inside your editor, even before opening a pull request. CodeRabbit supports all major languages, integrates with popular project management tools, and prioritizes security with features like zero data retention and SOC2 Type II compliance.", features: ["AI-powered code reviews in PRs and IDE", "Context-aware feedback with codebase analysis", "Supports all major languages and platforms", "One-click fixes and actionable suggestions", "Customizable review preferences and learnings", "Integrates with GitHub, GitLab, Azure, Bitbucket", "Zero data retention and enterprise-grade security"], issues: ["In-editor comments return after clicking ignore"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-mjy43aIn.mjs.map
