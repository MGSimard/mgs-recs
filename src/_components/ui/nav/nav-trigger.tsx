import { SidebarHeader, SidebarTrigger, useSidebar } from "@/_components/ui/sidebar";

export function NavHead({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar();

  return (
    <SidebarHeader
      className={`flex gap-2 p-2 ${
        state === "collapsed" ? "items-start flex-col" : "items-center flex-row justify-between"
      }`}>
      {children}
      <SidebarTrigger className="hover:cursor-pointer shrink-0" />
    </SidebarHeader>
  );
}
