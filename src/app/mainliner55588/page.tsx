import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-88 - Mormon Church — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-88 — Striking three towered Mormon Church Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-88 (legacy mainliner55588.html).
 * Nav bar shows Page 89. NEXT → /mainliner55589; PREVIOUS → /mainliner55587.
 */
export default function Mainliner55588Page() {
  return (
    <MainlinerSlidePage
      slideId="555-88"
      title="Slide 555-88 - Mormon Church"
      lead="555-88 Striking three towered Mormon Church Pavilion"
      image={{
        src: "/images/mainliner/555-88.jpg",
        width: 267,
        height: 400,
        alt: "Striking three towered Mormon Church Pavilion",
      }}
      previousHref="/mainliner55587"
      nextHref="/mainliner55589"
    />
  );
}
