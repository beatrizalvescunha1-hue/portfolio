import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import gorreana1 from "@/assets/gorreana1.jpg";
import gorreana2 from "@/assets/gorreana2.jpg";
import gorreana3 from "@/assets/gorreana3.jpg";
import gorreana4 from "@/assets/gorreana4.png";
import gorreana5 from "@/assets/gorreana5.png";
import gorreana6 from "@/assets/gorreana6.png";
import gorreana7 from "@/assets/gorreana7.png";
import gorreana9 from "@/assets/gorreana9.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/project/gorreana")({
  head: () => ({
    meta: [
      { title: "Rebranding Gorreana — Beatriz A. Cunha" },
      {
        name: "description",
        content:
          "Gorreana tea is produced at the oldest tea plantation in Europe, Azores, and is widely recognized for its quality and organic traditional production methods.",
      },
      { property: "og:title", content: "Gorreana — Beatriz A. Cunha" },
      {
        property: "og:description",
        content:
          "A graphic design case study: wedding stationery concept.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GorreanaPage,
});

function GorreanaPage() {
  return (
    <div className="min-h-screen bg-background">
          
          <SiteHeader />
          <main className="pt-10">
            
    
            {/* Title */}
            <header className="mx-5 mb-10 max-w-5xl px-6">
              <div className="mb-8 flex items-center gap-3">
               <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                 Communication Design
                 </span>
               <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                 Visual Identitities
                 </span>                 
    
              <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
                 2023
              </span>

                </div>
              
              <h1 className="mt-4 text-[26px] font-medium leading-[1.2] text-black md:text-[38px]">
                Rebranding Gorreana
              </h1>
            </header>
</main>
      <main className="mx-auto max-w-[1600px] px-6 sm:px-10">
       

        {/* Content two-column */}
        <section className="mt-16 grid grid-cols-1 gap-12 pb-24 md:grid-cols-12 md:gap-10">
          {/* Left column */}
          <aside className="md:col-span-6">
            <div className="md:sticky md:top-28 space-y-8 text-[14px] leading-[1.7] text-black">
              <p className="indent-12">
                Gorrweana tea is produced at the oldest tea plantation in Europe, Azores, and is widely recognized for its quality and organic traditional production methods.
                
              </p>
              <p className="indent-12">
                For this academic project, the main goals were to develop a rebranding that reflected the brand’s tradition, legacy, values, and quality. It was equally important to ensure consistency across all products.
              </p>              
              <p className="pl-12">
                Developed in partnership with a colleague, this project involved the creation of both digital and physical assets. The rebranding included a redesigned logo with primary and secondary versions, a defined color palette, typography selection, packaging planning and assembly drawings, booklet design, a landing page, as well as physical mockups and a product photoshoot.
              </p>
            </div>
          </aside>

          {/* Right column */}
          <div className="space-y-3 md:col-span-6">
            <figure className="overflow-hidden">
              <img
                src={gorreana1}
                alt="Wedding stationery layout"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana2}
                alt="Invitation"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana3}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana4}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana5}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
                        <figure className="overflow-hidden">
              <img
                src={gorreana6}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana7}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={gorreana9}
                alt="Save the date"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

       
<div className="mx-auto mt-24 flex max-w-5xl items-center justify-between px-6 pb-16">
  <Link
    to="/work"
    className="flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]"
  >
    <ArrowLeft size={16} />
    Previous work
  </Link>

  <Link
    to="/project/stationery"
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
