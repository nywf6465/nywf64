import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-03 - Panoramic View — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-03 — Panoramic view of amazing domes, towers and architectural fantasies — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-03 (legacy mainliner55503.html).
 * Nav bar shows Page 4. NEXT → /mainliner55504; PREVIOUS → /mainliner55502.
 */
export default function Mainliner55503Page() {
  return (
    <MainlinerSlidePage
      slideId="555-03"
      title="Slide 555-03 - Panoramic View"
      lead="555-03 Panoramic view of amazing domes, towers and architectural fantasies"
      image={{
        src: "/images/mainliner/555-03.jpg",
        width: 400,
        height: 268,
        alt: "Panoramic view of amazing domes, towers and architectural fantasies",
      }}
      previousHref="/mainliner55502"
      nextHref="/mainliner55504"
    />
  );
}
