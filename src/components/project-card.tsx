import { Link } from "@tanstack/react-router";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const to = project.href ?? "/work";
  return (
    <Link
      to={to}
      className="group block rounded-2xl border border-black/10 bg-white p-4 transition-colors hover:border-[#4000FF]"
    >
      <div className="overflow-hidden rounded-xl bg-[#0b0b1a]">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:brightness-75"
        />
      </div>
      <div className="px-1 pt-5">
        <h3 className="text-lg font-medium text-black group-hover:text-[#4000FF] group-hover:underline group-hover:underline-offset-4">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[#51514F]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-black px-3 py-1 text-[11px] text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}