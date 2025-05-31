import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import {
  LogoFumaDocs,
  LogoNextjs,
  LogoPayload,
  LogoTanStackStart,
  LogoUploadThing,
  LogoViteTanStack,
} from "@/_components/Icons";

export const Route = createFileRoute("/file-storage/")({
  component: PageFileStorage,
  loader: () => ({ title: "File Storage" }),
  head: () => ({ meta: [{ title: "MGS RECS - File Storage" }] }),
});

function PageFileStorage() {
  return (
    <>
      <Section
        id="uploadthing"
        className="bg-[radial-gradient(circle_at_top,oklch(0.2672_0.0283_8.16),oklch(0.2103_0.0059_285.89))]"
        logo={<LogoUploadThing />}
        title="UploadThing"
        links={[{ label: "UploadThing", href: "https://uploadthing.com/" }]}
        docsLinks={[{ label: "UploadThing", href: "https://docs.uploadthing.com/" }]}
        subTitle="Better file uploads for developers"
        description="UploadThing is the easier, safer alternative to S3. Handle uploads from button to server with a simple, secure, and typesafe experience. Built for modern frameworks and developer happiness. A good option for larger files and/or if your hosting provider charges on egress, less so if you're looking for edge caching."
        features={[
          "Good, straightforward DX",
          "End-to-end type safety",
          "Secure authentication on your server",
          "Works with Next.js, Astro, SvelteKit, Remix, TanStack, and more",
          "Intuitive dashboard for managing files",
          "Simple, transparent pricing",
          "Unlimited uploads and downloads",
          "Drop-in React components and adapters",
          "Public and private file support",
          "2GB free storage",
        ]}
        issues={[]}></Section>
    </>
  );
}
