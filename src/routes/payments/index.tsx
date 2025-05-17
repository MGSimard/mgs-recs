import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoPolar, LogoStripe } from "@/_components/Icons";

export const Route = createFileRoute("/payments/")({
  component: PagePayments,
  loader: () => ({ title: "Payments" }),
});

function PagePayments() {
  return (
    <>
      <Section
        id="stripe"
        className="bg-[oklch(0.58_0.2346_278.29)]"
        logo={<LogoStripe />}
        title="Stripe"
        links={[{ label: "Stripe", href: "https://stripe.com/" }]}
        docsLinks={[{ label: "Stripe", href: "https://docs.stripe.com/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>

      <Section
        id="polar"
        className="bg-[oklch(0.18_0_0)]"
        logo={<LogoPolar />}
        title="Polar"
        links={[{ label: "Polar", href: "https://polar.sh/" }]}
        docsLinks={[{ label: "Polar", href: "https://docs.polar.sh/" }]}
        subTitle="Lorem ipsum dolor."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        features={[]}></Section>
    </>
  );
}
