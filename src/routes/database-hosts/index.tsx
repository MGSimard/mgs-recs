import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoNeon, LogoPlanetScale, LogoSupabase } from "@/_components/Icons";

export const Route = createFileRoute("/database-hosts/")({
  component: PageDatabaseHosts,
  loader: async () => ({ title: "Database Hosts" }),
});

function PageDatabaseHosts() {
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
        features={[""]}></Section>

      <Section
        id="supabase"
        className="bg-[oklch(0.76_0.1551_159.51)]"
        logo={<LogoSupabase />}
        title="Supabase"
        links={[{ label: "Supabase", href: "https://supabase.com/" }]}
        docsLinks={[{ label: "Supabase", href: "https://supabase.com/docs/" }]}
        subTitle="Open-source alternative to Firebase."
        description="Supabase is an open-source platform that provides a suite of tools to build backends, aiming to be an alternative to Firebase. At its core is a PostgreSQL database. Built on top of AWS infrastructure, Supabase offers a managed service with integrated authentication, real-time subscriptions, serverless functions, and storage alongside the database. It provides a comprehensive backend-as-a-service experience with the flexibility of open source."
        features={[""]}></Section>

      <Section
        id="planetscale"
        className="bg-[oklch(0.66_0.2021_39.35)]"
        logo={<LogoPlanetScale />}
        title="PlanetScale"
        links={[{ label: "PlanetScale", href: "https://planetscale.com/" }]}
        docsLinks={[{ label: "PlanetScale", href: "https://planetscale.com/docs/" }]}
        subTitle="Secalable MySQL."
        description="PlanetScale is a serverless database platform built on MySQL and powered by Vitess, a database clustering system originally developed at YouTube. Its standout features are database branching (similar to Git) and a schema change workflow that eliminates downtime for migrations. PlanetScale focuses heavily on developer experience and scalability for MySQL workloads. However, unlike some other options, PlanetScale does not currently offer a free tier, making it a more suitable choice for established enterprises or projects with production budgets rather than individual hobbyists or those just starting out."
        features={[""]}></Section>
    </>
  );
}
