import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-73 - Eastman Kodak — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-73 — Eastman Kodak Pavilion at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-73 (legacy mainliner63373.html).
 * Nav bar shows Page 74. NEXT → /mainliner63374; PREVIOUS → /mainliner63372.
 */
export default function Mainliner63373Page() {
  return (
    <MainlinerSlidePage
      slideId="633-73"
      title="Slide 633-73 - Eastman Kodak"
      lead="633-73 Eastman Kodak Pavilion at night"
      image={{
        src: "/images/mainliner/633-73.jpg",
        width: 267,
        height: 400,
        alt: "Eastman Kodak Pavilion at night",
      }}
      previousHref="/mainliner63372"
      nextHref="/mainliner63374"
    />
  );
}
