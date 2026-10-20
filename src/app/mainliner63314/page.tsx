import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-14 - Transportation and Travel — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-14 — Big two-story Transportation and Travel Building with "Moon Dome" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-14 (legacy mainliner63314.html).
 * Nav bar shows Page 15. NEXT → /mainliner63315; PREVIOUS → /mainliner63313.
 */
export default function Mainliner63314Page() {
  return (
    <MainlinerSlidePage
      slideId="633-14"
      title="Slide 633-14 - Transportation and Travel"
      lead={
        '633-14 Big two-story Transportation and Travel Building with "Moon Dome"'
      }
      image={{
        src: "/images/mainliner/633-14.jpg",
        width: 400,
        height: 267,
        alt: 'Big two-story Transportation and Travel Building with "Moon Dome"',
      }}
      previousHref="/mainliner63313"
      nextHref="/mainliner63315"
    />
  );
}
