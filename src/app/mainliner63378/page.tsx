import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-78 - Travelers Insurance — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-78 — Travelers Insurance has pavilion modeled after Travelers' red umbrella trademark — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-78 (legacy mainliner63378.html).
 * Nav bar shows Page 79. NEXT → /mainliner63379; PREVIOUS → /mainliner63377.
 */
export default function Mainliner63378Page() {
  return (
    <MainlinerSlidePage
      slideId="633-78"
      title="Slide 633-78 - Travelers Insurance"
      lead={
        "633-78 Travelers Insurance has pavilion modeled after Travelers' red umbrella trademark"
      }
      image={{
        src: "/images/mainliner/633-78.jpg",
        width: 400,
        height: 259,
        alt: "Travelers Insurance has pavilion modeled after Travelers' red umbrella trademark",
      }}
      previousHref="/mainliner63377"
      nextHref="/mainliner63379"
    />
  );
}
