import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { createTheme, ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import globalCss from "@/_styles/global.css?url";
import mantineCss from "@mantine/core/styles.css?url";

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
      { rel: "stylesheet", href: mantineCss },
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

const theme = createTheme({
  scale: 1.6,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <HeadContent />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
          <Scripts />
        </MantineProvider>
      </body>
    </html>
  );
}
