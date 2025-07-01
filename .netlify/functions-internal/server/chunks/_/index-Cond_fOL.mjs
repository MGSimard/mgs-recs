import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { o as LogoDrizzleOrm, S as Section, p as LogoPrisma } from './Icons-CuUqCmYQ.mjs';
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

const SplitComponent = function PageOrms() {
  const $ = c(8);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoDrizzleOrm, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "Drizzle ORM",
      href: "https://orm.drizzle.team/"
    }];
    t2 = [{
      label: "Drizzle ORM",
      href: "https://orm.drizzle.team/docs/overview/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "drizzle-orm", className: "bg-[oklch(0.91_0.197_124.63)]", logo: t0, title: "Drizzle ORM", links: t1, docsLinks: t2, subTitle: "Type-safe SQL queries in TypeScript.", description: "Drizzle ORM provides a lightweight and highly type-safe way to interact with your database using TypeScript. It offers a functional, composable approach to building SQL queries, letting you write type-safe code that feels close to raw SQL. Drizzle includes features like schema migrations, a powerful query builder, and Drizzle Studio, which is a visual interface for exploring and managing your database. This makes it a strong choice for projects prioritizing type safety and a developer-friendly SQL-like experience.", features: ["High-performance SQL query builder", "Zero dependencies, serverless-ready", "Type-safe schema definitions", "Prepared statements support", "Supports PostgreSQL, MySQL & SQLite", "Efficient relational queries (no n+1)", "Visual database explorer (Drizzle Studio)", "Automatic migrations", "First-class TypeScript support"], issues: ["Multi-project schema support is consistently bugged"] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoPrisma, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "Prisma ORM",
      href: "https://www.prisma.io/orm/"
    }];
    t6 = [{
      label: "Prisma ORM",
      href: "https://www.prisma.io/docs/orm/"
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
      /* @__PURE__ */ jsx(Section, { id: "prisma", className: "bg-[linear-gradient(oklch(0.72_0.0887_191.61),oklch(0.29_0.0345_207.62),oklch(0.15_0.0237_279.02)90%)]", logo: t4, title: "Prisma ORM", links: t5, docsLinks: t6, subTitle: "Schema-driven, type-safe database client.", description: "Prisma is an open source ORM and database toolkit focused on developer productivity and ease of use. Unlike Drizzle, which emphasizes writing SQL-like queries directly in TypeScript, Prisma uses a schema definition file to model your data and generates a type-safe client for database access. Prisma offers a polished visual database browser (Prisma Studio), robust migrations, and broad database support. Its approach is ideal for teams seeking a higher-level abstraction and automated client generation, while Drizzle appeals to those who prefer more direct, SQL-like control in their code.", features: ["Schema-first development approach", "Auto-generated type-safe client", "Visual database browser (Prisma Studio)", "Automated SQL migrations", "Multi-database support", "Raw SQL with type safety", "Advanced relation queries", "VS Code integration", "Enterprise-grade security"], issues: ["Simpler, but less features and control than Drizzle", "Slower than Drizzle"] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};

export { SplitComponent as component };
//# sourceMappingURL=index-Cond_fOL.mjs.map
