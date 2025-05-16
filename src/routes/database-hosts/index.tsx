import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/database-hosts/")({
  component: PageDatabaseHosts,
  loader: async () => ({ title: "Database Hosts" }),
});

function PageDatabaseHosts() {
  return (
    <>
      <Section
        title="Supabase"
        id="supabase"
        links={[{ label: "Supabase", href: "https://supabase.com/" }]}
        docsLinks={[{ label: "Supabase", href: "https://supabase.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="Neon"
        id="neon"
        links={[{ label: "Neon", href: "https://neon.tech/" }]}
        docsLinks={[{ label: "Neon", href: "https://neon.tech/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>

      <Section
        title="PlanetScale"
        id="planetscale"
        links={[{ label: "PlanetScale", href: "https://planetscale.com/" }]}
        docsLinks={[{ label: "PlanetScale", href: "https://planetscale.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
