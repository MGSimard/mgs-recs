import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoFreecodecamp } from "@/_components/Icons";

export const Route = createFileRoute("/learning/")({
  component: PageLearning,
  loader: () => ({ title: "Learning" }),
});

function PageLearning() {
  return (
    <>
      <Section
        id="freecodecamp"
        className="bg-[oklch(0.16_0.0509_279.14)]"
        logo={<LogoFreecodecamp />}
        title="freeCodeCamp"
        links={[{ label: "freeCodeCamp", href: "https://www.freecodecamp.org/" }]}
        subTitle="A free, all-in-one, project-based development curriculum."
        description="freeCodeCamp is a massive, donor-supported nonprofit that helps people learn to code for free. Their comprehensive, self-paced curriculum covers web development, data science, Python, JavaScript, databases, and more, with hands-on projects and industry-recognized certifications. The platform uses a test-based approach with a built-in IDE in the browser, making it interactive and fun to progress through challenges. This is often more approachable than alternatives like The Odin Project, which can be a bit more complex. The community is large and supportive, and thousands of graduates have landed jobs in tech. Note: The React curriculum is very outdated (pre-hooks era). I still recommend learning the basics needed to complete it, even if only to understand legacy class-based code and appreciate how modern React has evolved."
        features={[]}
        issues={[]}></Section>

      <Section
        id="codevolution"
        className="bg-black"
        logo={<img className="object-cover rounded-full" src="/assets/brands/codevolution.webp" alt="" />}
        title="Codevolution"
        links={[{ label: "Codevolution (Youtube)", href: "https://www.youtube.com/codevolution/" }]}
        subTitle="Clear, practical tutorials for modern web development."
        description="Codevolution, also known as Vishwas, is a YouTube channel dedicated to simplifying web and mobile development for beginners and intermediate learners. The channel is best known for its clear, step-by-step tutorials on React, JavaScript, TypeScript, and other modern frontend technologies. Lessons are hands-on and project-based, making complex topics approachable and practical for real-world use. His series are separated in short episodic chunks, making it easier to follow along and understand the concepts. Bar none the best beginner to intermediate youtube resource I've looked at."
        features={[]}
        issues={[]}></Section>

      <Section
        id="theo"
        className="bg-[radial-gradient(oklch(0.36_0.0586_304.5),oklch(0.33_0.0542_303.48))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/theo.webp" alt="" />}
        title="Theo - t3.gg"
        links={[{ label: "t3dotgg (Youtube)", href: "https://www.youtube.com/@t3dotgg" }]}
        subTitle="Tech insights and intermediate full-stack tutorials."
        description="Theo (t3dotgg) is a YouTube creator known for his engaging commentary on the latest happenings in tech and software development. Alongside his takes on industry trends, he occasionally produces in-depth, mid to advanced, 0-to-production full-stack tutorials that guide viewers through building real-world applications from scratch. His content is especially valuable for developers looking to deepen their understanding of modern full-stack workflows, (almost) best practices, and discovery of useful tools and libraries (sponsored btw)."
        features={[]}
        issues={[]}></Section>

      <Section
        id="jack-herrington"
        className="bg-[radial-gradient(oklch(0.32_0.1365_265.54),oklch(0.17_0_0))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/jack-herrington.webp" alt="" />}
        title="Jack Herrington"
        links={[{ label: "Jack Herrington (Youtube)", href: "https://www.youtube.com/@jherr/" }]}
        subTitle="Deep dives into modern web development."
        description="Jack Herrington's channel explores the full spectrum of modern web and software development, from beginner-friendly tutorials to very advanced deep dives. His videos cover frontend and backend frameworks, protocols, AI, developer tooling, and the latest trends in the tech ecosystem. Whether you want to master React, Next.js, tRPC, serverless, or understand new protocols and best practices, Jack's clear explanations and real-world examples make complex topics accessible and engaging. He also actively contributes to the new standards meant to replace create-react-app, such as create-tsrouter-app and other affiliated projects."
        features={[]}
        issues={[]}></Section>
    </>
  );
}
