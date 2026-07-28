import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectNav } from "../components/project-nav";
import ssb1 from "../assets/ssb1.png";
import ssb2 from "../assets/ssb2.png";
import ssb3 from "../assets/ssb3.png";
import ssb4 from "../assets/ssb4.png";
import ssb5 from "../assets/ssb5.png";
import mockssb1 from "../assets/mockssb1.png";
import mockssb2 from "../assets/mockssb2.png";
import type { ReactNode } from "react";

export const Route = createFileRoute("/project/ssb")({
  head: () => ({
    meta: [
      { title: "Loyalty Program SSB — Beatriz Cunha" },
      {
        name: "description",
        content: "Loyalty program app for Street Smash Burgers",
      },
      { property: "og:title", content: "SSB — Beatriz Cunha" },
      {
        property: "og:description",
        content: "Loyalty program app for Street Smash Burgers",
      },
      { property: "og:image", content: ssb1 },
      { name: "twitter:image", content: ssb1 },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ssbPage,
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

const processColumns: { title: string; items: string[] }[] = [
  {
    title: "Empathize (research)",
    items: ["BMC", "Benchmarking", "Desk research", "Interviews"],
  },
  {
    title: "Define (evaluate)",
    items: ["HMW"],
  },
  {
    title: "Develop (ideation)",
    items: [
      "Brainstorming",
      "Ideation exercises (eg.Worst possible idea)",
      "Creative Concept",
      "Personas",
      "User journey",
      "Golden path",
    ],
  },
  {
    title: "Test (building)",
    items: ["UI Kit, Prototype"],
  },
];

const simplicity: string[] = [
  "Clarity of progress and rewards",
  "Check in to earn points for purchases and challenge participation",
  "Progressive membership levels each offering increasing benefits (merch, events, etc.)",
  "Simple connection of the digital and physical space",
];

const experience: string[] = [
  "Smashbot to generate fun in-store challenges with users prompts",
  "Discover, create, vote on, and register for in-store challenges",
  "Foster a sense of community and brand loyalty by creating memorable, emotionally engaging experiences",
  "Individual or crew-based challenges",
  "Frictionless in-store verification of challenge points by staff",
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

function ssbPage() {
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
              2026
            </span>
            <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
              Case Study
            </span>
          </div>

          <h1 className="mt-4 text-[26px] font-medium leading-[1.2] text-black md:text-[38px]">
            Loyalty program app
            <br className="hidden md:block" /> for Street Smash Burgers
          </h1>
        </header>

        {/* Hero */}
        <figure className="w-full">
          <img src={ssb1} alt="SSB landing page mockup" className="w-full" />
        </figure>

        {/* Brief */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <InfoBox
            label="Brief"
            primary="This project was based on a brief from Street Smash Burgers to design a loyalty program that could scale internationally while reflecting the brand’s values of community and cultural impact."
            secondary="Their target audience is urban, digital, and culturally engaged young adults aged 20–35. Therefore, the goal was not simply to create a system for discounts, but to design an experience where customers feel part of something bigger."
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
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">HMW</p>
            <p className="mt-10 text-[22px] leading-[1.55] md:text-[28px]">
              How might we reward loyal customers in a simple, frictionless way while creating
              moments that strengthen their emotional connection to the brand?
            </p>
          </div>
        </section>

        {/* Research */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <InfoBox
            label="Research"
            primary="The first week focused on research: 37 long-form interview responses, 138 short questionnaires, and 10 on-site interviews, supported by desk research."
            secondary="From this, we identified key insights which shaped design decisions."
          />
        </section>

        {/* Research data */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <InfoBox
            label="How much effort will they go through for a reward?"
            primary="The first week focused on research: 37 long-form interview responses, 138 short questionnaires, and 10 on-site interviews, supported by desk research."
            secondary="From this, we identified key insights which shaped design decisions."
          />
        </section>

        {/* post-its*/}
        <section className="mt-10">
          <img src={ssb2} alt="posts-its" className="mx-auto w-[1180px]" />
        </section>
        <section className="mt-10">
          <img src={ssb3} alt="mockup banner" className="w-full" />
        </section>

        {/* Features */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img src={mockssb1} alt="SSB home screen" className="w-full max-w-[320px]" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#AB3D3D]">
                Two Experiences
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.25] text-black md:text-[30px]">
                Simplicity-driven
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-[1.6] text-[#51514F]">
                The interviews revealed two distinct user needs, leading us to design a system that
                balances an experience-driven approach with a simple, direct one.
              </p>
              <ul className="mt-8 space-y-4">
                {simplicity.map((f) => (
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

        {/* App UI components */}
        <section className="mt-24">
          <img src={ssb4} alt="ssb check-in" className="w-full" />
        </section>

        {/* Feature card — Experience-driven */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <div className="rounded-2xl border border-[#A3A19F]/70 p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-[24px] font-medium leading-[1.25] text-black md:text-[28px]">
                  Experience-driven
                </h2>
                <ul className="mt-10 space-y-5">
                  {experience.map((f) => (
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
              <div className="flex justify-center">
                <img
                  src={mockssb2}
                  alt="Mindfull chat with a professional"
                  className="w-full max-w-[320px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* App screens */}
        <section className="mt-20">
          <img src={ssb5} alt="ssb screens" className="w-full" />
        </section>

        {/* Brief */}
        <section className="mx-auto mt-20 max-w-5xl px-6">
          <InfoBox
            label="Takeaways"
            primary="On this project I contributed across most stages. My role focused especially on both the app’s UI Design and on identifying weaknesses, helping the team refine and strengthen the concept, design and final presentation. "
            secondary="The project highlighted how clear communication, aligned expectations, and teamwork are key to achieving strong outcomes efficiently."
          />
        </section>

        <ProjectNav
          prev={{ to: "/project/mindfull", label: "Previous project" }}
          next={{ to: "/project/final", label: "Next project" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
