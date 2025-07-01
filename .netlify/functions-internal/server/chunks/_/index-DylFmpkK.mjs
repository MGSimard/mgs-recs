import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { m as LogoPolar, S as Section, n as LogoStripe } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PagePayments() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoPolar, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Polar",
      href: "https://polar.sh/"
    }];
    t2 = [{
      label: "Polar",
      href: "https://docs.polar.sh/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "polar", className: "bg-[oklch(0.18_0_0)]", logo: t0, title: "Polar", links: t1, docsLinks: t2, subTitle: "Open source billing platform.", description: "Polar is an open source billing platform for SaaS and digital products, built on Stripe. It adds automation, compliance, and developer tools, supporting flexible pricing, usage-based billing, and entitlements (like license keys and downloads). As a merchant of record, Polar handles tax, invoicing, and payouts, with easy integration and transparent fees.", features: ["Flexible billing for SaaS and digital products", "Supports multiple pricing models and discounts", "Event ingestion enables usage-based billing", "Automated benefits including license keys, downloads, GitHub, and Discord access", "Integrated customer management and analytics", "Handles global tax compliance as merchant of record", "Secure and simple checkouts with customer portal", "Open source platform with framework adapters", "Fast setup and migration with CLI tools"], issues: ["Infancy stage", "Slightly higher fees (worth the MoR)", "$15 dispute fee (due to CCs & PSPs)"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoStripe, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Stripe",
      href: "https://stripe.com/"
    }];
    t6 = [{
      label: "Stripe",
      href: "https://docs.stripe.com/"
    }, {
      label: "Theo's Stripe Recommendations",
      href: "https://github.com/t3dotgg/stripe-recommendations/"
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
      /* @__PURE__ */ jsx(Section, { id: "stripe", className: "bg-[oklch(0.58_0.2346_278.29)]", logo: t4, title: "Stripe", links: t5, docsLinks: t6, subTitle: "Comprehensive payments infrastructure.", description: "Stripe is a leading payments and financial infrastructure platform used by millions of businesses worldwide. It enables you to accept payments online and in person, manage subscriptions, automate revenue operations, and embed financial services with a unified API and prebuilt UI components. Stripe supports 100+ payment methods, 135+ currencies, and offers features like fraud prevention, tax automation, invoicing, and global payouts. While Stripe is powerful, integration can be complex. You are responsible for syncing payment state between Stripe and your own database, handling webhooks, and managing race conditions to avoid mismatches in subscription status. You also need to manage customer and subscription data, environment variables, price IDs, and free trials yourself. Despite these challenges, Stripe remains the industry standard for scalable, secure, and customizable payment solutions. More info on this can be found on the third linked resource at the top of this card.", features: ["Accept payments in 135+ currencies", "100+ payment methods", "Pre-built Checkout and Payment Links", "Customizable UI with Stripe Elements", "In-person payments with Stripe Terminal", "Recurring billing and subscriptions", "Fraud prevention with Stripe Radar", "Automated tax calculation and invoicing", "Real-time reporting and analytics"], issues: ["Split-brain: must sync Stripe & DB via webhooks", "250+ event types, inconsistent data/order", "Race conditions: possible status mismatches", "Free trials & usage tracking are your job", "Preventing duplicate subs is unintuitive", "Webhook data is complex/unreliable", "Cash App Pay: high fraud/cancellation risk", "Doesn't include Merchant of Record", "$15 dispute fee (due to CCs & PSPs)"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-DylFmpkK.mjs.map
