import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-34 - Coca-Cola — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-34 — Elliptical two-story Coca-Cola Pavilion with world's largest electric carillon in tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-34 (legacy mainliner55534.html).
 * Nav bar shows Page 35. NEXT → /mainliner55535; PREVIOUS → /mainliner55533.
 */
export default function Mainliner55534Page() {
  return (
    <MainlinerSlidePage
      slideId="555-34"
      title="Slide 555-34 - Coca-Cola"
      lead="555-34 Elliptical two-story Coca-Cola Pavilion with world's largest electric carillon in tower"
      image={{
        src: "/images/mainliner/555-34.jpg",
        width: 400,
        height: 270,
        alt: "Elliptical two-story Coca-Cola Pavilion with world's largest electric carillon in tower",
      }}
      previousHref="/mainliner55533"
      nextHref="/mainliner55535"
    />
  );
}
