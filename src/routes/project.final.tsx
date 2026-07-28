import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import opusculo1 from "@/assets/opusculo1.png";
import opusculo2 from "@/assets/opusculo2.png";
import opusculo4 from "@/assets/opusculo4.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/project/final")({
  head: () => ({
    meta: [
      { title: "Opúsculo — Beatriz A. Cunha" },
      {
        name: "description",
        content: "Academic project focused on the the work of different communication designers. ",
      },
      { property: "og:title", content: "Opúsculo — Beatriz A. Cunha" },
      {
        property: "og:description",
        content: "Academic project focused on the the work of different communication designers.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FinalPage,
});

function FinalPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1600px] px-6 pt-10 sm:px-10">
        {/* Title */}
        <header className="mb-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
              Editorial Design
            </span>

            <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
              2025
            </span>
          </div>

          <h1 className="mt-4 text-[26px] font-medium leading-[1.2] text-black md:text-[38px]">
            Opúsculo
          </h1>
        </header>

        {/* Content two-column */}
        <section className="mt-16 grid grid-cols-1 gap-12 pb-24 md:grid-cols-12 md:gap-10">
          {/* Left column */}
          <aside className="md:col-span-6">
            <div className="md:sticky md:top-28 space-y-8 text-[14px] leading-[1.7] text-black">
              <p className="indent-12">
                This academic project focused on the creation of a publication featuring the work of
                different communication designers whose paths have passed through FBAUP (Faculty of
                Fine Arts of the University of Porto).
              </p>

              <p className="indent-12">
                The goal was to create a compilation of interviews alongside selected works,
                exploring different trajectories and practices within the field of design. It also
                aimed to encourage curiosity, as well as deeper research and critical thinking about
                building a design career.
              </p>

              <p className="pl-12">
                From research to print preparation, the project involved several practical stages:
                identifying and selecting interviewees, developing interview scripts, conducting,
                transcribing, and editing interviews, defining the grid and typographic system,
                designing the layout in Adobe InDesign, preparing files for print and overseeing
                assembly.
              </p>
              <p className="pl-12">
                The final outcome was a publication with a composite format (ranging from A6 to
                A4+), where each section corresponds to an individual interview, balancing content
                diversity while reinforcing the overall concept and purpose.
              </p>
            </div>
          </aside>

          {/* Right column */}
          <div className="space-y-3 md:col-span-6">
            <figure className="overflow-hidden">
              <img
                src={opusculo1}
                alt="Wedding stationery layout"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={opusculo2}
                alt="Invitation"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={opusculo4}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <div className="mt-24 flex items-center justify-between pb-16">
          <Link
            to="/project/ssb"
            className="flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]"
          >
            <ArrowLeft size={16} />
            Previous work
          </Link>

          <Link
            to="/project/gorreana"
            className="flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]"
          >
            Next Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
}
