import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { a6 as LogoNeon, S as Section, a7 as LogoSupabase, a8 as LogoPlanetScale } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageDatabaseProviders() {
  const $ = c(12);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoNeon, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Neon",
      href: "https://neon.tech/"
    }];
    t2 = [{
      label: "Neon",
      href: "https://neon.tech/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "neon", className: "bg-[linear-gradient(180deg,_oklch(0.75_0.1309_224.68),_oklch(0.86_0.2371_141.88))]", logo: t0, title: "Neon", links: t1, docsLinks: t2, subTitle: "Serverless PostgreSQL for beginners.", description: "Neon is a serverless PostgreSQL database designed for modern cloud-native applications. Its key innovation is the separation of storage and compute, allowing for instant scaling, branching databases (like Git branches), and cost-effectiveness. Neon uses a PostgreSQL core, offering the power and flexibility of PostgreSQL. Crucially for beginners, Neon offers a very generous free tier that allows you to create up to 10 databases, making it an excellent and accessible choice to learn and experiment with PostgreSQL without significant initial cost.", features: ["PostgreSQL", "Up to 10 free databases", "Autoscaling based on demand", "Database branching for development and testing", "Connection pooling up to 10,000 connections", "Instant point-in-time recovery", "Scale to zero when idle to save costs", "Built-in authentication and row-level security"], issues: ["More outages; reliability concerns", "Bad cold start latency"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoSupabase, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Supabase",
      href: "https://supabase.com/"
    }];
    t6 = [{
      label: "Supabase",
      href: "https://supabase.com/docs/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "supabase", className: "bg-[oklch(0.76_0.1551_159.51)]", logo: t4, title: "Supabase", links: t5, docsLinks: t6, subTitle: "Open source alternative to Firebase.", description: "Supabase is an open source platform that provides a suite of tools to build backends, aiming to be an alternative to Firebase. At its core is a PostgreSQL database. Built on top of AWS infrastructure, Supabase offers a managed service with integrated authentication, real-time subscriptions, serverless functions, storage, and vector embeddings alongside the database. It provides a comprehensive backend-as-a-service experience with the flexibility of open source.", features: ["PostgreSQL", "Multi-provider authentication", "Auto-generated APIs (REST/GraphQL)", "Real-time WebSocket subscriptions", "Serverless Edge Functions", "S3-compatible storage", "Vector database for AI", "Database branching", "Row Level Security", "Cron jobs and message queues"], issues: [] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoPlanetScale, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "PlanetScale",
      href: "https://planetscale.com/"
    }];
    t10 = [{
      label: "PlanetScale",
      href: "https://planetscale.com/docs/"
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
      /* @__PURE__ */ jsx(Section, { id: "planetscale", className: "bg-[oklch(0.66_0.2021_39.35)]", logo: t8, title: "PlanetScale", links: t9, docsLinks: t10, subTitle: "Secalable MySQL.", description: "PlanetScale is a serverless database platform built on MySQL and powered by Vitess, a database clustering system originally developed at YouTube. Its standout features are database branching (similar to Git) and a schema change workflow that eliminates downtime for migrations. PlanetScale focuses heavily on developer experience and scalability for MySQL workloads. However, unlike some other options, PlanetScale does not currently offer a free tier, making it a more suitable choice for established enterprises or projects with production budgets rather than individual hobbyists or those just starting out.", features: ["MySQL", "Zero-downtime schema changes", "Database branching workflow", "Horizontal sharding with Vitess", "Unlimited IOPS with NVMe", "Query analytics and insights", "Vector storage support", "99.999% SLA (multi-region)", "SOC2 and HIPAA compliant"], issues: ["No free tier"] })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
};

export { SplitComponent as component };
//# sourceMappingURL=index-CV_5r3-A.mjs.map
