import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import social1 from "@/assets/social1.jpg";
import social2 from "@/assets/social2.jpg";
import social3 from "@/assets/social3.png";
import social4 from "@/assets/social4.png";

import { ArrowLeft, ArrowRight } from "lucide-react";

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
        content:
          "A graphic design case study: wedding stationery concept.",
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
          <main className="pt-10">
            
    
            {/* Title */}
            <header className="mx-5 mb-10 max-w-5xl px-6">
              <div className="mb-8 flex items-center gap-3">
               <span className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                 Social Media Design
                 </span>
               
    
              <span className="rounded-full border border-[#A3A19F] px-4 py-2 text-xs text-[#51514F]">
                 2024–26
              </span>

                </div>
              
              <h1 className="mt-4 text-[26px] font-medium leading-[1.2] text-black md:text-[38px]">
                Social Media Design 
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
                        During both my curricular internship and freelance work, I created social media content, primarily posts. My focus was on designing cohesive digital assets that reflected each brand's identity, values and communication style.                
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
              <img
                src={social1}
                alt="iasobebe"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>            
            <figure className="overflow-hidden">
              <img
                src={social3}
                alt="art"
                className="w-full h-auto block"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden">
              <img
                src={social4}
                alt="shape"
                className="w-full h-auto block"
                loading="lazy"
              />
              </figure>

          </div>
        </section>

       
<div className="mx-auto mt-24 flex max-w-5xl items-center justify-between px-6 pb-16">
  <Link
    to="/project/stationery"
    className="flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]"
  >
    <ArrowLeft size={16} />
    Previous work
  </Link>

  <Link
    to="/"
    className="flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]"
  >
    Back to Home
    <ArrowRight size={16} />
  </Link>
</div>
        
      </main>
 
    </div>
  );
}
