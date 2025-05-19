import {
  Activity,
  BookOpen,
  BookType,
  ChartLine,
  Clapperboard,
  Code,
  Database,
  DatabaseZap,
  DollarSign,
  FileImage,
  KeyRound,
  Layers,
  LayoutGrid,
  Lightbulb,
  Mail,
  PenTool,
  Server,
  Shapes,
  Table,
  Workflow,
} from "lucide-react";

export const NavLinks = {
  navWebdev: {
    label: "Web Development",
    items: [
      {
        title: "Code Editors",
        url: "/code-editors",
        icon: Code,
        items: [
          {
            title: "Visual Studio Code",
            url: "/code-editors#visual-studio-code",
          },
          {
            title: "Cursor",
            url: "/code-editors#cursor",
          },
          {
            title: "Phoenix Code",
            url: "/code-editors#phoenix-code",
          },
        ],
      },
      {
        title: "Frontend Languages",
        url: "/frontend-languages",
        icon: BookType,
        items: [
          {
            title: "HTML5",
            url: "/frontend-languages#html",
          },
          {
            title: "CSS3",
            url: "/frontend-languages#css",
          },
          {
            title: "JavaScript (ES6+)",
            url: "/frontend-languages#javascript",
          },
          {
            title: "TypeScript",
            url: "/frontend-languages#typescript",
          },
        ],
      },
      {
        title: "Frameworks",
        url: "/frameworks",
        icon: Layers,
        items: [
          {
            title: "Vite + TanStack Router",
            url: "/frameworks#vite-tanstack-router",
          },
          {
            title: "TanStack Start",
            url: "/frameworks#tanstack-start",
          },
          {
            title: "Next.js",
            url: "/frameworks#nextjs",
          },
          {
            title: "Payload",
            url: "/frameworks#payload",
          },
          {
            title: "Fumadocs",
            url: "/frameworks#fumadocs",
          },
        ],
      },
      {
        title: "UI Libraries",
        url: "/ui-libraries",
        icon: LayoutGrid,
        items: [
          {
            title: "shadcn/ui",
            url: "/ui-libraries#shadcn-ui",
          },
          {
            title: "Mantine",
            url: "/ui-libraries#mantine",
          },
          {
            title: "Ant Design",
            url: "/ui-libraries#ant-design",
          },
        ],
      },
      {
        title: "Icon Libraries",
        url: "/icon-libraries",
        icon: Shapes,
        items: [
          {
            title: "Lucide",
            url: "/icon-libraries#lucide",
          },
          {
            title: "Heroicons",
            url: "/icon-libraries#heroicons",
          },
          {
            title: "svgl",
            url: "/icon-libraries#svgl",
          },
        ],
      },
      {
        title: "Databases",
        url: "/databases",
        icon: Database,
        items: [
          {
            title: "PostgreSQL",
            url: "/databases#postgresql",
          },
          {
            title: "MySQL",
            url: "/databases#mysql",
          },
          {
            title: "Redis",
            url: "/databases#redis",
          },
          {
            title: "Dexie.js",
            url: "/databases#dexiejs",
          },
          {
            title: "localStorage",
            url: "/databases#localstorage",
          },
          {
            title: "Google Sheets",
            url: "/databases#google-sheets",
          },
        ],
      },
      {
        title: "Database Hosts",
        url: "/database-hosts",
        icon: DatabaseZap,
        items: [
          {
            title: "Supabase",
            url: "/database-hosts#supabase",
          },
          {
            title: "Neon",
            url: "/database-hosts#neon",
          },
          {
            title: "PlanetScale",
            url: "/database-hosts#planetscale",
          },
        ],
      },
      {
        title: "ORMs",
        url: "/orms",
        icon: Table,
        items: [
          {
            title: "Drizzle ORM",
            url: "/orms#drizzle-orm",
          },
          {
            title: "Prisma ORM",
            url: "/orms#prisma",
          },
        ],
      },
      {
        title: "Auth",
        url: "/auth",
        icon: KeyRound,
        items: [
          {
            title: "Better Auth",
            url: "/auth#better-auth",
          },
          {
            title: "Clerk",
            url: "/auth#clerk",
          },
        ],
      },
      {
        title: "Payments",
        url: "/payments",
        icon: DollarSign,
        items: [
          {
            title: "Stripe",
            url: "/payments#stripe",
          },
          {
            title: "Polar",
            url: "/payments#polar",
          },
        ],
      },
      {
        title: "Mailing",
        url: "/mailing",
        icon: Mail,
        items: [
          {
            title: "Resend",
            url: "/mailing#resend",
          },
        ],
      },
      {
        title: "CI/CD",
        url: "/ci-cd",
        icon: Workflow,
        items: [
          {
            title: "GitHub Actions",
            url: "/ci-cd#github-actions",
          },
          {
            title: "CodeRabbit",
            url: "/ci-cd#coderabbit",
          },
        ],
      },
      {
        title: "Hosting",
        url: "/hosting",
        icon: Server,
        items: [
          {
            title: "Cloudflare Pages",
            url: "/hosting#cloudflare-pages",
          },
          {
            title: "Vercel",
            url: "/hosting#vercel",
          },
          {
            title: "Netlify",
            url: "/hosting#netlify",
          },
          {
            title: "Coolify",
            url: "/hosting#coolify",
          },
          {
            title: "Hetzner",
            url: "/hosting#hetzner",
          },
        ],
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: ChartLine,
        items: [
          {
            title: "PostHog",
            url: "/analytics#posthog",
          },
          {
            title: "Plausible",
            url: "/analytics#plausible",
          },
          {
            title: "Google Analytics",
            url: "/analytics#google-analytics",
          },
        ],
      },
      {
        title: "Diagnostics",
        url: "/diagnostics",
        icon: Activity,
        items: [
          {
            title: "Sentry",
            url: "/diagnostics#sentry",
          },
          {
            title: "React Scan",
            url: "/diagnostics#react-scan",
          },
          {
            title: "Hey Meta",
            url: "/diagnostics#hey-meta",
          },
          {
            title: "Lighthouse",
            url: "/diagnostics#lighthouse",
          },
        ],
      },
      {
        title: "Learning",
        url: "/learning",
        icon: BookOpen,
        items: [
          {
            title: "freeCodeCamp",
            url: "/learning#freecodecamp",
          },
          {
            title: "Codevolution",
            url: "/learning#codevolution",
          },
          {
            title: "Theo - t3.gg",
            url: "/learning#theo",
          },
          {
            title: "Jack Herrington",
            url: "/learning#jack-herrington",
          },
        ],
      },
    ],
  },
  navCreative: {
    label: "Creative",
    items: [
      {
        title: "Design",
        url: "/design",
        icon: Lightbulb,
        items: [
          {
            title: "Excalidraw",
            url: "/design#excalidraw",
          },
          {
            title: "Figma",
            url: "/design#figma",
          },
          {
            title: "Canva",
            url: "/design#canva",
          },
          {
            title: "PureRef",
            url: "/design#pureref",
          },
        ],
      },
      {
        title: "Graphic Design",
        url: "/graphic-design",
        icon: FileImage,
        items: [
          {
            title: "GIMP",
            url: "/graphic-design#gimp",
          },
          {
            title: "Adobe Photoshop",
            url: "/graphic-design#adobe-photoshop",
          },
        ],
      },
      {
        title: "Vector Graphics",
        url: "/vector-graphics",
        icon: PenTool,
        items: [
          {
            title: "Adobe Illustrator",
            url: "/vector-graphics#adobe-illustrator",
          },
          {
            title: "Inkscape",
            url: "/vector-graphics#inkscape",
          },
        ],
      },
      {
        title: "Video Editing",
        url: "/video-editing",
        icon: Clapperboard,
        items: [
          {
            title: "DaVinci Resolve",
            url: "/video-editing#davinci-resolve",
          },
        ],
      },
    ],
  },
};
