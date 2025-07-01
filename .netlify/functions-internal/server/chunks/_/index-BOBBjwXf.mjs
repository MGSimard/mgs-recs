import { jsx, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { q as LogoResend, S as Section } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageMailing() {
  const $ = c(4);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoResend, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Resend",
      href: "https://resend.com/"
    }];
    t2 = [{
      label: "Resend",
      href: "https://resend.com/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Section, { id: "resend", className: "bg-[oklch(0.120.0137_284.11)]", logo: t0, title: "Resend", links: t1, docsLinks: t2, subTitle: "Email delivery platform for developers.", description: "Resend is an email delivery platform built for developers, focused on making it easy to send transactional and marketing emails that reach inboxes instead of spam folders. With a simple API, SDKs for popular languages, and a modern dashboard, Resend lets you integrate email sending in minutes. Features include proactive blocklist tracking, managed dedicated IPs, dynamic suppression lists, and detailed analytics. You can build emails visually or with React components using their open source library, react-email. Resend also offers robust contact management, modular webhooks, and tools to monitor and protect your domain reputation, all designed to provide a reliable and developer-friendly email experience.", features: ["Powerful and easy-to-use Email API", "SDKs for popular programming languages", "Detailed logs and real-time observability", "Flexible endpoints for attachments, scheduling, and batch emails", "Reliable SMTP service with quick integration", "Secure and compliant with GDPR and SOC 2", "Contact management and audience segmentation", "Visual email builder and WYSIWYG editor", "Comprehensive analytics and deliverability insights"], issues: [] }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};

export { SplitComponent as component };
//# sourceMappingURL=index-BOBBjwXf.mjs.map
