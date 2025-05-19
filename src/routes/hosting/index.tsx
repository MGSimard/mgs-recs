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
        subTitle="Effortless, virtually zero cost, scalable web hosting."
        description="Cloudflare Pages is a JAMstack platform for frontend developers to build, collaborate, and deploy both static and dynamic sites. With deep Git integration, automated builds, and unlimited free collaborators, you can deploy directly from your repository with every push. Dynamic functionality is powered by Cloudflare Workers, enabling serverless functions and APIs alongside your static assets. Sites are served globally from Cloudflare's edge network for unmatched speed, security, and reliability, with automatic SSL and privacy-first analytics included. Cloudflare Pages can handle virtually unlimited traffic and bandwidth at no cost for most use cases, making it an ideal choice for effortless, infinitely scalable, and maintenance-free hosting."
        features={[""]}></Section>

      <Section
        id="vercel"
        className="bg-black"
        logo={<LogoVercel />}
        title="Vercel"
        links={[{ label: "Vercel", href: "https://vercel.com/" }]}
        docsLinks={[{ label: "Vercel", href: "https://vercel.com/docs/" }]}
        subTitle="Optimized for Next.js and full-stack edge applications."
        description="Vercel is a cloud platform for deploying and hosting fullstack web applications, designed to deliver fast, reliable experiences at global scale. Its fluid compute technology bridges the gap between traditional servers and serverless, combining efficient resource usage with the flexibility to handle real-time, dynamic workloads like APIs, streaming, and AI. With in-function concurrency, Vercel Functions can process multiple requests simultaneously, reducing idle time and optimizing costs. Features like cold-start reduction, dynamic scaling, and cross-region failover ensure high performance and reliability. Vercel integrates deeply with Next.js for seamless server and client rendering, and its marketplace offers easy connections to databases like Neon and Redis. Developers benefit from instant Git-based deployments, collaborative previews, and a transparent pricing model based on actual execution time, making Vercel a robust choice for modern, data-driven web projects."
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
