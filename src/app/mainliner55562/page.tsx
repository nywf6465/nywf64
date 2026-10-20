import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-62 - Sierra Leone — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-62 — Three conic shapes floating above glass walls feature Sierra Leonne Pavilion's architecture — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-62 (legacy mainliner55562.html).
 * Nav bar shows Page 63. NEXT → /mainliner55563; PREVIOUS → /mainliner55561.
 */
export default function Mainliner55562Page() {
  return (
    <MainlinerSlidePage
      slideId="555-62"
      title="Slide 555-62 - Sierra Leone"
      lead="555-62 Three conic shapes floating above glass walls feature Sierra Leonne Pavilion's architecture"
      image={{
        src: "/images/mainliner/555-62.jpg",
        width: 400,
        height: 267,
        alt: "Three conic shapes floating above glass walls feature Sierra Leonne Pavilion's architecture",
      }}
      previousHref="/mainliner55561"
      nextHref="/mainliner55563"
    />
  );
}
