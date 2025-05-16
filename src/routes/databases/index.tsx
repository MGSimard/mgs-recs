import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/databases/")({
  component: PageDatabases,
  loader: () => ({ title: "Databases" }),
});

function PageDatabases() {
  return (
    <>
      <Section
        title="PostgreSQL"
        id="postgresql"
        links={[{ label: "PostgreSQL", href: "https://www.postgresql.org/" }]}
        docsLinks={[{ label: "PostgreSQL", href: "https://www.postgresql.org/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="MySQL"
        id="mysql"
        links={[{ label: "MySQL", href: "https://www.mysql.com/" }]}
        docsLinks={[{ label: "MySQL", href: "https://dev.mysql.com/doc/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Redis"
        id="redis"
        links={[{ label: "Redis", href: "https://redis.io/" }]}
        docsLinks={[{ label: "Redis", href: "https://redis.io/docs/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="IndexedDB"
        id="indexeddb"
        docsLinks={[{ label: "IndexedDB", href: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="localStorage"
        id="localstorage"
        docsLinks={[
          { label: "localStorage", href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
        ]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Google Sheets"
        id="google-sheets"
        links={[{ label: "Google Sheets", href: "https://www.google.com/sheets/about/" }]}
        docsLinks={[{ label: "Google Sheets", href: "https://developers.google.com/sheets" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
