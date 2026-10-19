import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-11 - U.S. Rubber — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-11 — Plastic gondolas whirl around U.S. Rubber's 80-foot whitewall tire — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-11 (legacy mainliner55511.html).
 * Nav bar shows Page 12. NEXT → /mainliner55512; PREVIOUS → /mainliner55510.
 */
export default function Mainliner55511Page() {
  return (
    <MainlinerSlidePage
      slideId="555-11"
      title="Slide 555-11 - U.S. Rubber"
      lead="555-11 Plastic gondolas whirl around U.S. Rubber's 80-foot whitewall tire"
      image={{
        src: "/images/mainliner/555-11.jpg",
        width: 272,
        height: 400,
        alt: "Plastic gondolas whirl around U.S. Rubber's 80-foot whitewall tire",
      }}
      previousHref="/mainliner55510"
      nextHref="/mainliner55512"
    />
  );
}
