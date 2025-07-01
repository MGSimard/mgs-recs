import type { LucideIcon } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "@/_components/ui/sidebar";
import { useLocation } from "@tanstack/react-router";
import { useSidebar } from "@/_components/ui/sidebar";
import { NavItem } from "./nav-item";

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
      hash: string;
    }[];
  }[];
}) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  const currentHash = location.hash.replace(/^#/, "");
  const { state, isMobile, setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const normalizedItemUrl = item.url.replace(/\/$/, "");
          const isItemActive = currentPath === normalizedItemUrl || currentPath.startsWith(normalizedItemUrl + "/");

          // Calculate if any sub-items are active
          const isAnySubItemActive =
            item.items?.some((subItem) => {
              return currentPath === normalizedItemUrl && (subItem.hash ? currentHash === subItem.hash : true);
            }) || false;

          return (
            <NavItem
              key={item.title}
              isActive={isItemActive}
              isAnySubItemActive={isAnySubItemActive}
              state={state}
              isMobile={isMobile}
              setOpenMobile={setOpenMobile}
              {...item}
            />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
