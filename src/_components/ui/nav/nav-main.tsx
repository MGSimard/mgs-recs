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
  const { state, isMobile } = useSidebar();
  const currentPath = location.pathname.replace(/\/$/, "");
  const currentHash = (location.hash || "").replace(/^#/, "");

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const normalizedItemUrl = item.url.replace(/\/$/, "");
          // Collapsed: highlight group if any subitem or group matches
          const isAnySubItemActive =
            item.items?.some((subItem) => {
              const [subPathRaw, subHashRaw] = subItem.url.split("#");
              const subPath = subPathRaw || "";
              const subHash = subHashRaw || "";
              return currentPath === subPath.replace(/\/$/, "") && currentHash === subHash;
            }) ?? false;
          const isItemActiveCollapsed =
            currentPath === normalizedItemUrl || currentPath.startsWith(normalizedItemUrl + "/") || isAnySubItemActive;
          // Expanded: highlight group only if exact match (no hash, no child)
          const isItemActiveExpanded = currentPath === normalizedItemUrl && !currentHash;
          return (
            <Collapsible key={item.title} asChild defaultOpen={isItemActiveCollapsed} className="group/collapsible">
              <SidebarMenuItem>
                {state === "collapsed" && !isMobile ? (
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="hover:cursor-pointer"
                    isActive={isItemActiveCollapsed}>
                    <Link to={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                ) : (
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="hover:cursor-pointer"
                      isActive={isItemActiveExpanded}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                )}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      // Split subItem.url into path and hash
                      const [subPathRaw, subHashRaw] = subItem.url.split("#");
                      const subPath = subPathRaw || "";
                      const subHash = subHashRaw || "";
                      // isActive if path matches and hash matches (or both have no hash)
                      const isSubItemActive = currentPath === subPath.replace(/\/$/, "") && currentHash === subHash;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className="text-muted-foreground " isActive={isSubItemActive}>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
