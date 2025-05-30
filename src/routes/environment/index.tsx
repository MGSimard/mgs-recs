import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";

export const Route = createFileRoute("/environment/")({
  component: PageEnvironment,
  loader: () => ({ title: "Environment" }),
});

function PageEnvironment() {
  return (
    <>
      <Section
        id="nodejs"
        className=""
        logo=""
        title=""
        links={[]}
        docsLinks={[]}
        subTitle=""
        description=""
        features={[]}
        issues={[]}></Section>

      <Section
        id="pnpm"
        className=""
        logo=""
        title=""
        links={[]}
        docsLinks={[]}
        subTitle=""
        description=""
        features={[]}
        issues={[]}></Section>

      <Section
        id="prettier"
        className=""
        logo=""
        title=""
        links={[]}
        docsLinks={[]}
        subTitle=""
        description=""
        features={[]}
        issues={[]}></Section>

      <Section
        id="eslint"
        className=""
        logo=""
        title=""
        links={[]}
        docsLinks={[]}
        subTitle=""
        description=""
        features={[]}
        issues={[]}></Section>
    </>
  );
}
