import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { a0 as LogoPostgreSQL, S as Section, a1 as LogoMySQL, a2 as LogoRedis, a3 as LogoDexieJs, a4 as LogoLocalStorage, a5 as LogoGoogleSheets } from './Icons-CuUqCmYQ.mjs';
import '@radix-ui/react-hover-card';
import './ssr.mjs';
import '@tanstack/react-router';
import 'next-themes';
import 'react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-collapsible';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function PageDatabases() {
  const $ = c(23);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(LogoPostgreSQL, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [{
      label: "PostgreSQL",
      href: "https://www.postgresql.org/"
    }];
    t2 = [{
      label: "PostgreSQL",
      href: "https://www.postgresql.org/docs/"
    }];
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Section, { id: "postgresql", className: "bg-[oklch(0.5_0.0875_245.25)]", logo: t0, title: "PostgreSQL", links: t1, docsLinks: t2, subTitle: "Powerful open source relational database.", description: "A highly-regarded, open source relational database system known for its robustness, feature richness, and strong adherence to SQL standards. It excels at handling complex queries, diverse data types including excellent JSON/JSONB support, and offers extensive customization through custom types and a powerful extension system. PostgreSQL is often preferred for applications requiring data integrity, advanced SQL features (like window functions and Common Table Expressions), and the flexibility to manage complex data structures. While its initial setup can be slightly more involved than MySQL, its long-term maintainability and advanced capabilities make it a strong choice for demanding workloads. Services like Neon offer accessible free tiers for exploration.", features: ["Advanced SQL & standards conformance", "Robust data integrity (ACID, MVCC, constraints)", "Highly extensible (custom types, extensions, languages)", "Excellent JSON/JSONB & complex data type support", "Sophisticated indexing & query optimization", "High reliability & disaster recovery", "Scalable for large data & users", "Advanced security features", "Internationalization & full-text search"], issues: [] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(LogoMySQL, {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  let t6;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = [{
      label: "MySQL",
      href: "https://www.mysql.com/"
    }];
    t6 = [{
      label: "MySQL",
      href: "https://dev.mysql.com/doc/"
    }];
    $[5] = t5;
    $[6] = t6;
  } else {
    t5 = $[5];
    t6 = $[6];
  }
  let t7;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Section, { id: "mysql", className: "bg-[oklch(0.41_0.078072_224.3437)]", logo: t4, title: "MySQL", links: t5, docsLinks: t6, subTitle: "Widely-used open source SQL database.", description: "A widely popular, open source relational database system known for its ease of use, speed, and widespread adoption, particularly in web applications. It's often praised for its performance on read-heavy workloads and its straightforward setup process. MySQL benefits from a vast community, extensive documentation, and broad support from hosting providers. While historically less strict on SQL standards and extensibility compared to PostgreSQL, it has significantly evolved. MySQL's replication is generally considered simpler to configure for common setups, and it often delivers better performance for straightforward, high-volume read operations. At the end the day I'd prioritize PostgreSQL if possible, but SQL is still a decent option.", features: ["Fast for read-heavy workloads", "Simpler than PostgreSQL"], issues: ["Oracle", "Less extensive than other RDBMS", "Complex replication in advanced configurations"] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(LogoRedis, {});
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = [{
      label: "Redis",
      href: "https://redis.io/"
    }];
    t10 = [{
      label: "Redis",
      href: "https://redis.io/docs/"
    }];
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(Section, { id: "redis", className: "bg-[oklch(0.66_0.2246_28.55)]", logo: t8, title: "Redis", links: t9, docsLinks: t10, subTitle: "In-memory data store for fast caching.", description: "A source-available, in-memory data structure store often used as a high-performance database, cache, or message broker. By storing data in RAM, Redis offers incredibly fast read and write speeds, making it ideal for use cases requiring low latency and high throughput. It supports a wide range of data structures beyond simple key-value pairs, including lists, sets, sorted sets, hashes, and streams, enabling diverse applications like caching, session management, real-time analytics, and message queues. While primarily in-memory, Redis offers persistence options for data durability.", features: ["Fast in-memory reads/writes", "Versatile data structures", "Ideal for caching, sessions, queues, rate limiting & more", "Messaging (pub/sub, streams)"], issues: ["Providers usually delete inactive databases", "Data size limited by RAM", "Complex persistence impacts performance"] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  let t12;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(LogoDexieJs, {});
    $[12] = t12;
  } else {
    t12 = $[12];
  }
  let t13;
  let t14;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = [{
      label: "Dexie.js",
      href: "https://dexie.org/"
    }];
    t14 = [{
      label: "Dexie.js",
      href: "https://dexie.org/docs/Tutorial/Getting-started"
    }];
    $[13] = t13;
    $[14] = t14;
  } else {
    t13 = $[13];
    t14 = $[14];
  }
  let t15;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(Section, { id: "dexiejs", className: "bg-[oklch(0.25_0_0)]", logo: t12, title: "Dexie.js", links: t13, docsLinks: t14, subTitle: "Developer-friendly IndexedDB wrapper.", description: "A popular, open source library that provides a developer-friendly wrapper around the browser's native IndexedDB API. It simplifies working with IndexedDB, a low-level API for client-side structured data storage, by offering a more convenient and Promise-based interface. Dexie.js is excellent for building web applications that require robust offline capabilities, local storage of complex user data, or synchronized data across multiple tabs or windows, abstracting away the complexities of direct IndexedDB usage.", features: ["Simplifies IndexedDB", "Promise-based (asynchronous)", "Good for local-first apps", "Sync across tabs/windows"], issues: ["IndexedDB on its own has terrible DX"] });
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  let t16;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsx(LogoLocalStorage, {});
    $[16] = t16;
  } else {
    t16 = $[16];
  }
  let t17;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = [{
      label: "localStorage",
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    }];
    $[17] = t17;
  } else {
    t17 = $[17];
  }
  let t18;
  if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsx(Section, { id: "localstorage", className: "bg-[oklch(0.25_0_0)]", logo: t16, title: "localStorage", docsLinks: t17, subTitle: "Simple browser key-value storage.", description: "A simple, built-in browser Web Storage API for storing small amounts of key-value data persistently within the user's browser. Data stored has no expiration (until cleared) and is accessible across windows from the same origin. However, it's synchronous, blocking the main thread; can only store strings, requiring manual encoding for complex data and versioning; has limited capacity (typically 5-10 MB); and is unavailable within Web Workers. Due to these limitations, it's best suited for small, non-sensitive data like user preferences or session info, rather than large or complex datasets where IndexedDB is a better fit.", features: ["Synchronous key-value storage", "Persistent across sessions", "Simple API"], issues: ["Synchronous (can block main thread)", "Limited storage capacity", "Unavailable in Web Workers", "Only stores strings"] });
    $[18] = t18;
  } else {
    t18 = $[18];
  }
  let t19;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsx(LogoGoogleSheets, {});
    $[19] = t19;
  } else {
    t19 = $[19];
  }
  let t20;
  let t21;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = [{
      label: "Google Sheets",
      href: "https://www.google.com/sheets/about/"
    }];
    t21 = [{
      label: "Google Sheets",
      href: "https://developers.google.com/sheets"
    }];
    $[20] = t20;
    $[21] = t21;
  } else {
    t20 = $[20];
    t21 = $[21];
  }
  let t22;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t3,
      t7,
      t11,
      t15,
      t18,
      /* @__PURE__ */ jsx(Section, { id: "google-sheets", className: "bg-[oklch(0.61_0.1507_154.1)]", logo: t19, title: "Google Sheets", links: t20, docsLinks: t21, subTitle: "Cloud-based spreadsheet as a database.", description: "Cloud spreadsheet for simple, collaborative data management for non-sensitive data. Easy to use and share. Can act as a basic data source for apps by integrating with services like SheetDB.io to create callable JSON APIs. Used this method to store & display ~800 Rise of Kingdoms players' stats in a custom table, since Google Sheets iframes aren't very practical or nice to look at. Only recommended for read-only, changes reflected instantly, inputs done manually orthrough Google Forms.", features: ["Good for simple, non-sensitive data", "Collaborative cloud spreadsheet", "Easy API integration", "Integration with other Google services (i.e. Looker Studio)"], issues: ["Not designed as a traditional database", "Limited data types & relationships", "Security & privacy concerns", "Limited scalability"] })
    ] });
    $[22] = t22;
  } else {
    t22 = $[22];
  }
  return t22;
};

export { SplitComponent as component };
//# sourceMappingURL=index-Z23DeAI_.mjs.map
