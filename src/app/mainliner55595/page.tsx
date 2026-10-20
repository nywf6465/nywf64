import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-95 - Astral Fountain — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-95 — One of the nine spectacular fountains at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-95 (legacy mainliner55595.html).
 * Nav bar shows Page 96. NEXT → /mainliner55596; PREVIOUS → /mainliner55594.
 */
export default function Mainliner55595Page() {
  return (
    <MainlinerSlidePage
      slideId="555-95"
      title="Slide 555-95 - Astral Fountain"
      lead="555-95 One of the nine spectacular fountains at the Fair"
      image={{
        src: "/images/mainliner/555-95.jpg",
        width: 267,
        height: 400,
        alt: "One of the nine spectacular fountains at the Fair",
      }}
      previousHref="/mainliner55594"
      nextHref="/mainliner55596"
    />
  );
}
