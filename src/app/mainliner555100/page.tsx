import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-100 - Fountain of the Planets — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-100 — Fireworks and Fountain of the Planets display, night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-100 (legacy mainliner555100.html).
 * Nav bar shows Page 101. NEXT → /mainliner55501; PREVIOUS → /mainliner55599.
 */
export default function Mainliner555100Page() {
  return (
    <MainlinerSlidePage
      slideId="555-100"
      title="Slide 555-100 - Fountain of the Planets"
      lead="555-100 Fireworks and Fountain of the Planets display, night"
      image={{
        src: "/images/mainliner/555-100.jpg",
        width: 400,
        height: 267,
        alt: "Fireworks and Fountain of the Planets display, night",
      }}
      previousHref="/mainliner55599"
      nextHref="/mainliner55501"
    />
  );
}
