import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-53 - Korea — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-53 — Concrete building of free-flowing contemporary lines, Korea Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-53 (legacy mainliner55553.html).
 * Nav bar shows Page 54. NEXT → /mainliner55554; PREVIOUS → /mainliner55552.
 */
export default function Mainliner55553Page() {
  return (
    <MainlinerSlidePage
      slideId="555-53"
      title="Slide 555-53 - Korea"
      lead="555-53 Concrete building of free-flowing contemporary lines, Korea Pavilion"
      image={{
        src: "/images/mainliner/555-53.jpg",
        width: 267,
        height: 400,
        alt: "Concrete building of free-flowing contemporary lines, Korea Pavilion",
      }}
      previousHref="/mainliner55552"
      nextHref="/mainliner55554"
    />
  );
}
