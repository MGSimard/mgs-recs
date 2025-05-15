import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/orms/")({
  component: PageOrms,
  loader: () => ({ title: "ORMs" }),
});

function PageOrms() {
  return (
    <>
      <Section title="Drizzle ORM" id="drizzle-orm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section title="Prisma" id="prisma">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
