import mindfull from "../assets/home1.png";
import ssb from "../assets/home2.png";
import opusculo from "../assets/home3.png";
import gorreana from "../assets/home4.png";
import wedding from "../assets/home5.jpg";
import socialMedia from "../assets/home6.png";

export type Category = "UX/UI Design" | "Communication Design";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: Category[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "mindfull",
    title: "Mindfull",
    description: "A digital solution promoting mental health and self-care habits.",
    image: mindfull,
    tags: ["UX/UI Design"],
    categories: ["UX/UI Design"],
    href: "/project/mindfull",
  },
  {
    slug: "ssb",
    title: "SSB",
    description: "A scalable digital loyalty program for Street Smash Burgers.",
    image: ssb,
    tags: ["UX/UI Design"],
    categories: ["UX/UI Design"],
    href: "/project/ssb",
  },
  {
    slug: "opusculo",
    title: "Opúsculo",
    description:
      "Academic editorial project about different communication designers, the practice, their paths and work.",
    image: opusculo,
    tags: ["Editorial Design"],
    categories: ["Communication Design"],
    href: "/project/final"
  },
  {
    slug: "gorreana",
    title: "Gorreana",
    description:
      "University rebranding project exploring a renewed visual identity for Gorreana.",
    image: gorreana,
    tags: ["Communication Design", "Visual Identities"],
    categories: ["Communication Design"],
    href: "/project/gorreana",
  },
  {
    slug: "wedding-stationery",
    title: "Design Exercise: Wedding Stationery",
    description:
      "Wedding stationery design exercise based on a fictional narrative concept about photography.",
    image: wedding,
    tags: ["Graphic Design"],
    categories: ["Communication Design"],
    href: "/project/stationery"
  },
  {
    slug: "social-media-design",
    title: "Social Media Design",
    description: "Visual assets for brand social media.",
    image: socialMedia,
    tags: [" Social Media Design"],
    categories: ["Communication Design"],
    href: "/project/social"
  },
];