import { SidebarTrigger, useSidebar } from "@/_components/ui/sidebar";

export function NavMobileTrigger() {
  const { state, isMobile } = useSidebar();

  const mobileAndCollapsed = isMobile && state;

  return mobileAndCollapsed ? <SidebarTrigger className="hover:cursor-pointer fixed top-2 left-2 z-50" /> : null;
}
