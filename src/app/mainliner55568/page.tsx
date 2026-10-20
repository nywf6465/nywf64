import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-68 - Mexico — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-68 — Glass and aluminum pavilion houses fantastic exhibit of Mexico — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-68 (legacy mainliner55568.html).
 * Nav bar shows Page 69. NEXT → /mainliner55569; PREVIOUS → /mainliner55567.
 */
export default function Mainliner55568Page() {
  return (
    <MainlinerSlidePage
      slideId="555-68"
      title="Slide 555-68 - Mexico"
      lead="555-68 Glass and aluminum pavilion houses fantastic exhibit of Mexico"
      image={{
        src: "/images/mainliner/555-68.jpg",
        width: 267,
        height: 400,
        alt: "Glass and aluminum pavilion houses fantastic exhibit of Mexico",
      }}
      previousHref="/mainliner55567"
      nextHref="/mainliner55569"
    />
  );
}
