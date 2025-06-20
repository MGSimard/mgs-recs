import { Sidebar, SidebarContent } from "@/_components/ui/sidebar";
import { NavMain } from "@/_components/ui/nav/nav-main";
import { NavLinks } from "@/_components/ui/nav/nav-links";
import { NavHead } from "@/_components/ui/nav/nav-trigger";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <NavHead />
      <SidebarContent>
        <NavMain label={NavLinks.navWebdev.label} items={NavLinks.navWebdev.items} />
        <NavMain label={NavLinks.navCreative.label} items={NavLinks.navCreative.items} />
      </SidebarContent>
    </Sidebar>
  );
}
