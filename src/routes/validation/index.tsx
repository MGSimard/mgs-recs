import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoT3Env, LogoZod } from "@/_components/Icons";

export const Route = createFileRoute("/validation/")({
  component: PageValidation,
  loader: () => ({ title: "Validation" }),
  head: () => ({ meta: [{ title: "MGS RECS - Validation" }] }),
});

function PageValidation() {
  return (
    <>
      <Section
        id="zod"
        className="bg-[linear-gradient(to_top,oklch(0.5823_0.2275_265.82),oklch(0.7128_0.1572_248.39))]"
        logo={<LogoZod />}
        title="Zod"
        links={[{ label: "Zod", href: "https://zod.dev/" }]}
        subTitle="TypeScript-first schema validation with static type inference."
        description="Zod is a TypeScript-first schema validation library that enables you to define and validate data structures with static type inference. With zero external dependencies and a tiny core bundle, Zod works seamlessly in both Node.js and all modern browsers, making it an excellent choice for validating data on the backend or enforcing input constraints in frontend applications. Its concise, immutable API lets you build schemas for everything from simple strings to complex nested objects, ensuring your data is both validated and type-safe. Zod also supports built-in JSON Schema conversion and has a growing ecosystem, making it a popular choice for robust, type-safe validation in TypeScript and JavaScript projects."
        features={[
          "TypeScript-first schema validation",
          "Static type inference from schemas",
          "Zero external dependencies, tiny bundle size",
          "Immutable, concise API for defining schemas",
          "Works in Node.js and all modern browsers",
          "Built-in JSON Schema conversion",
          "Extensive ecosystem and integrations",
        ]}
        issues={[]}></Section>

      <Section
        id="t3-env"
        className="bg-[linear-gradient(oklch(0.2795_0.1569_289.93),oklch(0.2072_0.0454_277.9))]"
        logo={<LogoT3Env />}
        title="T3 Env"
        links={[{ label: "T3 Env", href: "https://env.t3.gg/" }]}
        docsLinks={[{ label: "T3 Env", href: "https://env.t3.gg/docs/introduction/" }]}
        subTitle="Type-safe environment variables."
        description="T3 Env is a framework-agnostic library for validating and transforming environment variables using Zod. It lets you define a schema for your environment variables, supports transforms and default values, and works safely across both server and client environments. T3 Env helps prevent configuration errors and makes it easier to manage environment variables in TypeScript projects."
        features={[
          "Type-safe environment variable validation",
          "Supports transforms and default values",
          "Seamless server and client schema separation",
          "Framework-agnostic with presets for Next.js, Nuxt, and more",
          "Runtime and build-time validation",
          "Auto-completion and static type inference",
          "Extensible with custom presets and advanced options",
        ]}
        issues={[]}></Section>
    </>
  );
}
