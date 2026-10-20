import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-82 - British Lion Pub — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-82 — British Lion Publications Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-82 (legacy mainliner55582.html).
 * Nav bar shows Page 83. NEXT → /mainliner55583; PREVIOUS → /mainliner55581.
 */
export default function Mainliner55582Page() {
  return (
    <MainlinerSlidePage
      slideId="555-82"
      title="Slide 555-82 - British Lion Pub"
      lead="555-82 British Lion Publications Pavilion"
      image={{
        src: "/images/mainliner/555-82.jpg",
        width: 267,
        height: 400,
        alt: "British Lion Publications Pavilion",
      }}
      previousHref="/mainliner55581"
      nextHref="/mainliner55583"
    />
  );
}
