import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-09 - Ford — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-09 — Ford Rotunda, 64 towering pylons at one end, exhibition hall at the other — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-09 (legacy mainliner55509.html).
 * Nav bar shows Page 10. NEXT → /mainliner55510; PREVIOUS → /mainliner55508.
 */
export default function Mainliner55509Page() {
  return (
    <MainlinerSlidePage
      slideId="555-09"
      title="Slide 555-09 - Ford"
      lead="555-09 Ford Rotunda - 64 towering pylons at one end, exhibition hall at other"
      image={{
        src: "/images/mainliner/555-09.jpg",
        width: 400,
        height: 271,
        alt: "Ford Rotunda - 64 towering pylons at one end, exhibition hall at other",
      }}
      previousHref="/mainliner55508"
      nextHref="/mainliner55510"
    />
  );
}
