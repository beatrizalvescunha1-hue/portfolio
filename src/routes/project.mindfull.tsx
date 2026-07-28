import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectNav } from "../components/project-nav";
import mindfull1 from "../assets/mindfull1.png";
import mindfull2 from "../assets/mindfull2.jpg";
import mindfull3 from "../assets/mindfull3.jpeg";
import mindfull4 from "../assets/mindfull4.jpg";
import mindfull5 from "../assets/mindfull5.jpg";
import mock1 from "../assets/mock1.png";
import mock2 from "../assets/mock2.png";
import mock3 from "../assets/mock3.png";
import mock4 from "../assets/mock4.png";
import type { ReactNode } from "react";

export const Route = createFileRoute("/project/mindfull")({
  head: () => ({
    meta: [
      { title: "Mindfull — Beatriz Cunha" },
      {
        name: "description",
        content: "Mindfull, a digital solution promoting mental health and self-care habits.",
      },
      { property: "og:title", content: "Mindfull — Beatriz Cunha" },
      {
        property: "og:description",
        content:
          "Case study: Mindfull, a digital solution promoting mental health and self-care habits.",
      },
      { property: "og:image", content: mindfull1 },
      { name: "twitter:image", content: mindfull1 },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MindfullPage,
});

// Reusable info box: gray-bordered rectangle with a small uppercase label
// in the top-left and two unevenly-aligned text columns inside.
function InfoBox({
  label,
  primary,
  secondary,
}: {
  label: string;
  primary: ReactNode;
  secondary: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#A3A19F]/70 p-8 md:p-12">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A3A19F]">{label}</p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-end">
          <p className="text-[18px] leading-[1.55] text-[#292828] md:text-[20px]">{primary}</p>
        </div>

        <div className="flex items-end">
          <p className="text-[13px] leading-[1.6] text-[#51514F] md:text-[14px]">{secondary}</p>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 pl-8 text-[11px] font-medium uppercase tracking-[0.18em] text-[#A3A19F] md:pl-8">
      {children}
    </p>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-[#A3A19F]"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

const opportunities: string[] = [
  "Provide practical acess to high-quality content",
  "Reduce friction and pressure",
  "Design a simple and trustworthy interface",
  "Offer personalization",
];

const painPoints: string[] = [
  "Feelings of obligation or pressure",
  "Confusing interfaces",
  "Locked or paywalled majority of content",
  "Lack of personalization",
];

const processColumns: { title: string; items: string[] }[] = [
  {
    title: "Empathize",
    items: ["BMC", "Benchmarking", "Desk research", "Interviews"],
  },
  {
    title: "Define",
    items: ["HMW", "Brainstorming", "Concept", "Sketching"],
  },
  {
    title: "Prototype",
    items: [
      "Sitemap",
      "Personas",
      "User journeys",
      "Golden path",
      "UI kit",
      "Visual design",
      "Wireframes",
      "Usability testing",
      "Script",
    ],
  },
  {
    title: "Test",
    items: ["Hi-fi Prototype"],
  },
];

const features: string[] = [
  "Two main sections making navigation straightforward",
  "Search function available across most pages",
  "Personalized recommendations based on user activity",
  "Quick acess to Favorites, Explore and Profile pages",
];

const connectingFeatures: string[] = [
  "Integrated chat where users can contact specialists directly",
  "Users can request personalized content, a paid feature (e.g. customized mindfulness routine)",
  "Users can unlock personalized content with credits, giving them the freedom to explore at their own pace while ensuring professionals are fairly rewarded",
];

{
  /* Research 
  
  const publishing: string[] = [
  "Web platform for publishing and managing content",
  "Landing page to introduce the product while serving as an entry point for professionals",
  "Dashboard centralizes key actions",
];
  
  
  
  
  */
}

function MindfullPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-10">
        {/* Title */}
        <header className="mx-auto mb-10 max-w-5xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
              UX/UI Design
            </span>

            <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
              2025
            </span>
            <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
              Case Study
            </span>
          </div>

          <h1 className="mt-4 text-[26px] font-normal leading-[1.2] text-black md:text-[38px]">
            Mindfull a digital solution
            <br className="hidden md:block" /> promoting mental health and self-care habits
          </h1>
        </header>

        {/* Hero */}
        <figure className="w-full">
          <img src={mindfull1} alt="Mindfull landing page mockup" className="w-full" />
        </figure>

        {/* Brief */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <InfoBox
            label="Brief"
            primary="Mindfull is a digital solution that helps users take care of their well-being and develop healthy mental and mindful habits."
            secondary="It allows users to access content created by professionals in mental health and meditation."
          />
        </section>

        {/* Process */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <SectionLabel>Process</SectionLabel>
          <div className="relative rounded-2xl border border-[#A3A19F]/70">
            <div className="grid grid-cols-1 divide-y divide-[#A3A19F]/60 md:grid-cols-4 md:divide-x md:divide-y-0">
              {processColumns.map((col) => (
                <div key={col.title} className="p-6 md:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A3A19F]">
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-2 md:mt-8 md:space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="text-[14px] leading-[1.5] text-[#292828]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Floating chevrons above the internal borders (desktop only) */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute -top-2 left-[25%] -translate-x-1/2 bg-white px-1">
                <Chevron />
              </div>
              <div className="absolute -top-2 left-[75%] -translate-x-1/2 bg-white px-1">
                <Chevron />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge — full-bleed dark banner */}
        <section className="mt-24 bg-[#292828] px-6 py-24 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
              Challenge
            </p>
            <p className="mt-10 text-[22px] leading-[1.55] md:text-[28px]">
              Building a practical, user-centered app that simplifies access to trusted content,
              addressing real-life needs while reducing friction and stress.
            </p>
          </div>
        </section>

        {/* Research */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <InfoBox
            label="Research"
            primary="We conducted 6 interviews with people aged 22-34, the target audience, to better understand their routines, habits, and approaches to self-care and mindfulness, as well as how digital tools fit into their lives."
            secondary="These conversations revealed key insights that highlighted clear opportunities and directly guided our design decisions."
          />
        </section>

        {/* Pain Points and Opportunities */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <SectionLabel>Pain Points and Opportunities</SectionLabel>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="grid grid-rows-4 gap-4">
              {opportunities.map((title, i) => (
                <div
                  key={title}
                  className={`flex items-center gap-4 rounded-2xl p-6 md:p-8 ${
                    i % 2 === 0 ? "bg-[#DDE9DC]" : "bg-[#EDF3EC]"
                  }`}
                >
                  <div className="shrink-0 text-[#2F5E3A]">
                    <ArrowUp />
                  </div>
                  <p className="text-[16px] font-medium text-[#1F3A25] md:text-[17px]">{title}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-rows-4 gap-4">
              {painPoints.map((title, i) => (
                <div
                  key={title}
                  className={`flex items-center gap-4 rounded-2xl p-6 md:p-8 ${
                    i % 2 === 0 ? "bg-[#F5D9CF]" : "bg-[#FBEAE2]"
                  }`}
                >
                  <div className="shrink-0 text-[#8C3A1F]">
                    <ArrowDown />
                  </div>
                  <p className="text-[16px] font-medium text-[#4A1E10] md:text-[17px]">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual identity + lifestyle imagery */}
        <section className="mt-0">
          <img
            src={mindfull2}
            alt="Mindfull visual identity: colour palette, logo and typography"
            className="w-full"
          />
        </section>
        <section className="mt-6">
          <img
            src={mindfull3}
            alt="Person holding a phone with the Mindfull app"
            className="w-full"
          />
        </section>

        {/* Features */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={mock1}
                alt="Mindfull mobile app home screen"
                className="w-full max-w-[320px]"
              />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#F26B41]">
                Features
              </p>
              <h2 className="mt-4 text-[24px] font-normal leading-[1.25] text-black md:text-[30px]">
                Exploring content intuitively
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-[1.6] text-[#51514F]">
                The app was designed with a clear and intuitive interaction interface.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-4 w-4 shrink-0 text-[#0e3b36]"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] leading-[1.55] text-[#292828]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Feature card — Connecting users with professionals */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl border border-[#A3A19F]/70 px-8 pb-8 md:px-12 md:pb-12">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
              <div className="pt-8 md:pt-12">
                <h2 className="text-[24px] font-normal leading-[1.25] text-black md:text-[28px]">
                  Connecting general users with professionals
                </h2>
                <ul className="mt-10 space-y-5">
                  {connectingFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 h-4 w-4 shrink-0 text-black"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[14px] leading-[1.6] text-[#292828]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start justify-center">
                <img
                  src={mock2}
                  alt="Mindfull chat with a professional"
                  className="block w-full max-w-[360px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* App UI components */}
        <section className="mt-24">
          <img
            src={mindfull4}
            alt="Mindfull app UI components: reflections and recommendations"
            className="w-full"
          />
        </section>

        {/* Feature card — Publishing system for specialists */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img src={mock3} alt="Mindfull dashboard" className="w-full max-w-[820px]" />
            </div>
            <div>
              <h2 className="mt-4 text-[24px] font-normal leading-[1.25] text-black md:text-[30px]">
                Publishing system for specialists
              </h2>
              <ul className="mt-8 space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-4 w-4 shrink-0 text-[#0e3b36]"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] leading-[1.55] text-[#292828]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mindfull components */}
        <section className="mt-20">
          <img src={mindfull5} alt="mindfull components" className="w-full" />
        </section>

        {/* Mindfull screens */}
        <section className="mt-0">
          <img src={mock4} alt="mindfull screens" className="w-full" />
        </section>

        {/* Takeaways */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <InfoBox
            label="Takeaways"
            primary="Research guided every decicion, ensuring our solution was evidence-based. We designed the app and website with a focus on an intuitive user experience, applying principles of acessibility, consistency, and clear visual hierarchy."
            secondary="The development of this project highlighted the importance of clear objectives, strong communication, and close, collaboration, especially when working under tight contraints."
          />
        </section>

        <ProjectNav
          prev={{ to: "/work", label: "Back to Work" }}
          next={{ to: "/project/ssb", label: "Next project" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
