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
              <FooterLink href="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink href="/work">Work</FooterLink>
            </li>
            <li>
              <FooterLink href="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink href="mailto:beatrizalvescunha1@gmail.com">Contact</FooterLink>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <ExtLink href="https://www.linkedin.com/in/beatriz-cunha-20aaa41a6/">
                Linkedin
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.behance.net/beatriz_cunha/">Behance</ExtLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 flex items-end justify-between text-xs text-black">
        <div className="flex items-end gap-3">
          <img src={footerSvg} alt="Beatriz Alves Cunha" className="h-12 w-auto" />
          <p className="leading-tight text-black/80">
            @2026 Portfolio
            <br />
            The Neverending Project
          </p>
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

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-[#4000FF] hover:underline hover:underline-offset-4">
      {children}
    </a>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 hover:text-[#4000FF] hover:underline hover:underline-offset-4"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}
