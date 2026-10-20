import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-84 - Equitable Life Assurance Society — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-84 — Open concrete pavilion houses imposing exhibits of Equitable Life — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-84 (legacy mainliner55584.html).
 * Nav bar shows Page 85. NEXT → /mainliner55585; PREVIOUS → /mainliner55583.
 */
export default function Mainliner55584Page() {
  return (
    <MainlinerSlidePage
      slideId="555-84"
      title="Slide 555-84 - Equitable Life Assurance Society"
      lead="555-84 Open concrete pavilion houses imposing exhibits of Equitable Life"
      image={{
        src: "/images/mainliner/555-84.jpg",
        width: 400,
        height: 267,
        alt: "Open concrete pavilion houses imposing exhibits of Equitable Life",
      }}
      previousHref="/mainliner55583"
      nextHref="/mainliner55585"
    />
  );
}
