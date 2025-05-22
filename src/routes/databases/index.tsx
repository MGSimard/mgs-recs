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
        subTitle="Powerful open source relational database."
        description="A highly-regarded, open source relational database system known for its robustness, feature richness, and strong adherence to SQL standards. It excels at handling complex queries, diverse data types including excellent JSON/JSONB support, and offers extensive customization through custom types and a powerful extension system. PostgreSQL is often preferred for applications requiring data integrity, advanced SQL features (like window functions and Common Table Expressions), and the flexibility to manage complex data structures. While its initial setup can be slightly more involved than MySQL, its long-term maintainability and advanced capabilities make it a strong choice for demanding workloads. Services like Neon offer accessible free tiers for exploration."
        features={[
          "Advanced SQL & standards conformance",
          "Robust data integrity (ACID, MVCC, constraints)",
          "Highly extensible (custom types, extensions, languages)",
          "Excellent JSON/JSONB & complex data type support",
          "Sophisticated indexing & query optimization",
          "High reliability & disaster recovery",
          "Scalable for large data & users",
          "Advanced security features",
          "Internationalization & full-text search",
        ]}
        issues={[]}></Section>

      <Section
        id="mysql"
        className="bg-[oklch(0.41_0.078072_224.3437)]"
        logo={<LogoMySQL />}
        title="MySQL"
        links={[{ label: "MySQL", href: "https://www.mysql.com/" }]}
        docsLinks={[{ label: "MySQL", href: "https://dev.mysql.com/doc/" }]}
        subTitle="Widely-used open source SQL database."
        description="A widely popular, open source relational database system known for its ease of use, speed, and widespread adoption, particularly in web applications. It's often praised for its performance on read-heavy workloads and its straightforward setup process. MySQL benefits from a vast community, extensive documentation, and broad support from hosting providers. While historically less strict on SQL standards and extensibility compared to PostgreSQL, it has significantly evolved. MySQL's replication is generally considered simpler to configure for common setups, and it often delivers better performance for straightforward, high-volume read operations. At the end the day I'd prioritize PostgreSQL if possible, but SQL is still a decent option."
        features={["Fast for read-heavy workloads", "Simpler than PostgreSQL"]}
        issues={[
          "Oracle",
          "Less extensive than other RDBMS",
          "Complex replication in advanced configurations",
        ]}></Section>

      <Section
        id="redis"
        className="bg-[oklch(0.66_0.2246_28.55)]"
        logo={<LogoRedis />}
        title="Redis"
        links={[{ label: "Redis", href: "https://redis.io/" }]}
        docsLinks={[{ label: "Redis", href: "https://redis.io/docs/" }]}
        subTitle="In-memory data store for fast caching."
        description="A source-available, in-memory data structure store often used as a high-performance database, cache, or message broker. By storing data in RAM, Redis offers incredibly fast read and write speeds, making it ideal for use cases requiring low latency and high throughput. It supports a wide range of data structures beyond simple key-value pairs, including lists, sets, sorted sets, hashes, and streams, enabling diverse applications like caching, session management, real-time analytics, and message queues. While primarily in-memory, Redis offers persistence options for data durability."
        features={[
          "Fast in-memory reads/writes",
          "Versatile data structures",
          "Ideal for caching, sessions, queues, rate limiting & more",
          "Messaging (pub/sub, streams)",
        ]}
        issues={[
          "Providers usually delete inactive databases",
          "Data size limited by RAM",
          "Complex persistence impacts performance",
        ]}></Section>

      <Section
        id="dexiejs"
        className="bg-[oklch(0.25_0_0)]"
        logo={<LogoDexieJs />}
        title="Dexie.js"
        links={[{ label: "Dexie.js", href: "https://dexie.org/" }]}
        docsLinks={[{ label: "Dexie.js", href: "https://dexie.org/docs/Tutorial/Getting-started" }]}
        subTitle="Developer-friendly IndexedDB wrapper."
        description="A popular, open source library that provides a developer-friendly wrapper around the browser's native IndexedDB API. It simplifies working with IndexedDB, a low-level API for client-side structured data storage, by offering a more convenient and Promise-based interface. Dexie.js is excellent for building web applications that require robust offline capabilities, local storage of complex user data, or synchronized data across multiple tabs or windows, abstracting away the complexities of direct IndexedDB usage."
        features={[
          "Simplifies IndexedDB",
          "Promise-based (asynchronous)",
          "Good for local-first apps",
          "Sync across tabs/windows",
        ]}
        issues={["IndexedDB on its own has terrible DX"]}></Section>

      <Section
        id="localstorage"
        className="bg-[oklch(0.25_0_0)]"
        logo={<LogoLocalStorage />}
        title="localStorage"
        docsLinks={[
          { label: "localStorage", href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
        ]}
        subTitle="Simple browser key-value storage."
        description="A simple, built-in browser Web Storage API for storing small amounts of key-value data persistently within the user's browser. Data stored has no expiration (until cleared) and is accessible across windows from the same origin. However, it's synchronous, blocking the main thread; can only store strings, requiring manual encoding for complex data and versioning; has limited capacity (typically 5-10 MB); and is unavailable within Web Workers. Due to these limitations, it's best suited for small, non-sensitive data like user preferences or session info, rather than large or complex datasets where IndexedDB is a better fit."
        features={["Synchronous key-value storage", "Persistent across sessions", "Simple API"]}
        issues={[
          "Synchronous (can block main thread)",
          "Limited storage capacity",
          "Unavailable in Web Workers",
          "Only stores strings",
        ]}></Section>

      <Section
        id="google-sheets"
        className="bg-[oklch(0.61_0.1507_154.1)]"
        logo={<LogoGoogleSheets />}
        title="Google Sheets"
        links={[{ label: "Google Sheets", href: "https://www.google.com/sheets/about/" }]}
        docsLinks={[{ label: "Google Sheets", href: "https://developers.google.com/sheets" }]}
        subTitle="Cloud-based spreadsheet as a database."
        description="Cloud spreadsheet for simple, collaborative data management for non-sensitive data. Easy to use and share. Can act as a basic data source for apps by integrating with services like SheetDB.io to create callable JSON APIs. Used this method to store & display ~800 Rise of Kingdoms players' stats in a custom table, since Sheets iframes aren't very practical or nice to look at. Only recommended for read-only, changes reflected instantly, inputs done manually orthrough Google Forms."
        features={["Collaborative cloud spreadsheet", "Easy API integration", "Good for simple, non-sensitive data"]}
        issues={[
          "Not designed as a traditional database",
          "Limited data types & relationships",
          "Security & privacy concerns",
          "Limited scalability",
        ]}></Section>
    </>
  );
}
