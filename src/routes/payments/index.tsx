import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/payments/")({
  component: PagePayments,
  loader: () => ({ title: "Payments" }),
});

function PagePayments() {
  return (
    <>
      <Section
        title="Stripe"
        id="stripe"
        links={[{ label: "Stripe", href: "https://stripe.com/" }]}
        docsLinks={[{ label: "Stripe", href: "https://docs.stripe.com/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
      <Section
        title="Polar"
        id="polar"
        links={[{ label: "Polar", href: "https://polar.sh/" }]}
        docsLinks={[{ label: "Polar", href: "https://docs.polar.sh/" }]}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </Section>
    </>
  );
}
