import {
  Activity,
  ArrowLeftRight,
  BookOpen,
  BookType,
  ChartLine,
  Check,
  Clapperboard,
  Code,
  Database,
  DatabaseZap,
  DollarSign,
  FileImage,
  FileUp,
  GitBranch,
  KeyRound,
  Layers,
  LayoutGrid,
  Lightbulb,
  Mail,
  MonitorCog,
  Paintbrush,
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
            hash: "visual-studio-code",
          },
          {
            title: "Cursor",
            hash: "cursor",
          },
          {
            title: "Phoenix Code",
            hash: "phoenix-code",
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
            hash: "html",
          },
          {
            title: "CSS3",
            hash: "css",
          },
          {
            title: "JavaScript (ES6+)",
            hash: "javascript",
          },
          {
            title: "TypeScript",
            hash: "typescript",
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
            hash: "vite-tanstack-router",
          },
          {
            title: "TanStack Start",
            hash: "tanstack-start",
          },
          {
            title: "Next.js",
            hash: "nextjs",
          },
          {
            title: "Payload",
            hash: "payload",
          },
          {
            title: "Fumadocs",
            hash: "fumadocs",
          },
        ],
      },
      {
        title: "State Management",
        url: "/state-management",
        icon: ArrowLeftRight,
        items: [
          {
            title: "React Defaults",
            hash: "react-defaults",
          },
          {
            title: "Zustand",
            hash: "zustand",
          },
          {
            title: "TanStack Query",
            hash: "tanstack-query",
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
            hash: "shadcn-ui",
          },
          {
            title: "Mantine",
            hash: "mantine",
          },
          {
            title: "Ant Design",
            hash: "ant-design",
          },
        ],
      },
      {
        title: "CSS Libraries",
        url: "/css-libraries",
        icon: Paintbrush,
        items: [
          {
            title: "Tailwind CSS",
            hash: "tailwind-css",
          },
          {
            title: "PostCSS",
            hash: "postcss",
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
            hash: "lucide",
          },
          {
            title: "Heroicons",
            hash: "heroicons",
          },
          {
            title: "svgl",
            hash: "svgl",
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
            hash: "postgresql",
          },
          {
            title: "MySQL",
            hash: "mysql",
          },
          {
            title: "Redis",
            hash: "redis",
          },
          {
            title: "Dexie.js",
            hash: "dexiejs",
          },
          {
            title: "localStorage",
            hash: "localstorage",
          },
          {
            title: "Google Sheets",
            hash: "google-sheets",
          },
        ],
      },
      {
        title: "Database Providers",
        url: "/database-providers",
        icon: DatabaseZap,
        items: [
          {
            title: "Neon",
            hash: "neon",
          },
          {
            title: "Supabase",
            hash: "supabase",
          },
          {
            title: "PlanetScale",
            hash: "planetscale",
          },
          {
            title: "Convex",
            hash: "convex",
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
            hash: "drizzle-orm",
          },
          {
            title: "Prisma ORM",
            hash: "prisma",
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
            hash: "better-auth",
          },
          {
            title: "Clerk",
            hash: "clerk",
          },
        ],
      },
      {
        title: "Payments",
        url: "/payments",
        icon: DollarSign,
        items: [
          {
            title: "Polar",
            hash: "polar",
          },
          {
            title: "Stripe",
            hash: "stripe",
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
            hash: "resend",
          },
        ],
      },
      {
        title: "File Storage",
        url: "/file-storage",
        icon: FileUp,
        items: [
          {
            title: "UploadThing",
            hash: "uploadthing",
          },
        ],
      },
      {
        title: "Environment",
        url: "/environment",
        icon: MonitorCog,
        items: [
          {
            title: "Node.js",
            hash: "nodejs",
          },
          {
            title: "pnpm",
            hash: "pnpm",
          },
          {
            title: "Prettier",
            hash: "prettier",
          },
          {
            title: "ESLint",
            hash: "eslint",
          },
        ],
      },
      {
        title: "Version Control",
        url: "/version-control",
        icon: GitBranch,
        items: [
          {
            title: "Git",
            hash: "git",
          },
          {
            title: "GitHub",
            hash: "github",
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
            hash: "github-actions",
          },
          {
            title: "CodeRabbit",
            hash: "coderabbit",
          },
        ],
      },
      {
        title: "Validation",
        url: "/validation",
        icon: Check,
        items: [
          {
            title: "Zod",
            hash: "zod",
          },
          {
            title: "T3 Env",
            hash: "t3-env",
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
            hash: "cloudflare-pages",
          },
          {
            title: "Vercel",
            hash: "vercel",
          },
          {
            title: "Netlify",
            hash: "netlify",
          },
          {
            title: "Coolify",
            hash: "coolify",
          },
          {
            title: "Hetzner",
            hash: "hetzner",
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
            hash: "posthog",
          },
          {
            title: "Plausible",
            hash: "plausible",
          },
          {
            title: "Google Analytics",
            hash: "google-analytics",
          },
        ],
      },
      {
        title: "Diagnostics",
        url: "/diagnostics",
        icon: Activity,
        items: [
          {
            title: "React Scan",
            hash: "react-scan",
          },
          {
            title: "Lighthouse",
            hash: "lighthouse",
          },
          {
            title: "Sentry",
            hash: "sentry",
          },
          {
            title: "check-site-meta",
            hash: "check-site-meta",
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
            hash: "freecodecamp",
          },
          {
            title: "Frontend Mentor",
            hash: "frontend-mentor",
          },
          {
            title: "Codevolution",
            hash: "codevolution",
          },
          {
            title: "Jack Herrington",
            hash: "jack-herrington",
          },
          {
            title: "Theo - t3.gg",
            hash: "theo",
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
            hash: "excalidraw",
          },
          {
            title: "Figma",
            hash: "figma",
          },
          {
            title: "Canva",
            hash: "canva",
          },
          {
            title: "PureRef",
            hash: "pureref",
          },
          {
            title: "Image Color Picker",
            hash: "image-color-picker",
          },
          {
            title: "OKLCH Color Picker & Converter",
            hash: "oklch-color-picker-converter",
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
            hash: "gimp",
          },
          {
            title: "Adobe Photoshop",
            hash: "adobe-photoshop",
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
            hash: "adobe-illustrator",
          },
          {
            title: "Inkscape",
            hash: "inkscape",
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
            hash: "davinci-resolve",
          },
        ],
      },
    ],
  },
};
