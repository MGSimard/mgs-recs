import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/orms/")({
  component: PageOrms,
  loader: () => ({ title: "ORMs" }),
});

function PageOrms() {
  return (
    <>
      <Section
        title="Drizzle ORM"
        id="drizzle-orm"
        links={[{ label: "Drizzle ORM", href: "https://orm.drizzle.team/" }]}
        docsLinks={[{ label: "Drizzle ORM", href: "https://orm.drizzle.team/docs/overview/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Prisma ORM"
        id="prisma"
        links={[{ label: "Prisma ORM", href: "https://www.prisma.io/orm/" }]}
        docsLinks={[{ label: "Prisma ORM", href: "https://www.prisma.io/docs/orm/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
