import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-99 - Fountain of the Planets — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-99 — Fireworks and Fountain of the Planets display, night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-99 (legacy mainliner55599.html).
 * Nav bar shows Page 100. NEXT → /mainliner555100; PREVIOUS → /mainliner55598.
 */
export default function Mainliner55599Page() {
  return (
    <MainlinerSlidePage
      slideId="555-99"
      title="Slide 555-99 - Fountain of the Planets"
      lead="555-99 Fireworks and Fountain of the Planets display, night"
      image={{
        src: "/images/mainliner/555-99.jpg",
        width: 400,
        height: 267,
        alt: "Fireworks and Fountain of the Planets display, night",
      }}
      previousHref="/mainliner55598"
      nextHref="/mainliner555100"
    />
  );
}
