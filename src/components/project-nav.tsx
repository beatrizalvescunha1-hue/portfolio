import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NavItem = { to: string; label: string };

const linkClass =
  "flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm text-black transition-colors hover:border-[#4000FF] hover:text-[#4000FF]";

export function ProjectNav({ prev, next }: { prev?: NavItem; next?: NavItem }) {
  return (
    <div className="mt-24 flex items-center justify-center gap-4 pb-16">
      {prev && (
        <Link to={prev.to} className={linkClass}>
          <ArrowLeft size={16} />
          {prev.label}
        </Link>
      )}
      {next && (
        <Link to={next.to} className={linkClass}>
          {next.label}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
