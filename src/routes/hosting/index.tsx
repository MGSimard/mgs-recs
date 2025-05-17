import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCloudflarePages, LogoCoolify, LogoHetzner, LogoNetlify, LogoVercel } from "@/_components/Icons";

export const Route = createFileRoute("/hosting/")({
  component: PageHosting,
  loader: () => ({ title: "Hosting" }),
});

function PageHosting() {
  return (
    <>
      <Section
        id="cloudflare-pages"
        className="bg-[linear-gradient(oklch(0.82_0.1489_76.83),oklch(0.72_0.1624_52.09))]"
        logo={<LogoCloudflarePages />}
        title="Cloudflare Pages"
        links={[{ label: "Cloudflare Pages", href: "https://pages.cloudflare.com/" }]}
        docsLinks={[{ label: "Cloudflare Pages", href: "https://developers.cloudflare.com/pages/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="vercel"
        className="bg-black"
        logo={<LogoVercel />}
        title="Vercel"
        links={[{ label: "Vercel", href: "https://vercel.com/" }]}
        docsLinks={[{ label: "Vercel", href: "https://vercel.com/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="netlify"
        className="bg-[linear-gradient(oklch(0.72_0.1232_192.75),oklch(0.36_0.0618_193.18))]"
        logo={<LogoNetlify />}
        title="Netlify"
        links={[{ label: "Netlify", href: "https://www.netlify.com/" }]}
        docsLinks={[{ label: "Netlify", href: "https://docs.netlify.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="coolify"
        className="bg-[oklch(0.6_0.2412_293.08)]"
        logo={<LogoCoolify />}
        title="Coolify"
        links={[{ label: "Coolify", href: "https://coolify.io/" }]}
        docsLinks={[{ label: "Coolify", href: "https://coolify.io/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="hetzner"
        className="bg-[oklch(0.55_0.2194_23.17)]"
        logo={<LogoHetzner />}
        title="Hetzner"
        links={[{ label: "Hetzner", href: "https://www.hetzner.com/" }]}
        docsLinks={[{ label: "Hetzner", href: "https://docs.hetzner.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
