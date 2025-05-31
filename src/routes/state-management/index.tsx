import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoReact, LogoTanStackStart as LogoTanStackQuery, LogoZustand } from "@/_components/Icons";

export const Route = createFileRoute("/state-management/")({
  component: PageStateManagement,
  loader: () => ({ title: "State Management" }),
  head: () => ({ meta: [{ title: "MGS RECS - State Management" }] }),
});

function PageStateManagement() {
  return (
    <>
      <Section
        id="react-defaults"
        className="bg-[oklch(0.7665_0.1039_214.63)]"
        logo={<LogoReact />}
        title="React Defaults"
        links={[]}
        docsLinks={[{ label: "React State Management", href: "https://react.dev/learn/managing-state" }]}
        subTitle="Simple state management"
        description="React's built-in state management uses hooks like useState, useReducer, and useContext to manage local and shared state. State is typically local to a component, but can be lifted up or shared via context. For centralized state management, or more complex global state management, it's generally advised to use a state management library like Zustand."
        features={[
          "Component-local state with useState",
          "Share state by lifting it up to common parents",
          "Manage larger state objects with useReducer",
          "Share data deeply with useContext and createContext",
          "No external dependencies required",
        ]}
        issues={["States can get overly fragmented and messy in more complex apps"]}></Section>

      <Section
        id="zustand"
        className="bg-[oklch(0.3679_0.0131_67.4)]"
        logo={<LogoZustand />}
        title="Zustand"
        links={[{ label: "Zustand Demo", href: "https://zustand-demo.pmnd.rs/" }]}
        docsLinks={[
          { label: "Zustand", href: "https://zustand.docs.pmnd.rs/getting-started/introduction/" },
          { label: "Zustand GitHub", href: "https://github.com/pmndrs/zustand" },
        ]}
        subTitle="Small, fast, and scalable state management"
        description="Zustand is a minimalistic, fast, and scalable state management library for React. It provides a comfy, hook-based API with no need for providers or boilerplate. Zustand is designed to be explicit and flux-like, but avoids common pitfalls like context loss, zombie children, and React concurrency issues. Stores are easy to create and can hold any kind of state, from primitives to objects and functions. Middleware support enables features like persistence, devtools, and immutable updates."
        features={[
          "Hook-based API for store creation and usage",
          "No provider needed—use stores anywhere",
          "Minimal boilerplate for state and actions",
          "Selective subscriptions for efficient re-renders",
          "Middleware support: persist, immer, devtools, redux, and more",
          "TypeScript support with full type inference",
          "Works with client and server components",
          "Scales from small to large apps",
        ]}
        issues={["Requires tweaking & context use for SSR/RSCs"]}></Section>

      <Section
        id="tanstack-query"
        className="bg-[linear-gradient(90deg,oklch(0.6386_0.2063_26.04),oklch(0.7686_0.1647_70.08))]"
        logo={<LogoTanStackQuery />}
        title="TanStack Query"
        links={[{ label: "TanStack Query", href: "https://tanstack.com/query/latest/" }]}
        docsLinks={[
          { label: "TanStack Query", href: "https://tanstack.com/query/latest/docs/framework/react/overview/" },
        ]}
        subTitle="State management & data fetching."
        description="TanStack Query (formerly React Query) is the missing data fetching and server state management library for modern web apps. It makes fetching, caching, synchronizing, and updating remote data in your applications simple and automatic. With built-in caching, background updates, and out-of-the-box support for mutations, TanStack Query helps you write less code, avoid async-spaghetti, and deliver a faster, more responsive user experience. Without its client-side data fetching pattern, you'll often just end up implementing a weaker version of TanStack Query. More often than not, the answer is 'Just fucking use TanStack Query'."
        features={[
          "Declarative, automatic data fetching and caching",
          "Background updates and stale data management",
          "Built-in support for mutations and optimistic updates",
          "Devtools for debugging and visualization",
          "Pagination, infinite scroll, and dependent queries",
          "Auto refetching on window focus or network reconnect",
          "Request deduplication and cancellation",
          "Offline and SSR support",
          "TypeScript-first, framework-agnostic design",
          "Extensible and configurable for any use case",
        ]}
        issues={[
          "Not an issue, just a common mistake: Remember to throw your own HTTP errors (!res.ok) when using fetch within queries so the error handling can catch them",
        ]}></Section>
    </>
  );
}
