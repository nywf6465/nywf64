import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-06 - Flying Flags — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-06 — Colorful flags fly on each side of Meadow Lake Bridge — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-06 (legacy mainliner63306.html).
 * Nav bar shows Page 7. NEXT → /mainliner63307; PREVIOUS → /mainliner63305.
 */
export default function Mainliner63306Page() {
  return (
    <MainlinerSlidePage
      slideId="633-06"
      title="Slide 633-06 - Flying Flags"
      lead="633-06 Colorful flags fly on each side of Meadow Lake Bridge"
      image={{
        src: "/images/mainliner/633-06.jpg",
        width: 400,
        height: 267,
        alt: "Colorful flags fly on each side of Meadow Lake Bridge",
      }}
      previousHref="/mainliner63305"
      nextHref="/mainliner63307"
    />
  );
}
