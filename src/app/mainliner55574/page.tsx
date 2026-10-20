import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-74 - Africa — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-74 — Main entrance village of round huts in African Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-74 (legacy mainliner55574.html).
 * Nav bar shows Page 75. NEXT → /mainliner55575; PREVIOUS → /mainliner55573.
 */
export default function Mainliner55574Page() {
  return (
    <MainlinerSlidePage
      slideId="555-74"
      title="Slide 555-74 - Africa"
      lead="555-74 Main entrance village of round huts in African Pavilion"
      image={{
        src: "/images/mainliner/555-74.jpg",
        width: 400,
        height: 267,
        alt: "Main entrance village of round huts in African Pavilion",
      }}
      previousHref="/mainliner55573"
      nextHref="/mainliner55575"
    />
  );
}
