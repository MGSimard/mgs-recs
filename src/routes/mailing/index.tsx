import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoResend } from "@/_components/Icons";

export const Route = createFileRoute("/mailing/")({
  component: PageMailing,
  loader: () => ({ title: "Mailing" }),
});

function PageMailing() {
  return (
    <>
      <Section
        id="resend"
        className="bg-[oklch(0.120.0137_284.11)]"
        logo={<LogoResend />}
        title="Resend"
        links={[{ label: "Resend", href: "https://resend.com/" }]}
        docsLinks={[{ label: "Resend", href: "https://resend.com/docs/" }]}
        subTitle="Resend is a modern email service that provides a simple API for sending emails."
        description="Resend is a modern email service that provides a simple API for sending emails."
        features={[]}></Section>
    </>
  );
}
