import { NavMain } from "@/_components/ui/nav/nav-main";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/_components/ui/sidebar";
import { BookOpen, BookType, Database, DollarSign, KeyRound, Layers, Server } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Frontend Languages",
      url: "#",
      icon: BookType,
      items: [
        {
          title: "HTML5",
          url: "#",
        },
        {
          title: "CSS3",
          url: "#",
        },
        {
          title: "JavaScript (ES6+)",
          url: "#",
        },
        {
          title: "TypeScript",
          url: "#",
        },
      ],
    },
    {
      title: "Frameworks",
      url: "#",
      icon: Layers,
      isActive: true,
      items: [
        {
          title: "Vite",
          url: "#",
        },
        {
          title: "TanStack Start",
          url: "#",
        },
        {
          title: "Next.js",
          url: "#",
        },
      ],
    },
    {
      title: "Databases",
      url: "#",
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
      url: "#",
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
