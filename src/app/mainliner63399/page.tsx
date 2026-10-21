import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-99 - Fountains of the Fair — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-99 — Night view of U.S. Steel Unisphere with Fountains of the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-99 (legacy mainliner63399.html).
 * Nav bar shows Page 100. NEXT → /mainliner633100; PREVIOUS → /mainliner63398.
 */
export default function Mainliner63399Page() {
  return (
    <MainlinerSlidePage
      slideId="633-99"
      title="Slide 633-99 - Fountains of the Fair"
      lead="633-99 Night view of U.S. Steel Unisphere with Fountains of the Fair"
      image={{
        src: "/images/mainliner/633-99.jpg",
        width: 400,
        height: 267,
        alt: "Night view of U.S. Steel Unisphere with Fountains of the Fair",
      }}
      previousHref="/mainliner63398"
      nextHref="/mainliner633100"
    />
  );
}
