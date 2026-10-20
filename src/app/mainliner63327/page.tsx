import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-27 - West Virginia — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-27 — West Virginia's Pavilion - features a trip through a coal mine and glassblowing exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-27 (legacy mainliner63327.html).
 * Nav bar shows Page 28. NEXT → /mainliner63328; PREVIOUS → /mainliner63326.
 */
export default function Mainliner63327Page() {
  return (
    <MainlinerSlidePage
      slideId="633-27"
      title="Slide 633-27 - West Virginia"
      lead="633-27 West Virginia's Pavilion - features a trip through a coal mine and glassblowing exhibit"
      image={{
        src: "/images/mainliner/633-27.jpg",
        width: 400,
        height: 272,
        alt: "West Virginia's Pavilion - features a trip through a coal mine and glassblowing exhibit",
      }}
      previousHref="/mainliner63326"
      nextHref="/mainliner63328"
    />
  );
}
