import { Link, useRouterState } from "@tanstack/react-router";
import logo from "../assets/logo4.png";

function NavLink({ to, label }: { to: string; label: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={
        "text-sm transition-colors " +
        (active
          ? "text-black underline underline-offset-4"
          : "text-black hover:text-[#4000FF] hover:underline hover:underline-offset-4")
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link to="/" aria-label="Home">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
       
      </Link>
      <nav className="flex items-start gap-8">
        <NavLink to="/work" label="Work" />
        <NavLink to="/about" label="About" />
      </nav>

    </header>
  );
}