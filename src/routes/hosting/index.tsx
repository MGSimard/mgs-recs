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
        description="Vercel is a cloud platform for deploying and hosting fullstack web applications, designed to deliver fast, reliable experiences at global scale. Its fluid compute technology bridges the gap between traditional servers and serverless, combining efficient resource usage with the flexibility to handle real-time, dynamic workloads like APIs, streaming, and AI. With in-function concurrency, Vercel Functions can process multiple requests simultaneously, reducing idle time and optimizing costs. Features like cold-start reduction, dynamic scaling, and cross-region failover ensure high performance and reliability. Vercel integrates deeply with Next.js for seamless server and client rendering, and its marketplace offers easy connections to databases like Neon and Redis. Developers benefit from instant Git-based deployments, preview builds for every deployment, collaborative previews, and a transparent pricing model based on actual execution time, making Vercel a robust choice for modern, data-driven web projects."
        features={[""]}></Section>

      <Section
        id="netlify"
        className="bg-[linear-gradient(oklch(0.72_0.1232_192.75),oklch(0.36_0.0618_193.18))]"
        logo={<LogoNetlify />}
        title="Netlify"
        links={[{ label: "Netlify", href: "https://www.netlify.com/" }]}
        docsLinks={[{ label: "Netlify", href: "https://docs.netlify.com/" }]}
        subTitle="All your sites, stores, & apps."
        description="Netlify is a cloud platform for deploying, hosting, and scaling modern web projects, supporting everything from static sites to dynamic apps and e-commerce. With deep Git integration, every push triggers an automated build and deploy to a global edge network, providing instant rollbacks, live previews, and collaborative workflows. Netlify offers flexible serverless infrastructure, including edge functions and background jobs, and integrates with a wide range of frameworks, databases, and third-party services through its marketplace. Teams benefit from built-in security, granular access controls, and real-time analytics, while automatic scaling and advanced caching ensure fast, reliable performance for projects of any size."
        features={[""]}></Section>

      <Section
        id="coolify"
        className="bg-[oklch(0.6_0.2412_293.08)]"
        logo={<LogoCoolify />}
        title="Coolify"
        links={[{ label: "Coolify", href: "https://coolify.io/" }]}
        docsLinks={[{ label: "Coolify", href: "https://coolify.io/docs/" }]}
        subTitle="Open source self-hosting with superpowers."
        description="Coolify is an open source platform for deploying, managing, and scaling web applications, databases, and services on your own infrastructure or in the cloud. As a self-hostable alternative to platforms like Netlify and Vercel, Coolify supports any language or framework and can deploy to any server you control, such as a VPS, Raspberry Pi, or major cloud providers, via SSH. I recommend hosting on Hetzner, and you can get a €20 free credit to get started. With Coolify, you can easily self-host databases and applications built with frameworks like Next.js, Nuxt.js, Remix, SvelteKit, and Wordpress. With push-to-deploy Git integration, free SSL, automatic backups, and no vendor lock-in, you maintain full control over your data and costs. Coolify Cloud offers a managed control panel hosted by the Coolify team, so you do not have to maintain the dashboard yourself, but you still bring your own deployment servers. This hybrid approach gives you high availability, free email notifications, and priority support, while keeping your deployments flexible and under your control. Features like real-time monitoring, collaborative team management, and a powerful API make Coolify a robust choice for developers who want the benefits of self-hosting with less maintenance."
        features={[""]}></Section>

      <Section
        id="hetzner"
        className="bg-[oklch(0.55_0.2194_23.17)]"
        logo={<LogoHetzner />}
        title="Hetzner"
        links={[{ label: "Hetzner", href: "https://www.hetzner.com/" }]}
        docsLinks={[{ label: "Hetzner", href: "https://docs.hetzner.com/" }]}
        subTitle="Enterprise infrastructure at budget-friendly prices."
        description="Ever heard of that saying that all you need is a $5 VPS? They're talking about Hetzner. As a German infrastructure provider known for exceptional value, Hetzner offers everything from budget-friendly cloud instances to high-performance dedicated servers and cutting-edge GPU solutions for AI workloads. Their cloud platform features NVMe SSDs in RAID10, AMD EPYC and Intel Xeon processors, and a robust 10 Gbit network, all backed by their own data centers in Germany, Finland, USA, and Singapore. With included DDoS protection, extensive API support, and GDPR compliance, Hetzner delivers enterprise-grade features at prices that make self-hosting accessible to everyone. Whether you need a simple VPS for development, dedicated CPU power for production workloads, or GPU servers for AI applications, Hetzner's transparent pricing and reliable infrastructure make it a go-to choice for developers and businesses alike."
        features={[""]}></Section>
    </>
  );
}
