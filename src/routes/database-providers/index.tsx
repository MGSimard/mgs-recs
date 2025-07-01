import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoNeon, LogoPlanetScale, LogoSupabase, LogoConvex } from "@/_components/Icons";

export const Route = createFileRoute("/database-providers/")({
  component: PageDatabaseProviders,
  loader: async () => ({ title: "Database Providers" }),
  head: () => ({ meta: [{ title: "MGS RECS - Database Providers" }] }),
});

function PageDatabaseProviders() {
  return (
    <>
      <Section
        id="neon"
        className="bg-[linear-gradient(180deg,_oklch(0.75_0.1309_224.68),_oklch(0.86_0.2371_141.88))]"
        logo={<LogoNeon />}
        title="Neon"
        links={[{ label: "Neon", href: "https://neon.tech/" }]}
        docsLinks={[{ label: "Neon", href: "https://neon.tech/docs/" }]}
        subTitle="Serverless PostgreSQL for beginners."
        description="Neon is a serverless PostgreSQL database designed for modern cloud-native applications. Its key innovation is the separation of storage and compute, allowing for instant scaling, branching databases (like Git branches), and cost-effectiveness. Neon uses a PostgreSQL core, offering the power and flexibility of PostgreSQL. Crucially for beginners, Neon offers a very generous free tier that allows you to create up to 10 databases, making it an excellent and accessible choice to learn and experiment with PostgreSQL without significant initial cost."
        features={[
          "PostgreSQL",
          "Up to 10 free databases",
          "Autoscaling based on demand",
          "Database branching for development and testing",
          "Connection pooling up to 10,000 connections",
          "Instant point-in-time recovery",
          "Scale to zero when idle to save costs",
          "Built-in authentication and row-level security",
        ]}
        issues={["More outages; reliability concerns", "Bad cold start latency"]}></Section>

      <Section
        id="supabase"
        className="bg-[oklch(0.76_0.1551_159.51)]"
        logo={<LogoSupabase />}
        title="Supabase"
        links={[{ label: "Supabase", href: "https://supabase.com/" }]}
        docsLinks={[{ label: "Supabase", href: "https://supabase.com/docs/" }]}
        subTitle="Open source alternative to Firebase."
        description="Supabase is an open source platform that provides a suite of tools to build backends, aiming to be an alternative to Firebase. At its core is a PostgreSQL database. Built on top of AWS infrastructure, Supabase offers a managed service with integrated authentication, real-time subscriptions, serverless functions, storage, and vector embeddings alongside the database. It provides a comprehensive backend-as-a-service experience with the flexibility of open source."
        features={[
          "PostgreSQL",
          "Multi-provider authentication",
          "Auto-generated APIs (REST/GraphQL)",
          "Real-time WebSocket subscriptions",
          "Serverless Edge Functions",
          "S3-compatible storage",
          "Vector database for AI",
          "Database branching",
          "Row Level Security",
          "Cron jobs and message queues",
        ]}
        issues={[]}></Section>

      <Section
        id="planetscale"
        className="bg-[oklch(0.66_0.2021_39.35)]"
        logo={<LogoPlanetScale />}
        title="PlanetScale"
        links={[{ label: "PlanetScale", href: "https://planetscale.com/" }]}
        docsLinks={[{ label: "PlanetScale", href: "https://planetscale.com/docs/" }]}
        subTitle="Scalable MySQL and PostgreSQL."
        description="PlanetScale is a serverless database platform built on MySQL and powered by Vitess, a database clustering system originally developed at YouTube. Its standout features are database branching (similar to Git) and a schema change workflow that eliminates downtime for migrations. PlanetScale focuses heavily on developer experience and scalability for MySQL workloads. Recently, PlanetScale announced support for PostgreSQL, with early adopters like Convex migrating their reactive database infrastructure to PlanetScale for Postgres. However, unlike some other options, PlanetScale does not currently offer a free tier, making it a more suitable choice for established enterprises or projects with production budgets rather than individual hobbyists or those just starting out."
        features={[
          "MySQL and PostgreSQL (new)",
          "Zero-downtime schema changes",
          "Database branching workflow",
          "Horizontal sharding with Vitess",
          "Unlimited IOPS with NVMe",
          "Query analytics and insights",
          "Vector storage support",
          "99.999% SLA (multi-region)",
          "SOC2 and HIPAA compliant",
        ]}
        issues={["No free tier"]}></Section>

      {/*// Yellow: oklch(0.7996 0.1603 79.95)
// Purple: oklch(0.4588 0.1633 338.34)
// Red: oklch(0.6194 0.2216 27.69) */}
      <Section
        id="convex"
        className="bg-[conic-gradient(oklch(0.6194_0.2216_27.69)0%,oklch(0.6194_0.2216_27.69)33%,oklch(0.7996_0.1603_79.95)33%,oklch(0.7996_0.1603_79.95)66%,oklch(0.4588_0.1633_338.34)66%,oklch(0.4588_0.1633_338.34)100%)]"
        logo={<LogoConvex />}
        title="Convex"
        links={[{ label: "Convex", href: "https://convex.dev/" }]}
        docsLinks={[{ label: "Convex", href: "https://docs.convex.dev/" }]}
        subTitle="Reactive database for modern apps."
        description="Convex is an open-source reactive database where queries are TypeScript code running right in the database. It provides a complete backend-as-a-service with a document-relational database, real-time subscriptions, authentication, file storage, and scheduling. Built for modern reactive UI frameworks, Convex automatically updates your UI when data changes. The cloud version runs on Amazon RDS with MySQL, while the open-source version supports SQLite, Postgres, and MySQL. Convex has migrated their reactive database infrastructure to PlanetScale's new PostgreSQL offering on PlanetScale Metal for enhanced performance and reliability."
        features={[
          "Document-relational database",
          "TypeScript queries (no SQL needed)",
          "Real-time reactive subscriptions",
          "Built-in authentication (80+ OAuth providers)",
          "File storage and vector search",
          "Serverless functions and actions",
          "Cron jobs and scheduling",
          "AI-friendly architecture",
          "Open source and self-hostable",
          "ACID transactions with optimistic concurrency",
        ]}
        issues={[]}></Section>
    </>
  );
}
