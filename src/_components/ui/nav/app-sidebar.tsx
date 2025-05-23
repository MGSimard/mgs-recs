import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, useSidebar } from "@/_components/ui/sidebar";
import { NavMain } from "@/_components/ui/nav/nav-main";
import { NavLinks } from "@/_components/ui/nav/nav-links";
import { NavHead } from "./nav-trigger";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <NavHead>Logo</NavHead>
      <SidebarContent>
        <NavMain label={NavLinks.navWebdev.label} items={NavLinks.navWebdev.items} />
        <NavMain label={NavLinks.navCreative.label} items={NavLinks.navCreative.items} />
      </SidebarContent>
    </Sidebar>
  );
}
