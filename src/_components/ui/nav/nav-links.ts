import {
  BookOpen,
  BookType,
  Clapperboard,
  Code,
  Database,
  DollarSign,
  FileImage,
  KeyRound,
  Layers,
  PenTool,
  Server,
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
        isActive: true,
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
        ],
      },
      {
        title: "Databases",
        url: "/databases",
        icon: Database,
        items: [],
      },
      {
        title: "Auth",
        url: "/auth",
        icon: KeyRound,
        items: [],
      },
      {
        title: "Hosting",
        url: "/hosting",
        icon: Server,
        items: [],
      },
      {
        title: "Payment Gateways",
        url: "/payment-gateways",
        icon: DollarSign,
        items: [],
      },
      {
        title: "Learning",
        url: "/learning",
        icon: BookOpen,
        items: [],
      },
    ],
  },
  navCreative: {
    label: "Creative",
    items: [
      {
        title: "Design",
        url: "/design",
        icon: PenTool,
        items: [
          {
            title: "Figma",
            url: "/design#figma",
          },
          {
            title: "Canva",
            url: "/design#canva",
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
            title: "Davinci Resolve",
            url: "/video-editing#davinci-resolve",
          },
        ],
      },
    ],
  },
};
