import { NavMain } from "@/_components/ui/nav/nav-main";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/_components/ui/sidebar";
import { BookOpen, BookType, Database, DollarSign, KeyRound, Layers, Server } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Frontend Languages",
      url: "/frontend-languages",
      icon: BookType,
      items: [
        {
          title: "HTML5",
          url: "/frontend-languages#html5",
        },
        {
          title: "CSS3",
          url: "/frontend-languages#css3",
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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>Logo</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
