import { NavMain } from "@/_components/ui/nav/nav-main";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/_components/ui/sidebar";
import {
  BookOpen,
  BookType,
  Brush,
  Clapperboard,
  Database,
  DollarSign,
  FileImage,
  KeyRound,
  Layers,
  PenTool,
  Server,
  Video,
} from "lucide-react";

// This is sample data.
const data = {
  navWebdev: {
    label: "Web Development",
    items: [
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
            title: "Vite",
            url: "/frameworks#vite",
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>Logo</SidebarHeader>
      <SidebarContent>
        <NavMain label={data.navWebdev.label} items={data.navWebdev.items} />
        <NavMain label={data.navCreative.label} items={data.navCreative.items} />
      </SidebarContent>
    </Sidebar>
  );
}
