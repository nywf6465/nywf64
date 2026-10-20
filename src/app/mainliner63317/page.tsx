import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-17 - Avis — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-17 — Antique model car takes visitors on ride down old-fashioned country lane at Avis Antique Car Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-17 (legacy mainliner63317.html).
 * Nav bar shows Page 18. NEXT → /mainliner63318; PREVIOUS → /mainliner63316.
 */
export default function Mainliner63317Page() {
  return (
    <MainlinerSlidePage
      slideId="633-17"
      title="Slide 633-17 - Avis"
      lead="633-17 Antique model car takes visitors on ride down old-fashioned country lane at Avis Antique Car Ride"
      image={{
        src: "/images/mainliner/633-17.jpg",
        width: 400,
        height: 267,
        alt: "Antique model car takes visitors on ride down old-fashioned country lane at Avis Antique Car Ride",
      }}
      previousHref="/mainliner63316"
      nextHref="/mainliner63318"
    />
  );
}
