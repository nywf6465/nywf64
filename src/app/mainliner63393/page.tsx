import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-93 - Jaycopter Ride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-93 — Visitors enjoy sensations of flying/piloting a helicopter on Jaycopter Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-93 (legacy mainliner63393.html).
 * Nav bar shows Page 94. NEXT → /mainliner63394; PREVIOUS → /mainliner63392.
 */
export default function Mainliner63393Page() {
  return (
    <MainlinerSlidePage
      slideId="633-93"
      title="Slide 633-93 - Jaycopter Ride"
      lead="633-93 Visitors enjoy sensations of flying/piloting a helicopter on Jaycopter Ride"
      image={{
        src: "/images/mainliner/633-93.jpg",
        width: 268,
        height: 400,
        alt: "Visitors enjoy sensations of flying/piloting a helicopter on Jaycopter Ride",
      }}
      previousHref="/mainliner63392"
      nextHref="/mainliner63394"
    />
  );
}
