import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";
import heroLogo from "../assets/logohero.png";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beatriz Cunha — Portfolio" },
      {
        name: "description",
        content: "Portfolio of Beatriz Cunha — communication design & UX/UI design work.",
      },
      { property: "og:title", content: "Beatriz Cunha — Portfolio" },
      {
        property: "og:description",
        content: "Portfolio of Beatriz Cunha — communication design & UX/UI design work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 4);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Eased (smoothstep) fade over a longer scroll distance for a gentler transition.
  const progress = Math.min(Math.max(scrollY / 600, 0), 1);
  const eased = progress * progress * (3 - 2 * progress);
  const opacity = 1 - eased;

  // The wordmark fades more gradually (over a longer scroll distance) than the circles.
  const wordmarkProgress = Math.min(Math.max(scrollY / 950, 0), 1);
  const wordmarkEased = wordmarkProgress * wordmarkProgress * (3 - 2 * wordmarkProgress);
  const wordmarkOpacity = 1 - wordmarkEased;
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="flex flex-col items-center px-6 pt-44">
          <p className="hero-text text-center text-[18px] text-black">
            (communication design
            <br />& ux/ui design)
          </p>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <span>↓</span>
          </div>

          <div
            className="mt-16 flex items-center justify-center transition-opacity duration-75"
            style={{ opacity }}
          >
            {["#B7CDB0", "#B5342E", "#F4B8CE", "#2B1A0E", "#2E6DA4", "#F26B41"].map((c, i) => (
              <span
                key={c}
                className="h-16 w-16 rounded-full"
                style={{
                  backgroundColor: c,
                  marginLeft: i === 0 ? 0 : "-18px",
                }}
                aria-hidden="true"
              />
            ))}
          </div>

          <div
            className="mt-0 w-full transition-opacity duration-75"
            style={{ opacity: wordmarkOpacity * 0.7 }}
          >
            <img src={heroLogo} alt="Beatriz Cunha" className="w-full select-none" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-24">
          <p className="text-center text-sm text-black">(some of my work)</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              to="/work"
              className="rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF] hover:underline hover:underline-offset-4"
            >
              Explore more work
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
