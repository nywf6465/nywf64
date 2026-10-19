import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-43 - Lunar Fountain — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-43 — Lunar Fountain - central bubble of water 24-feet in diameter — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-43 (legacy mainliner55543.html).
 * Nav bar shows Page 44. NEXT → /mainliner55544; PREVIOUS → /mainliner55542.
 */
export default function Mainliner55543Page() {
  return (
    <MainlinerSlidePage
      slideId="555-43"
      title="Slide 555-43 - Lunar Fountain"
      lead="555-43 Lunar Fountain - central bubble of water 24-feet in diameter"
      image={{
        src: "/images/mainliner/555-43.jpg",
        width: 400,
        height: 267,
        alt: "Lunar Fountain - central bubble of water 24-feet in diameter",
      }}
      previousHref="/mainliner55542"
      nextHref="/mainliner55544"
    />
  );
}
