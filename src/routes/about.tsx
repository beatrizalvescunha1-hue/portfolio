import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import footerSvgabout from "@/assets/svgabout.svg";
import { useEffect } from "react";
import img1 from "@/assets.about/1.jpg";
import img2 from "@/assets.about/2.jpg";
import img3 from "@/assets.about/3.jpg";
import img4 from "@/assets.about/4.png";
import img5 from "@/assets.about/5.png";
import img6 from "@/assets.about/6.jpg";
import img7 from "@/assets.about/7.png";
import img8 from "@/assets.about/8.jpg";
import img9 from "@/assets.about/9.jpg";
import img10 from "@/assets.about/10.jpg";
import img11 from "@/assets.about/11.jpeg";
import img12 from "@/assets.about/12.jpeg";
import img13 from "@/assets.about/13.jpeg";
import img14 from "@/assets.about/14.jpeg";
import img15 from "@/assets.about/15.jpeg";
import img16 from "@/assets.about/16.jpeg";
import img17 from "@/assets.about/17.jpeg";
import img18 from "@/assets.about/18.jpeg";
import img19 from "@/assets.about/19.jpeg";
import img20 from "@/assets.about/20.jpeg";

const projectImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const interestImages = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Beatriz Cunha" },
      {
        name: "description",
        content: "About Beatriz Cunha — education, skills, past projects and interests.",
      },
      { property: "og:title", content: "About — Beatriz Cunha" },
      {
        property: "og:description",
        content: "About me",
      },
    ],
  }),
  component: AboutPage,
});

function Placeholder({ i }: { i: number }) {
  return (
    <div
      className="aspect-[4/3] w-full rounded-[2px] bg-[#1a1a1a]"
      aria-label={`Placeholder ${i + 1}`}
    />
  );
}

function AboutPage() {
  useEffect(() => {
    document.body.classList.add("cursor-white");

    return () => {
      document.body.classList.remove("cursor-white");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Same header component as the rest of the site (dark variant). */}
      <SiteHeader variant="dark" sticky />

      {/* Info columns sit below the header — left-aligned text, group centered */}
      <section className="flex flex-wrap justify-center gap-12 px-8 pt-8 text-left text-[13px] md:gap-20">
        <div>
          <p className="text-white">EDUCATION</p>
          <p className="text-white/80">Ba in Communication Design @FBAUP</p>
          <p className="text-white/80">UX/UI Course @EDIT Porto</p>
        </div>
        <div>
          <p className="text-white">SKILLS</p>
          <p className="text-white/80">UX/UI Design</p>
          <p className="text-white/80">Editorial Design</p>
          <p className="text-white/80">Graphic Design</p>
        </div>
        <div>
          <p className="text-white">CONTACTS</p>
          <p>
            <a
              href="mailto:beatrizalvescunha1@gmail.com"
              className="text-white/80 hover:text-[#4000FF]"
            >
              Email
            </a>
          </p>
          <p>
            <a
              href="https://www.behance.net/beatriz_cunha"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-[#4000FF]"
            >
              Behance
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/beatriz-cunha-20aaa41a6/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-[#4000FF]"
            >
              Linkedin
            </a>
          </p>
        </div>
      </section>

      <main className="px-8 pt-24">
        {/* Other projects */}
        <section>
          <p className="text-[13px] text-white/80">(other projects)</p>
          <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-10">
            {projectImages.map((image, i) => (
              <img key={i} src={image} alt="" className="h-24 w-full object-cover" />
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mt-20">
          <p className="text-[13px] text-white/80">(some of my interests)</p>
          <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-10">
            {interestImages.map((image, i) => (
              <img key={i} src={image} alt="" className="h-24 w-full object-cover" />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 px-8 pt-16 pb-6 text-white">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-normal leading-tight md:text-5xl">
            Thank you
            <br />
            for watching!!!
          </h2>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:beatrizalvescunha1@gmail.com"
                  className="hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/beatriz-cunha-20aaa41a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  Linkedin <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/beatriz_cunha"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#4000FF] hover:underline hover:underline-offset-4"
                >
                  Behance <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-between text-xs">
          <div className="flex items-end gap-3">
            <img src={footerSvgabout} alt="Beatriz Alves Cunha" className="h-12 w-auto" />
            <p className="leading-tight text-white/80">
              @2026 Portfolio
              <br />
              The Neverending Project
            </p>
          </div>

          <p className="text-white/80">
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
    </div>
  );
}
