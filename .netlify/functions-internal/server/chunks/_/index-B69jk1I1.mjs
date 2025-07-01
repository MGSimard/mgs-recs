import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { ai as LogoPostHog, S as Section, aj as LogoPlausible, ak as LogoGoogleAnalytics } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageAnalytics() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoPostHog, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "PostHog",
      href: "https://www.posthog.com/"
    }];
    t2 = [{
      label: "PostHog",
      href: "https://posthog.com/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "posthog", className: "bg-[linear-gradient(to_right,oklch(0.52_0.2678_265.34)_0%_25%,oklch(0.65_0.2135_37.99)_25%_50%,oklch(0.83_0.1607_83.7)_50%_75%,oklch(0_0_0)_75%_100%)]", logo: t0, title: "PostHog", links: t1, docsLinks: t2, subTitle: "Best option for both free and paid users.", description: "PostHog is an open source analytics suite for product and web analytics. Unlike Plausible, which is only free for the first 30 days, PostHog provides a recurring free tier of 1 million events, 5,000 session recordings, and more every month, even on paid plans. Data can be collected via a web snippet or developer-friendly APIs, with libraries for most major languages and frameworks. PostHog supports both cloud and self-hosted deployments and offers full SQL access to your data. To avoid analytics being blocked by adblockers like uBlock Origin, you need to reverse-proxy requests through your own domain, which applies to both PostHog and Plausible. PostHog also includes features such as session replay, feature flags, A/B testing, and error tracking, all integrated into a single platform. Compared to Plausible, PostHog offers broader integrations, including support for mobile and backend event capture, data warehouse imports and exports, and connections to tools like Stripe, Hubspot, S3, Zapier, and Sentry, as well as more advanced API capabilities. For GDPR compliance, PostHog offers EU-based hosting, options for cookieless tracking, and tools to help you manage user consent and data deletion. You are responsible for obtaining unambiguous consent if you collect personal data, and PostHog provides documentation and features to support secure, compliant analytics deployments. For self-hosting, you can run PostHog on Hetzner or any other VPS provider.", features: ["Product and web analytics with autocapture", "Session replay and heatmaps", "Feature flags and A/B testing", "Error tracking and issue management", "Surveys and product tours", "SQL access and custom reports", "Data pipelines and warehouse integrations", "API, webhooks, and reverse proxy support", "Cloud or self-hosted, open source platform", "Cookieless tracking, EU/US hosting, consent management"], issues: ["Need to reverse-proxy analytics to bypass adblockers"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoPlausible, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Plausible",
      href: "https://plausible.io/"
    }];
    t6 = [{
      label: "Plausible",
      href: "https://plausible.io/docs/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "plausible", className: "bg-[linear-gradient(135deg,oklch(0.72_0.1327_276.82),oklch(0.48_0.2295_278.48))]", logo: t4, title: "Plausible", links: t5, docsLinks: t6, subTitle: "Simple, privacy-first web analytics as a GA4 alternative.", description: "Plausible is an open source, privacy-focused web analytics tool that provides simple, essential website metrics on a single dashboard without using cookies or collecting personal data. It is fully compliant with GDPR, CCPA, and PECR, and all data is processed and stored in the EU on European-owned infrastructure. The lightweight tracking script minimizes impact on site speed and reduces your site's carbon footprint. Plausible supports goal and event tracking, funnels, UTM campaign analysis, and integrations with tools like WordPress and Google Search Console. You can invite team members, share dashboards, and choose between managed hosting or self-hosting. For self-hosting, you can run Plausible on Hetzner or any other VPS provider. Pricing is based on monthly pageviews, with plans that scale as your traffic grows, and a free 30-day trial is available.", features: ["Simple, one-page dashboard with essential metrics", "Lightweight script for fast site performance", "No cookies or personal data, privacy-first by design", "Open source and self-hostable, EU-based hosting", "GDPR, CCPA, and PECR compliant out of the box", "Goal and event tracking, funnels, and UTM analysis", "Public or private stats sharing and white-label options", "Accurate bot filtering and adblocker bypass via proxy"], issues: ["Free tier limited to 30 days"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoGoogleAnalytics, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Google Analytics",
      href: "https://developers.google.com/analytics/"
    }];
    t10 = [{
      label: "Google Analytics",
      href: "https://developers.google.com/analytics/devguides/collection/ga4"
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
      /* @__PURE__ */ jsx(Section, { id: "google-analytics", className: "bg-[linear-gradient(to_right,oklch(0.67_0.1684_54.3),oklch(0.8_0.1673_75.99))]", logo: t8, title: "Google Analytics", links: t9, docsLinks: t10, subTitle: "The default, but not the favorite.", description: "Google Analytics is the most widely used analytics platform and is deeply integrated into the web and advertising ecosystem, offering advanced reporting, machine learning insights, and seamless connections to other Google products like Ads and Search Console. Despite its powerful features and global infrastructure, the developer and user experience is notoriously poor: the interface is complex, slow, and often confusing, and cookie consent requirements are tightly coupled with its use for advertising and personalization. While its dominance and integrations are significant, especially for organizations that rely on Google's ad stack or need cross-platform attribution, it is hard to recommend for most use cases due to its frustrating day-to-day experience.", features: ["Advanced reporting and real-time analytics", "Cross-platform and cross-device tracking", "Machine learning insights and predictive metrics", "Custom dashboards, explorations, and funnel analysis", "Seamless integration with Google Ads and Search Console", "Flexible data collection via APIs and Tag Manager", "Attribution modeling and advertising ROI analysis", "Global infrastructure and scalable data processing"], issues: ["Confusing, slow, and user-hostile interface", "Reports vs Explorations split, inconsistent and limited", "Complex event tracking and dataLayer setup", "Data sampling, reporting delays, and cardinality limits", "Blocked by adblockers and strict privacy requirements", "Limited transparency, closed source"] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-B69jk1I1.mjs.map
