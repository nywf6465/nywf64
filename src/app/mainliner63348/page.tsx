import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-48 - Venezuela — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-48 — Tropic redwood building houses exhibits from Venezuela — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-48 (legacy mainliner63348.html).
 * Nav bar shows Page 49. NEXT → /mainliner63349; PREVIOUS → /mainliner63347.
 */
export default function Mainliner63348Page() {
  return (
    <MainlinerSlidePage
      slideId="633-48"
      title="Slide 633-48 - Venezuela"
      lead="633-48 Tropic redwood building houses exhibits from Venezuela"
      image={{
        src: "/images/mainliner/633-48.jpg",
        width: 400,
        height: 267,
        alt: "Tropic redwood building houses exhibits from Venezuela",
      }}
      previousHref="/mainliner63347"
      nextHref="/mainliner63349"
    />
  );
}
