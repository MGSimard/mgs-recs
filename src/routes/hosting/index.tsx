import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoCloudflarePages, LogoCoolify, LogoHetzner, LogoNetlify, LogoVercel } from "@/_components/Icons";

export const Route = createFileRoute("/hosting/")({
  component: PageHosting,
  loader: () => ({ title: "Hosting" }),
  head: () => ({ meta: [{ title: "MGS RECS - Hosting" }] }),
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
        description="Cloudflare Pages lets you build and deploy static sites with automated Git integration and global edge delivery. Add Cloudflare Workers for serverless functions or APIs, combining static hosting with dynamic features. Includes automatic SSL, privacy-first analytics, and generous free usage and scaling."
        features={[
          "Effortless Git integration for automated deployments",
          "Unlimited free collaborators and preview links",
          "Global edge network for fast, secure delivery",
          "Built-in serverless functions with Pages Functions",
          "Automatic SSL, HTTP/3, and privacy-first analytics",
          "Instant rollbacks and granular preview controls",
          "Supports static and dynamic JAMstack sites",
          "Virtually unlimited bandwidth and scaling at no cost",
        ]}
        issues={[]}></Section>

      <Section
        id="vercel"
        className="bg-black"
        logo={<LogoVercel />}
        title="Vercel"
        links={[{ label: "Vercel", href: "https://vercel.com/" }]}
        docsLinks={[{ label: "Vercel", href: "https://vercel.com/docs/" }]}
        subTitle="Optimized for Next.js and full-stack edge applications."
        description="Vercel is a cloud platform for deploying fullstack web apps, optimized for speed and reliability at scale. Its fluid compute bridges serverless and traditional servers, supporting real-time workloads like APIs and AI. Features include in-function concurrency, dynamic scaling, cold-start reduction, and deep Next.js integration. Developers get instant Git-based deployments, preview builds, and transparent usage-based pricing."
        features={[
          "Zero-config Git-based deployments and instant rollbacks",
          "Global edge network for fast, scalable delivery",
          "Optimized for Next.js and all major frameworks",
          "Fluid compute with in-function concurrency and dynamic scaling",
          "Preview environments and collaborative feedback for every push",
          "Integrated analytics, observability, and monitoring",
          "Automatic SSL, DDoS protection, and enterprise security",
          "Marketplace integrations for databases, AI, and more",
        ]}
        issues={[]}></Section>

      <Section
        id="netlify"
        className="bg-[linear-gradient(oklch(0.72_0.1232_192.75),oklch(0.36_0.0618_193.18))]"
        logo={<LogoNetlify />}
        title="Netlify"
        links={[{ label: "Netlify", href: "https://www.netlify.com/" }]}
        docsLinks={[{ label: "Netlify", href: "https://docs.netlify.com/" }]}
        subTitle="All your sites, stores, & apps."
        description="Netlify is a cloud platform for deploying and scaling modern web projects, from static sites to dynamic apps. Automated Git-based builds deploy to a global edge network with instant rollbacks and live previews. Netlify offers serverless functions, edge features, marketplace integrations, built-in security, and real-time analytics for fast, reliable performance."
        features={[
          "Automated Git-based CI/CD and instant rollbacks",
          "Global edge network for fast, reliable delivery",
          "Framework-agnostic with support for all modern stacks",
          "Edge Functions, serverless functions, and background jobs",
          "Collaborative deploy previews and feedback workflows",
          "Integrated forms, image CDN, and real-time analytics",
          "Granular cache control and atomic deployments",
          "Enterprise-grade security, access control, and compliance",
        ]}
        issues={[]}></Section>

      <Section
        id="coolify"
        className="bg-[oklch(0.6_0.2412_293.08)]"
        logo={<LogoCoolify />}
        title="Coolify"
        links={[{ label: "Coolify", href: "https://coolify.io/" }]}
        docsLinks={[{ label: "Coolify", href: "https://coolify.io/docs/" }]}
        subTitle="Open source self-hosting with superpowers."
        description="Coolify is an open source platform for deploying and managing web apps, databases, and services on your own infrastructure or in the cloud. It supports any language or framework, deploys to any server via SSH, and offers push-to-deploy Git integration, free SSL, and automatic backups. Coolify Cloud provides a managed control panel while you keep control of your servers. Features include real-time monitoring, team management, and a powerful API—ideal for developers wanting self-hosting with less maintenance."
        features={[
          "Managed cloud or self-managed (still your servers)",
          "Deploy any language, framework, or Docker service",
          "Works with any server via SSH, including VPS and Raspberry Pi",
          "Supports single, multi-server, and Docker Swarm setups",
          "Push-to-deploy Git integration with major platforms",
          "Automatic SSL certificates and database backups",
          "No vendor lock-in, full data privacy and control",
          "Real-time browser terminal and powerful API",
          "Collaborative team management and PR deployments",
          "Built-in monitoring, notifications, and server automations",
        ]}
        issues={[]}></Section>

      <Section
        id="hetzner"
        className="bg-[oklch(0.55_0.2194_23.17)]"
        logo={<LogoHetzner />}
        title="Hetzner"
        links={[{ label: "Hetzner", href: "https://www.hetzner.com/" }]}
        docsLinks={[{ label: "Hetzner", href: "https://docs.hetzner.com/" }]}
        subTitle="Enterprise infrastructure at budget-friendly prices."
        description="Hetzner is a German provider offering budget-friendly cloud instances, high-performance servers, and GPU solutions for AI. Their platform features NVMe SSDs, AMD EPYC/Intel Xeon CPUs, a 10 Gbit network, and global data centers. With DDoS protection, API support, and GDPR compliance, Hetzner delivers enterprise features at accessible prices for developers and businesses."
        features={[
          "Exceptional price-to-performance for cloud and dedicated servers",
          "Wide range of server types: shared, dedicated, GPU, and ARM64",
          "Global data centers in Germany, Finland, USA, and Singapore",
          "Enterprise-grade hardware: AMD EPYC, Intel Xeon, NVMe SSD RAID10",
          "Flexible block storage, snapshots, and automated backups",
          "Powerful networking: private networks, load balancers, floating IPs",
          "Free DDoS protection and GDPR-compliant infrastructure",
          "Comprehensive REST API and CLI for automation",
          "24/7 expert support and ISO 27001 certified data centers",
        ]}
        issues={["Limited US & Asia servers"]}></Section>
    </>
  );
}
