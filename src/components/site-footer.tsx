import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import footerSvg from "@/assets/svg.svg";

export function SiteFooter() {
  return (
    <footer
      className="mt-60 px-8 pt-16 pb-6"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF7D6 25%, #FDE3AC 45%, #FABE77 65%, #F79556 82%, #F26A42 100%)",
      }}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <h2 className="text-4xl font-normal leading-tight text-black md:text-5xl">
          Thank you
          <br />
          for watching!!!
        </h2>
        <div className="grid grid-cols-2 gap-8 text-sm text-black md:justify-items-start">
          <ul className="space-y-3">
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/work">Work</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <ExtLink
                href="https://www.linkedin.com/in/beatriz-cunha-20aaa41a6/"
                label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
                Linkedin
                <span aria-hidden>↗</span>
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.behance.net/beatriz_cunha/" label="Behance">
                <BehanceIcon className="h-5 w-5" aria-hidden />
                Behance
                <span aria-hidden>↗</span>
              </ExtLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 flex items-end justify-between text-xs text-black">
        <div className="flex items-end gap-3">
          <img src={footerSvg} alt="Beatriz Alves Cunha" className="h-12 w-auto" />
        </div>

        <p>
          Reach me @{" "}
          <a
            href="mailto:beatrizalvescunha1@gmail.com"
            className="hover:text-[#4000FF] hover:underline hover:underline-offset-4"
          >
            beatrizalvescunha1@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="hover:text-[#4000FF] hover:underline hover:underline-offset-4">
      {children}
    </Link>
  );
}

function ExtLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 text-black transition-colors hover:text-[#4000FF] hover:underline hover:underline-offset-4"
    >
      {children}
    </a>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 7h4.5a2.5 2.5 0 0 1 0 5H2z" />
      <path d="M2 12h5a2.5 2.5 0 0 1 0 5H2z" />
      <path d="M15 8h5" />
      <path d="M22 14a3 3 0 1 0-5.83 1" />
      <path d="M15 14h7" />
    </svg>
  );
}
