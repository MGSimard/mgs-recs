import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/_components/ui/sidebar";

interface NavSubItemsProps {
  items: {
    title: string;
    url: string;
  }[];
}

export function NavSubItems({ items }: NavSubItemsProps) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash((location.hash || "").replace(/^#/, ""));
  }, [location.hash]);

  return (
    <>
      {items.map((subItem) => {
        const [subPathRaw, subHashRaw] = subItem.url.split("#");
        const subPath = (subPathRaw || "").replace(/\/$/, "");
        const subHash = decodeURIComponent(subHashRaw || "");
        const isActive =
          currentPath === subPath.replace(/\/$/, "") &&
          ((currentHash === "" && subHash === "") || currentHash === subHash);

        return (
          <SidebarMenuSubItem key={subItem.title}>
            <SidebarMenuSubButton asChild className="text-muted-foreground" isActive={isActive}>
              <Link to={subItem.url}>
                <span>{subItem.title}</span>
              </Link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      })}
    </>
  );
}
