import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { ProjectNav } from "../components/project-nav";
import social1 from "@/assets/social1.jpg";
import social2 from "@/assets/social2.jpg";
import social3 from "@/assets/social3.png";
import social4 from "@/assets/social4.png";

export const Route = createFileRoute("/project/social")({
  head: () => ({
    meta: [
      { title: "Social Media Design — Beatriz A. Cunha" },
      {
        name: "description",
        content:
          "Gorreana tea is produced at the oldest tea plantation in Europe, Azores, and is widely recognized for its quality and organic traditional production methods.",
      },
      { property: "og:title", content: "Gorreana — Beatriz A. Cunha" },
      {
        property: "og:description",
        content: "A graphic design case study: wedding stationery concept.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SocialPage,
});

function SocialPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="w-full px-0 pt-10 sm:px-0">
        {/* Title */}
        <header className="mb-10 pl-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
              Graphic Design
            </span>

            <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
              2024–26
            </span>
          </div>

          <h1 className="mt-4 text-[26px] font-normal leading-[1.2] text-black md:text-[40px]">
            Social Media Design
          </h1>
        </header>

        {/* Content two-column */}
        <section className="mt-16 grid grid-cols-1 gap-12 pb-24 md:grid-cols-12 md:gap-10">
          {/* Left column */}
          <aside className="md:col-span-6 pl-8">
            <div className="md:sticky md:top-28 space-y-8 text-[16px] leading-[1.7] text-black">
              <p className="indent-12">
                During both my curricular internship and freelance work, I created social media
                content, primarily posts. My focus was on designing cohesive digital assets that
                reflected each brand's identity, values and communication style.
              </p>
            </div>
          </aside>

          {/* Right column */}
          <div className="space-y-3 md:col-span-6">
            <figure className="overflow-hidden">
              <img
                src={social2}
                alt="iasoestetica"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img src={social1} alt="iasobebe" className="w-full h-auto block" loading="lazy" />
            </figure>
            <figure className="overflow-hidden">
              <img src={social3} alt="art" className="w-full h-auto block" loading="lazy" />
            </figure>
            <figure className="overflow-hidden">
              <img src={social4} alt="shape" className="w-full h-auto block" loading="lazy" />
            </figure>
          </div>
        </section>

        <ProjectNav
          prev={{ to: "/project/stationery", label: "Previous work" }}
          next={{ to: "/", label: "Back to Home" }}
        />
      </main>
    </div>
  );
}
