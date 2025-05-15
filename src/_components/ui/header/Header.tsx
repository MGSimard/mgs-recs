import { SidebarTrigger } from "@/_components/ui/sidebar";
import { PageH1 } from "@/_components/ui/header/PageH1";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 hover:cursor-pointer" />
        <PageH1 />
      </div>
    </header>
  );
}
