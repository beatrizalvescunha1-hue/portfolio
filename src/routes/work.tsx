import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ProjectCard } from "../components/project-card";
import { projects, type Category } from "../data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Beatriz Cunha" },
      {
        name: "description",
        content:
          "Selected projects by Beatriz Cunha across UX/UI and communication design.",
      },
      { property: "og:title", content: "Work — Beatriz Cunha" },
      {
        property: "og:description",
        content:
          "Selected projects by Beatriz Cunha across UX/UI and communication design.",
      },
    ],
  }),
  component: Work,
});

type Filter = "All" | Category;
const filters: Filter[] = ["All", "UX/UI Design", "Communication Design"];

function Work() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pt-16">
        <p className="text-center text-sm text-black">(more of my work)</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "rounded-full border px-5 py-2 text-sm transition-colors " +
                  (isActive
                    ? "border-[#4000FF] text-[#4000FF] underline underline-offset-4"
                    : "border-black text-black hover:border-[#4000FF] hover:text-[#4000FF] hover:underline hover:underline-offset-4")
                }
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}