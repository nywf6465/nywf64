import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-60 - Switzerland — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-60 — Buildings resembling Alpine chalets feature Switzerland Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-60 (legacy mainliner55560.html).
 * Nav bar shows Page 61. NEXT → /mainliner55561; PREVIOUS → /mainliner55559.
 */
export default function Mainliner55560Page() {
  return (
    <MainlinerSlidePage
      slideId="555-60"
      title="Slide 555-60 - Switzerland"
      lead="555-60 Buildings resembling Alpine chalets feature Switzerland Pavilion"
      image={{
        src: "/images/mainliner/555-60.jpg",
        width: 267,
        height: 400,
        alt: "Buildings resembling Alpine chalets feature Switzerland Pavilion",
      }}
      previousHref="/mainliner55559"
      nextHref="/mainliner55561"
    />
  );
}
