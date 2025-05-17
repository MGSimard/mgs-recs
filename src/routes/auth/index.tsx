import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoBetterAuth, LogoClerk } from "@/_components/Icons";

export const Route = createFileRoute("/auth/")({
  component: PageAuth,
  loader: () => ({ title: "Auth" }),
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
        subTitle="Self-hosted authentication and authorization"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
      <Section
        id="clerk"
        className="bg-[oklch(0.69_0.1757_289.58)]"
        logo={<LogoClerk />}
        title="Clerk"
        links={[{ label: "Clerk", href: "https://clerk.com/" }]}
        docsLinks={[{ label: "Clerk", href: "https://clerk.com/docs" }]}
        subTitle="Managed authentication and authorization"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[""]}></Section>
    </>
  );
}
