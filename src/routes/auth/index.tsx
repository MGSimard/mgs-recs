import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoBetterAuth, LogoClerk } from "@/_components/Icons";

export const Route = createFileRoute("/auth/")({
  component: PageAuth,
  loader: () => ({ title: "Auth" }),
  head: () => ({ meta: [{ title: "MGS RECS - Auth" }] }),
});

function PageAuth() {
  return (
    <>
      <Section
        id="better-auth"
        className="bg-black"
        logo={<LogoBetterAuth />}
        title="Better Auth"
        links={[{ label: "Better Auth", href: "https://www.better-auth.com/" }]}
        docsLinks={[{ label: "Better Auth", href: "https://better-auth.com/docs/" }]}
        subTitle="Own your authentication and authorization"
        description="Better Auth is a TypeScript authentication and authorization library that gives you full control without managed service limitations. It supports major frameworks, advanced features (2FA, multi-tenancy, social sign-on), and a flexible plugin system. Keep user data in your own database, avoid lock-in, and reduce boilerplate."
        features={[
          "Framework agnostic",
          "Email & password",
          "Account & session management",
          "Built-in rate limiter",
          "Automatic database management",
          "Extensive OAuth support",
          "Organization & access control",
          "Two factor authentication",
          "Plugin ecosystem",
        ]}
        issues={["Actively changing due to its infancy state"]}></Section>

      <Section
        id="clerk"
        className="bg-[oklch(0.69_0.1757_289.58)]"
        logo={<LogoClerk />}
        title="Clerk"
        links={[{ label: "Clerk", href: "https://clerk.com/" }]}
        docsLinks={[{ label: "Clerk", href: "https://clerk.com/docs" }]}
        subTitle="Managed authentication and authorization"
        description="Clerk is a complete user management and authentication platform for web and mobile applications. It provides prebuilt UI components, flexible APIs, and admin dashboards for sign-in, sign-up, user profiles, and organization management. Clerk supports advanced features like multi-factor authentication, social sign-on, enterprise SSO, and session management, all with strong security and compliance standards. With SDKs for popular frontend and backend frameworks, Clerk makes it easy to add secure, customizable authentication and user management to any stack, while letting you tailor the experience to your brand and workflow. Clerk is essentially one of best options (if not the best) for managed authentication and authorization. If you're working on your first app, I'd recommend using Clerk. After that, experiment with Better Auth and see how you like having greater control over your auth process. As a final note, Clerk will be limited to dev mode UI in production unless you're paying for your own domain."
        features={[
          "Pre-built UI components",
          "Multi-factor authentication",
          "Social & enterprise SSO",
          "Bot & abuse protection",
          "Organization management",
          "Advanced session handling",
          "SOC2 & HIPAA compliant",
          "Framework-specific SDKs",
          "Admin dashboard",
        ]}
        issues={[
          "Production mode requires your own domain",
          "Less control than solutions like Better Auth",
          "You don't 'own' your auth",
        ]}></Section>
    </>
  );
}
