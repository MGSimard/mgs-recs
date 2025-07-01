import { PageH1 } from "@/_components/ui/header/PageH1";

export function Header() {
  return (
    <header className="flex h-12 shrink-0 justify-center items-center gap-2 px-8 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <PageH1 />
    </header>
  );
}
