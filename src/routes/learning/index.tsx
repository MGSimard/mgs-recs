import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/_components/Section";
import { LogoFreecodecamp, LogoFrontendMentor } from "@/_components/Icons";

export const Route = createFileRoute("/learning/")({
  component: PageLearning,
  loader: () => ({ title: "Learning" }),
  head: () => ({ meta: [{ title: "MGS RECS - Learning" }] }),
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
        description="freeCodeCamp is a nonprofit offering a free, self-paced coding curriculum with hands-on projects and certifications. It covers web development, data science, and more, using a test-based, interactive platform with a built-in IDE. The large community is supportive, and many graduates land tech jobs. Note: React curriculum is outdated but still useful for learning basics."
        features={[
          "Completely free, nonprofit coding education",
          "Comprehensive, self-paced curriculum",
          "Covers HTML, CSS, JavaScript, Python, SQL, and more",
          "Project-based learning with real-world challenges",
          "Integrated browser IDE and test suite for instant feedback",
          "Large, supportive global community and forums",
          "Thousands of tutorials, videos, and articles",
        ]}
        issues={["React curriculum is very outdated (pre-hooks era), working on an updated version"]}></Section>

      <Section
        id="frontend-mentor"
        className="bg-[linear-gradient(45deg,oklch(0.4601_0.1267_269.88),oklch(0.7356_0.0847_211.38))]"
        logo={<LogoFrontendMentor />}
        title="Frontend Mentor"
        links={[{ label: "Frontend Mentor", href: "https://www.frontendmentor.io/" }]}
        subTitle=""
        description="Frontend Mentor is a platform that helps you improve your frontend skills by building real-world projects using professionally designed challenges. You get hands-on experience with HTML, CSS, and JavaScript, and can add portfolio-ready projects to showcase your abilities. The platform offers feedback from a supportive community, learning paths for different topics, and a range of challenges for all skill levels. While free users must host their solutions elsewhere and only premium users get full design specs, it's an excellent way to practice and grow as a developer. You can complete these challenges using virtually any stack you like, but I do recommend vanilla HTML/CSS/JS since you'll both learn more and move faster since these are isolated UI challenges."
        features={[
          "HUGE for responsive design, layouts, accessibility, and design interpretation practice",
          "Challenges for all skill levels",
          "Portfolio-ready projects with real feedback",
          "Short, self-paced, and hands-on projects",
          "Focus on HTML, CSS, and JavaScript skills",
          "Active, supportive community and code reviews",
        ]}
        issues={[
          "Find your own place to host project submissions (CodePen, GitHub Pages, Cloudflare Pages, etc.)",
          "Projects lack full design spec without premium, have to be good at eyeballing",
        ]}></Section>

      <Section
        id="codevolution"
        className="bg-black"
        logo={<img className="object-cover rounded-full" src="/assets/brands/codevolution.webp" alt="" />}
        title="Codevolution"
        links={[{ label: "Codevolution (Youtube)", href: "https://www.youtube.com/codevolution/" }]}
        subTitle="Clear, practical tutorials for modern web development."
        description="Codevolution, also known as Vishwas, is a YouTube channel dedicated to simplifying web and mobile development for beginners and intermediate learners. The channel is best known for its clear, step-by-step tutorials on React, JavaScript, TypeScript, and other modern frontend technologies. Lessons are hands-on and project-based, making complex topics approachable and practical for real-world use. His series are separated in short episodic chunks, making it easier to follow along and understand the concepts. Bar none the best beginner to intermediate youtube resource I've looked at."
        features={[
          "Covers React, Next.js, JavaScript, TypeScript, and more",
          "Hands-on, project-based learning",
          "Short, episodic lessons for easy follow-along",
          "Beginner to intermediate friendly content",
          "Up-to-date series on modern frameworks and tools",
        ]}
        issues={[]}></Section>

      <Section
        id="theo"
        className="bg-[radial-gradient(oklch(0.36_0.0586_304.5),oklch(0.33_0.0542_303.48))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/theo.webp" alt="" />}
        title="Theo - t3.gg"
        links={[{ label: "t3dotgg (Youtube)", href: "https://www.youtube.com/@t3dotgg" }]}
        subTitle="Tech insights and intermediate full-stack tutorials."
        description="Theo (t3dotgg) is a YouTube creator known for his engaging commentary on the latest happenings in tech and software development. Alongside his takes on industry trends, he occasionally produces in-depth, mid to advanced, 0-to-production full-stack tutorials that guide viewers through building real-world applications from scratch. His content is especially valuable for developers looking to deepen their understanding of modern full-stack workflows, (almost) best practices, and discovery of useful tools and libraries (sponsored btw)."
        features={[
          "Occasional end-to-end full-stack tutorials",
          "Insightful commentary on industry trends & experience",
          "Great recommendations for modern tooling and practices",
          "Stopped dyeing his hair blonde",
        ]}
        issues={[
          "Shaved the mustache",
          "Long form reaction/explanatory/news coverage content may be less interesting to beginners",
        ]}></Section>

      <Section
        id="jack-herrington"
        className="bg-[radial-gradient(oklch(0.32_0.1365_265.54),oklch(0.17_0_0))]"
        logo={<img className="object-cover rounded-full" src="/assets/brands/jack-herrington.webp" alt="" />}
        title="Jack Herrington"
        links={[{ label: "Jack Herrington (Youtube)", href: "https://www.youtube.com/@jherr/" }]}
        subTitle="Deep dives into modern web development."
        description="Jack Herrington's channel explores the full spectrum of modern web and software development, from beginner-friendly tutorials to very advanced deep dives. His videos cover frontend and backend frameworks, protocols, AI, developer tooling, and the latest trends in the tech ecosystem. Whether you want to master React, Next.js, tRPC, serverless, or understand new protocols and best practices, Jack's clear explanations and real-world examples make complex topics accessible and engaging. He also actively contributes to the new standards meant to replace create-react-app, such as create-tsrouter-app and other affiliated projects."
        features={[
          "Deep dives into React, Next.js, and modern web tech",
          "Tutorials from beginner to advanced topics",
          "Real-world projects and practical coding examples",
          "Covers new frameworks, tools, and best practices",
          "Clear explanations of complex concepts",
        ]}
        issues={[]}></Section>
    </>
  );
}
