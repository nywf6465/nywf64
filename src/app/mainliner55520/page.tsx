import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-20 - Transportation and Travel — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-20 — Big two-story Transportation and Travel Building with "Moon Dome" — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-20 (legacy mainliner55520.html).
 * Nav bar shows Page 21. NEXT → /mainliner55521; PREVIOUS → /mainliner55519.
 */
export default function Mainliner55520Page() {
  return (
    <MainlinerSlidePage
      slideId="555-20"
      title="Slide 555-20 - Transportation and Travel"
      lead={
        '555-20 Big two-story Transportation and Travel Building with "Moon Dome"'
      }
      image={{
        src: "/images/mainliner/555-20.jpg",
        width: 400,
        height: 271,
        alt: 'Big two-story Transportation and Travel Building with "Moon Dome"',
      }}
      previousHref="/mainliner55519"
      nextHref="/mainliner55521"
    />
  );
}
