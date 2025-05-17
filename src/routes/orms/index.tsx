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
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="prisma"
        className="bg-[linear-gradient(oklch(0.72_0.0887_191.61),oklch(0.29_0.0345_207.62),oklch(0.15_0.0237_279.02)90%)]"
        logo={<LogoPrisma />}
        title="Prisma ORM"
        links={[{ label: "Prisma ORM", href: "https://www.prisma.io/orm/" }]}
        docsLinks={[{ label: "Prisma ORM", href: "https://www.prisma.io/docs/orm/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}
