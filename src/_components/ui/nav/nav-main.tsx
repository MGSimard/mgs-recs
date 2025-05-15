import { ChevronRight, type LucideIcon } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/_components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/_components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";

export function NavMain({
  label,
  items,
}: {
  label: string;
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  const currentHash = (location.hash || "").replace(/^#/, "");
  const { state, isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const normalizedItemUrl = item.url.replace(/\/$/, "");
          const isItemActive = currentPath === normalizedItemUrl || currentPath.startsWith(normalizedItemUrl + "/");

          const isAnySubItemActive =
            item.items?.some((subItem) => {
              const [subPathRaw, subHashRaw] = subItem.url.split("#");
              const subPath = (subPathRaw || "").replace(/\/$/, "");
              const subHash = subHashRaw || "";
              return currentPath === subPath && currentHash === subHash;
            }) || false;

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isItemActive || isAnySubItemActive}
              className="group/collapsible">
              <SidebarMenuItem>
                {state === "collapsed" && !isMobile ? (
                  <SidebarMenuButton
                    tooltip={item.title}
                    className="hover:cursor-pointer"
                    data-active={isItemActive || isAnySubItemActive}
                    asChild>
                    <Link to={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                ) : (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="hover:cursor-pointer"
                        data-active={isItemActive || isAnySubItemActive}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => {
                          const [subPathRaw, subHashRaw] = subItem.url.split("#");
                          const subPath = subPathRaw || "";
                          const subHash = subHashRaw || "";
                          const isSubItemActive = currentPath === subPath.replace(/\/$/, "") && currentHash === subHash;
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className="text-muted-foreground"
                                isActive={isSubItemActive}>
                                <Link to={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
