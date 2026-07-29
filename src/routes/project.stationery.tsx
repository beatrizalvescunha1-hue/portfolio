import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { ProjectNav } from "../components/project-nav";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import wedding3 from "@/assets/wedding3.jpg";

export const Route = createFileRoute("/project/stationery")({
  head: () => ({
    meta: [
      { title: "Wedding Stationery — Beatriz A. Cunha" },
      {
        name: "description",
        content:
          "A wedding stationery concept project by Beatriz A. Cunha, inspired by Karl Blossfeldt photography and cyanotype processes.",
      },
      { property: "og:title", content: "Wedding Stationery — Beatriz A. Cunha" },
      {
        property: "og:description",
        content: "A graphic design case study: wedding stationery concept.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StationeryPage,
});

function StationeryPage() {
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
              2026
            </span>
          </div>

          <h1 className="mt-4 text-[26px] font-normal leading-[1.2] text-black md:text-[40px]">
            Design Exercise: Wedding Stationery
          </h1>
        </header>

        {/* Content two-column */}
        <section className="mt-16 grid grid-cols-1 gap-12 pb-24 md:grid-cols-12 md:gap-10">
          {/* Left column */}
          <aside className="md:col-span-6 pl-8">
            <div className="md:sticky md:top-28 space-y-8 text-[16px] leading-[1.7] text-black">
              <p className="indent-12">
                This design exercise is a wedding stationery concept project based on a fictional
                narrative concept: a young, elegant couple passionate about photography.
              </p>
              <p className="pl-12 text-[#51514F]">
                The visual representation draws on photographs by Karl Blossfeldt, placed side by
                side as a metaphor for distinct identities that chose to unite. The aesthetic is
                also inspired by processes such as cyanotype, integrating the couple's interests
                into the visual language itself. The project uses a restrained colour palette
                centred on neutrals and red, two type families to establish hierarchy and
                legibility, and a monogram formed from the couple's initials.
              </p>
            </div>
          </aside>

          {/* Right column */}
          <div className="space-y-3 md:col-span-6">
            <figure className="overflow-hidden">
              <img
                src={wedding1}
                alt="Wedding stationery layout"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img src={wedding2} alt="Invitation" className="w-full h-auto block" loading="lazy" />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={wedding3}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <ProjectNav
          prev={{ to: "/project/gorreana", label: "Previous work" }}
          next={{ to: "/project/social", label: "Next project" }}
        />
      </main>
    </div>
  );
}
