import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { ag as LogoBetterAuth, S as Section, ah as LogoClerk } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageAuth() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoBetterAuth, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Better Auth",
      href: "https://www.better-auth.com/"
    }];
    t2 = [{
      label: "Better Auth",
      href: "https://better-auth.com/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "better-auth", className: "bg-black", logo: t0, title: "Better Auth", links: t1, docsLinks: t2, subTitle: "Own your authentication and authorization", description: "Better Auth is a TypeScript authentication and authorization library that gives you full control without managed service limitations. It supports major frameworks, advanced features (2FA, multi-tenancy, social sign-on), and a flexible plugin system. Keep user data in your own database, avoid lock-in, and reduce boilerplate.", features: ["Framework agnostic", "Email & password", "Account & session management", "Built-in rate limiter", "Automatic database management", "Extensive OAuth support", "Organization & access control", "Two factor authentication", "Plugin ecosystem"], issues: ["Actively changing due to its infancy state"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoClerk, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Clerk",
      href: "https://clerk.com/"
    }];
    t6 = [{
      label: "Clerk",
      href: "https://clerk.com/docs"
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
      /* @__PURE__ */ jsx(Section, { id: "clerk", className: "bg-[oklch(0.69_0.1757_289.58)]", logo: t4, title: "Clerk", links: t5, docsLinks: t6, subTitle: "Managed authentication and authorization", description: "Clerk is a complete user management and authentication platform for web and mobile applications. It provides prebuilt UI components, flexible APIs, and admin dashboards for sign-in, sign-up, user profiles, and organization management. Clerk supports advanced features like multi-factor authentication, social sign-on, enterprise SSO, and session management, all with strong security and compliance standards. With SDKs for popular frontend and backend frameworks, Clerk makes it easy to add secure, customizable authentication and user management to any stack, while letting you tailor the experience to your brand and workflow. Clerk is essentially one of best options (if not the best) for managed authentication and authorization. If you're working on your first app, I'd recommend using Clerk. After that, experiment with Better Auth and see how you like having greater control over your auth process. As a final note, Clerk will be limited to dev mode UI in production unless you're paying for your own domain.", features: ["Pre-built UI components", "Multi-factor authentication", "Social & enterprise SSO", "Bot & abuse protection", "Organization management", "Advanced session handling", "SOC2 & HIPAA compliant", "Framework-specific SDKs", "Admin dashboard"], issues: ["Production mode requires your own domain", "Less control than solutions like Better Auth", "You don't 'own' your auth"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-ChuAg775.mjs.map
