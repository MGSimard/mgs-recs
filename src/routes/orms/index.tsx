import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoDrizzleOrm, LogoPrisma } from "@/_components/Icons";

export const Route = createFileRoute("/orms/")({
  component: PageOrms,
  loader: () => ({ title: "ORMs" }),
});

function PageOrms() {
  return (
    <>
      <Section
        id="drizzle-orm"
        className="bg-[oklch(0.91_0.197_124.63)]"
        logo={<LogoDrizzleOrm />}
        title="Drizzle ORM"
        links={[{ label: "Drizzle ORM", href: "https://orm.drizzle.team/" }]}
        docsLinks={[{ label: "Drizzle ORM", href: "https://orm.drizzle.team/docs/overview/" }]}
        subTitle="Type-safe SQL queries in TypeScript."
        description="Drizzle ORM provides a lightweight and highly type-safe way to interact with your database using TypeScript. It offers a functional, composable approach to building SQL queries, letting you write type-safe code that feels close to raw SQL. Drizzle includes features like schema migrations, a powerful query builder, and Drizzle Studio, which is a visual interface for exploring and managing your database. This makes it a strong choice for projects prioritizing type safety and a developer-friendly SQL-like experience."
        features={[]}></Section>

      <Section
        id="prisma"
        className="bg-[linear-gradient(oklch(0.72_0.0887_191.61),oklch(0.29_0.0345_207.62),oklch(0.15_0.0237_279.02)90%)]"
        logo={<LogoPrisma />}
        title="Prisma ORM"
        links={[{ label: "Prisma ORM", href: "https://www.prisma.io/orm/" }]}
        docsLinks={[{ label: "Prisma ORM", href: "https://www.prisma.io/docs/orm/" }]}
        subTitle="Schema-driven, type-safe database client."
        description="Prisma is an open source ORM and database toolkit focused on developer productivity and ease of use. Unlike Drizzle, which emphasizes writing SQL-like queries directly in TypeScript, Prisma uses a schema definition file to model your data and generates a type-safe client for database access. Prisma offers a polished visual database browser (Prisma Studio), robust migrations, and broad database support. Its approach is ideal for teams seeking a higher-level abstraction and automated client generation, while Drizzle appeals to those who prefer more direct, SQL-like control in their code."
        features={[]}></Section>
    </>
  );
}
