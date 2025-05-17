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
        id="supabase"
        className="bg-[oklch(0.76_0.1551_159.51)]"
        logo={<LogoSupabase />}
        title="Supabase"
        links={[{ label: "Supabase", href: "https://supabase.com/" }]}
        docsLinks={[{ label: "Supabase", href: "https://supabase.com/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="neon"
        className="bg-[linear-gradient(180deg,_oklch(0.75_0.1309_224.68),_oklch(0.86_0.2371_141.88))]"
        logo={<LogoNeon />}
        title="Neon"
        links={[{ label: "Neon", href: "https://neon.tech/" }]}
        docsLinks={[{ label: "Neon", href: "https://neon.tech/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="planetscale"
        className="bg-[oklch(0.66_0.2021_39.35)]"
        logo={<LogoPlanetScale />}
        title="PlanetScale"
        links={[{ label: "PlanetScale", href: "https://planetscale.com/" }]}
        docsLinks={[{ label: "PlanetScale", href: "https://planetscale.com/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
