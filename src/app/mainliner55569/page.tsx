import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-69 - Mexico — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-69 — Native dancers perform during show at Mexico's Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-69 (legacy mainliner55569.html).
 * Nav bar shows Page 70. NEXT → /mainliner55570; PREVIOUS → /mainliner55568.
 */
export default function Mainliner55569Page() {
  return (
    <MainlinerSlidePage
      slideId="555-69"
      title="Slide 555-69 - Mexico"
      lead="555-69 Native dancers perform during show at Mexico's Pavilion"
      image={{
        src: "/images/mainliner/555-69.jpg",
        width: 266,
        height: 400,
        alt: "Native dancers perform during show at Mexico's Pavilion",
      }}
      previousHref="/mainliner55568"
      nextHref="/mainliner55570"
    />
  );
}
