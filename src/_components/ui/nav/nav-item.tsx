import { ChevronRight, type LucideIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/_components/ui/collapsible";
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSub } from "@/_components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { NavSubItems } from "@/_components/ui/nav/nav-subitems";

interface NavItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive: boolean;
  isAnySubItemActive: boolean;
  setOpenMobile: (open: boolean) => void;
  items?: {
    title: string;
    url: string;
  }[];
  state: "expanded" | "collapsed";
  isMobile: boolean;
}

export function NavItem({
  title,
  url,
  icon: Icon,
  isActive,
  isAnySubItemActive,
  setOpenMobile,
  items,
  state,
  isMobile,
}: NavItemProps) {
  return (
    <Collapsible key={title} asChild defaultOpen={isActive || isAnySubItemActive} className="group/collapsible">
      <SidebarMenuItem>
        {state === "collapsed" && !isMobile ? (
          <SidebarMenuButton
            tooltip={title}
            className="hover:cursor-pointer"
            data-active={isActive || isAnySubItemActive}
            asChild>
            <Link to={url}>
              {Icon && <Icon />}
              <span>{title}</span>
            </Link>
          </SidebarMenuButton>
        ) : (
          <>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                tooltip={title}
                className="hover:cursor-pointer uppercase"
                data-active={isActive || isAnySubItemActive}>
                {Icon && <Icon />}
                <span>{title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            {items && (
              <CollapsibleContent className="rdx-collapsible">
                <SidebarMenuSub>
                  <NavSubItems items={items} setOpenMobile={setOpenMobile} />
                </SidebarMenuSub>
              </CollapsibleContent>
            )}
          </>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
}
