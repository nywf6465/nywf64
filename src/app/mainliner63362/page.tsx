import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-62 - Vatican — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-62 — Michelangelo\'s masterpiece, "Pieta", one of the most important religious works at the Fair, Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-62 (legacy mainliner63362.html).
 * Nav bar shows Page 63. NEXT → /mainliner63363; PREVIOUS → /mainliner63361.
 */
export default function Mainliner63362Page() {
  return (
    <MainlinerSlidePage
      slideId="633-62"
      title="Slide 633-62 - Vatican"
      lead={
        '633-62 Michelangelo\'s masterpiece, "Pieta", one of the most important religious works at the Fair, Vatican Pavilion'
      }
      image={{
        src: "/images/mainliner/633-62.jpg",
        width: 267,
        height: 400,
        alt: 'Michelangelo\'s masterpiece, "Pieta", one of the most important religious works at the Fair, Vatican Pavilion',
      }}
      previousHref="/mainliner63361"
      nextHref="/mainliner63363"
    />
  );
}
