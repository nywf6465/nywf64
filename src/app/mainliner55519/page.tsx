import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-19 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-19 — Mammoth terrazzo motoring map in New York's $11.5 million pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-19 (legacy mainliner55519.html).
 * Nav bar shows Page 20. NEXT → /mainliner55520; PREVIOUS → /mainliner55518.
 */
export default function Mainliner55519Page() {
  return (
    <MainlinerSlidePage
      slideId="555-19"
      title="Slide 555-19 - New York State"
      lead="555-19 Mammoth terrazzo motoring map in New York's $11.5 million pavilion"
      image={{
        src: "/images/mainliner/555-19.jpg",
        width: 272,
        height: 400,
        alt: "Mammoth terrazzo motoring map in New York's $11.5 million pavilion",
      }}
      previousHref="/mainliner55518"
      nextHref="/mainliner55520"
    />
  );
}
