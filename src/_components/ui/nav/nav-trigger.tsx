import { SidebarHeader, SidebarTrigger, useSidebar } from "@/_components/ui/sidebar";
import { Link } from "@tanstack/react-router";

export function NavHead() {
  const { state } = useSidebar();

  return (
    <SidebarHeader
      className={`flex gap-2 p-2 items-center justify-between ${state === "collapsed" ? "flex-col" : "flex-row px-4"}`}>
      <Link to="/" className="shrink-0">
        <img src="/metadata/icon.svg" alt="Logo" className="overflow-hidden h-6 w-6" />
      </Link>
      <SidebarTrigger className="hover:cursor-pointer shrink-0" />
    </SidebarHeader>
  );
}
