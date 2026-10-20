import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-07 - Unisphere — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-07 — Largest model of world ever built - 12-story high stainless steel Unisphere — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-07 (legacy mainliner63307.html).
 * Nav bar shows Page 8. NEXT → /mainliner63308; PREVIOUS → /mainliner63306.
 */
export default function Mainliner63307Page() {
  return (
    <MainlinerSlidePage
      slideId="633-07"
      title="Slide 633-07 - Unisphere"
      lead="633-07 Largest model of world ever built - 12-story high stainless steel Unisphere"
      image={{
        src: "/images/mainliner/633-07.jpg",
        width: 400,
        height: 271,
        alt: "Largest model of world ever built - 12-story high stainless steel Unisphere",
      }}
      previousHref="/mainliner63306"
      nextHref="/mainliner63308"
    />
  );
}
