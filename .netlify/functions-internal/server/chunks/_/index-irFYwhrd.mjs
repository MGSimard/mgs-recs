import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { a as LogoGit, S as Section, b as LogoGitHub } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageVersionControl() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoGit, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Git",
      href: "https://git-scm.com/"
    }];
    t2 = [{
      label: "Git",
      href: "https://git-scm.com/doc/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "git", className: "bg-[oklch(0.6154_0.1859_31.32)]", logo: t0, title: "Git", links: t1, docsLinks: t2, subTitle: "The foundation of modern code management.", description: "Git is a distributed version control system that tracks changes in source code, enabling multiple developers to collaborate efficiently and safely. It is the backbone of modern software development workflows, allowing teams to manage code history, experiment with new features, and coordinate contributions across projects of any size. Mastery of Git is essential for effective collaboration and maintaining code quality in both open source and commercial projects. If you are moving beyond the absolute basics of web development, learning Git and version control should be a top priority, as it is a fundamental skill for any developer working on real-world projects. Memorizing all commands isn't necessary, you can get away with the basics and also using the Source Control GUI in VS Code.", features: ["Lightning-fast performance for most operations", "Distributed architecture with full local history", "Flexible branching and merging workflows", "Staging area for granular commit control", "Cryptographic data integrity and checksums", "Free and open source under GPLv2"], issues: ["Advanced command usage can be complex and messy"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoGitHub, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "GitHub",
      href: "https://github.com/"
    }];
    t6 = [{
      label: "GitHub",
      href: "https://docs.github.com/"
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
      /* @__PURE__ */ jsx(Section, { id: "github", className: "bg-[oklch(0.55_0.1474_146.26)]", logo: t4, title: "GitHub", links: t5, docsLinks: t6, subTitle: "Central hub for code and collaboration.", description: "GitHub is a web-based platform for hosting and managing Git repositories, widely used for both open source and private projects. It provides tools for version control, collaboration, code review, and issue tracking, making it easy for individuals and teams to contribute, discuss, and manage software development. With features like pull requests, actions for CI/CD, and extensive integrations, GitHub has become the central hub for modern software development workflows.", features: ["Pull requests & code review", "CI/CD automation", "Issue & project tracking", "Copilot AI coding", "Cloud dev environments", "Security scanning & secrets", "Integrations & marketplace"], issues: ["They still haven't put a one-click repository navigation button in the nav bar in 2025"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-irFYwhrd.mjs.map
