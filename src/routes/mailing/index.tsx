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
        subTitle="Email delivery platform for developers."
        description="Resend is an email delivery platform built for developers, focused on making it easy to send transactional and marketing emails that reach inboxes instead of spam folders. With a simple API, SDKs for popular languages, and a modern dashboard, Resend lets you integrate email sending in minutes. Features include proactive blocklist tracking, managed dedicated IPs, dynamic suppression lists, and detailed analytics. You can build emails visually or with React components using their open source library, react-email. Resend also offers robust contact management, modular webhooks, and tools to monitor and protect your domain reputation, all designed to provide a reliable and developer-friendly email experience."
        features={[
          "Powerful and easy-to-use Email API",
          "SDKs for popular programming languages",
          "Detailed logs and real-time observability",
          "Flexible endpoints for attachments, scheduling, and batch emails",
          "Reliable SMTP service with quick integration",
          "Secure and compliant with GDPR and SOC 2",
          "Contact management and audience segmentation",
          "Visual email builder and WYSIWYG editor",
          "Comprehensive analytics and deliverability insights",
        ]}
        issues={[]}></Section>
    </>
  );
}
