import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import {
  LogoDexieJs,
  LogoGoogleSheets,
  LogoLocalStorage,
  LogoMySQL,
  LogoPostgreSQL,
  LogoRedis,
} from "@/_components/Icons";

export const Route = createFileRoute("/databases/")({
  component: PageDatabases,
  loader: () => ({ title: "Databases" }),
});

function PageDatabases() {
  return (
    <>
      <Section
        id="postgresql"
        className="bg-[oklch(0.5_0.0875_245.25)]"
        logo={<LogoPostgreSQL />}
        title="PostgreSQL"
        links={[{ label: "PostgreSQL", href: "https://www.postgresql.org/" }]}
        docsLinks={[{ label: "PostgreSQL", href: "https://www.postgresql.org/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="mysql"
        className="bg-[oklch(0.41_0.078072_224.3437)]"
        logo={<LogoMySQL />}
        title="MySQL"
        links={[{ label: "MySQL", href: "https://www.mysql.com/" }]}
        docsLinks={[{ label: "MySQL", href: "https://dev.mysql.com/doc/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="redis"
        className="bg-[oklch(0.66_0.2246_28.55)]"
        logo={<LogoRedis />}
        title="Redis"
        links={[{ label: "Redis", href: "https://redis.io/" }]}
        docsLinks={[{ label: "Redis", href: "https://redis.io/docs/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="dexiejs"
        className="bg-[oklch(0.25_0_0)]"
        logo={<LogoDexieJs />}
        title="Dexie.js"
        links={[{ label: "Dexie.js", href: "https://dexie.org/" }]}
        docsLinks={[{ label: "Dexie.js", href: "https://dexie.org/docs/Tutorial/Getting-started" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="localstorage"
        className="bg-[oklch(0.25_0_0)]"
        logo={<LogoLocalStorage />}
        title="localStorage"
        docsLinks={[
          { label: "localStorage", href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
        ]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>

      <Section
        id="google-sheets"
        className="bg-[oklch(0.61_0.1507_154.1)]"
        logo={<LogoGoogleSheets />}
        title="Google Sheets"
        links={[{ label: "Google Sheets", href: "https://www.google.com/sheets/about/" }]}
        docsLinks={[{ label: "Google Sheets", href: "https://developers.google.com/sheets" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
