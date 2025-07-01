import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/_components/ui/sidebar";

const normalizePath = (path: string) => path.replace(/\/$/, "");

interface NavSubItemsProps {
  parentUrl: string;
  items: {
    title: string;
    hash: string;
  }[];
  setOpenMobile: (open: boolean) => void;
}

export function NavSubItems({ parentUrl, items, setOpenMobile }: NavSubItemsProps) {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash((location.hash || "").replace(/^#/, ""));
  }, [location.hash]);

  return (
    <>
      {items.map((subItem) => {
        const subPath = normalizePath(parentUrl || "");
        const subHash = subItem.hash || "";
        const isActive = currentPath === subPath && ((currentHash === "" && subHash === "") || currentHash === subHash);

        return (
          <SidebarMenuSubItem key={subItem.title}>
            <SidebarMenuSubButton asChild className="text-muted-foreground" isActive={isActive}>
              <Link to={parentUrl} hash={subHash} onClick={() => setOpenMobile(false)}>
                <span>{subItem.title}</span>
              </Link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      })}
    </>
  );
}
