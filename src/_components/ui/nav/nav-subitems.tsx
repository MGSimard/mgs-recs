import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/_components/ui/sidebar";

const normalizePath = (path: string) => path.replace(/\/$/, "");

interface NavSubItemsProps {
  items: {
    title: string;
    url: string;
  }[];
}

export function NavSubItems({ items }: NavSubItemsProps) {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash((location.hash || "").replace(/^#/, ""));
  }, [location.hash]);

  return (
    <>
      {items.map((subItem) => {
        const [subPathRaw, subHashRaw] = subItem.url.split("#");
        const subPath = normalizePath(subPathRaw || "");
        const subHash = decodeURIComponent(subHashRaw || "");
        const isActive = currentPath === subPath && ((currentHash === "" && subHash === "") || currentHash === subHash);

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
