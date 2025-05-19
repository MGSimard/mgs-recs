import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts, ErrorComponent } from "@tanstack/react-router";
import { Providers } from "@/_components/Providers";
import { AppSidebar } from "@/_components/ui/nav/app-sidebar";
import { SidebarInset } from "@/_components/ui/sidebar";
import { Header } from "@/_components/ui/header/Header";
import { PageError } from "@/_components/Error";
import { PageNotFound } from "@/_components/NotFound";
import globalCss from "@/_styles/global.css?url";
import fontsCss from "@/_styles/fonts.css?url";

export const Route = createRootRoute({
  notFoundComponent: () => <PageNotFound />,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <PageError {...props} />
      </RootDocument>
    );
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { author: "MGSimard" },
      {
        title: "MGS RECS",
      },
      { description: "MGS RECS: Collection of my recommended webdev things." },
      { name: "application-name", content: "MGS RECS" },
      { name: "apple-mobile-web-app-title", content: "MGS RECS" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "theme-color", content: "#fa4242" },
      { name: "msapplication-TileColor", content: "#fa4242" },
      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mgs-recs.pages.dev/" },
      { property: "og:title", content: "MGS RECS" },
      { property: "og:site_name", content: "MGS RECS" },
      {
        property: "og:description",
        content: "MGS RECS: Collection of my recommended webdev things.",
      },
      { property: "og:image", content: "https://mgs-recs.pages.dev/metadata/opengraph-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "600" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://mgs-recs.pages.dev/" },
      { name: "twitter:creator", content: "@MGSimard" },
      { name: "twitter:title", content: "MGS RECS" },
      {
        name: "twitter:description",
        content: "MGS RECS: Collection of my recommended webdev things.",
      },
      { name: "twitter:image", content: "https://mgs-recs.pages.dev/metadata/twitter-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      { rel: "stylesheet", href: fontsCss },
      { rel: "canonical", href: "https://mgs-recs.pages.dev/" },
      { rel: "manifest", href: "/metadata/manifest.webmanifest" },
      { rel: "shortcut icon", href: "/metadata/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/metadata/icon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/metadata/icon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/metadata/apple-icon.png" },
      { rel: "apple-touch-startup-image", href: "/metadata/apple-icon.png" },
      {
        rel: "preload",
        href: "/fonts/rajdhani/Rajdhani-Regular.woff2",
        as: "font",
        type: "font/woff2",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        href: "/fonts/rajdhani/Rajdhani-SemiBold.woff2",
        as: "font",
        type: "font/woff2",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        href: "/fonts/rajdhani/Rajdhani-Bold.woff2",
        as: "font",
        type: "font/woff2",
        fetchPriority: "high",
      },
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
