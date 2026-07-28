import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import logo from "../assets/logo4.png";

function NavLink({ to, label, dark }: { to: string; label: string; dark?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        "text-sm transition-colors",
        dark ? "text-white" : "text-black",
        active
          ? "underline underline-offset-4"
          : "hover:text-[#4000FF] hover:underline hover:underline-offset-4",
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({
  variant = "light",
  sticky = false,
  children,
}: {
  variant?: "light" | "dark";
  sticky?: boolean;
  children?: ReactNode;
}) {
  const dark = variant === "dark";
  return (
    <header
      className={cn(
        "flex items-start justify-between gap-8 px-8 py-6",
        dark && "bg-black",
        sticky && "sticky top-0 z-20",
      )}
    >
      <Link to="/" aria-label="Home" className="shrink-0">
        <img src={logo} alt="Beatriz A. Cunha" className={cn("h-6 w-auto", dark && "invert")} />
      </Link>

      {children}

      <nav className="flex shrink-0 items-start gap-8">
        <NavLink to="/work" label="Work" dark={dark} />
        <NavLink to="/about" label="About" dark={dark} />
      </nav>
    </header>
  );
}
