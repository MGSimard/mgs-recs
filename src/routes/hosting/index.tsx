import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/hosting/")({
  component: PageHosting,
  loader: () => ({ title: "Hosting" }),
});

function PageHosting() {
  return (
    <>
      <Section
        title="Cloudflare Pages"
        id="cloudflare-pages"
        links={[{ label: "Cloudflare Pages", href: "https://pages.cloudflare.com/" }]}
        docsLinks={[{ label: "Cloudflare Pages", href: "https://developers.cloudflare.com/pages/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Vercel"
        id="vercel"
        links={[{ label: "Vercel", href: "https://vercel.com/" }]}
        docsLinks={[{ label: "Vercel", href: "https://vercel.com/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Netlify"
        id="netlify"
        links={[{ label: "Netlify", href: "https://www.netlify.com/" }]}
        docsLinks={[{ label: "Netlify", href: "https://docs.netlify.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Coolify"
        id="coolify"
        links={[{ label: "Coolify", href: "https://coolify.io/" }]}
        docsLinks={[{ label: "Coolify", href: "https://coolify.io/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Hetzner"
        id="hetzner"
        links={[{ label: "Hetzner", href: "https://www.hetzner.com/" }]}
        docsLinks={[{ label: "Hetzner", href: "https://docs.hetzner.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
