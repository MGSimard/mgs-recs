import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Providers } from "@/_components/Providers";
import { AppSidebar } from "@/_components/ui/nav/app-sidebar";
import { SidebarInset } from "@/_components/ui/sidebar";
import { Header } from "@/_components/ui/header/Header";
import globalCss from "@/_styles/global.css?url";
import fontsCss from "@/_styles/fonts.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      { rel: "stylesheet", href: fontsCss },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Providers>
          <AppSidebar className="whitespace-nowrap" />
          <SidebarInset className="max-w-screen-xl mx-auto">
            <Header />
            <main className="flex flex-1 flex-col gap-12 p-4">{children}</main>
          </SidebarInset>
        </Providers>
        <Scripts />
      </body>
    </html>
  );
}
