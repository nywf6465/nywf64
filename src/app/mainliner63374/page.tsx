import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-74 - Johnson Wax — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-74 — Johnson Wax Pavilion - great gold disk housing 500-seat theater — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-74 (legacy mainliner63374.html).
 * Nav bar shows Page 75. NEXT → /mainliner63375; PREVIOUS → /mainliner63373.
 */
export default function Mainliner63374Page() {
  return (
    <MainlinerSlidePage
      slideId="633-74"
      title="Slide 633-74 - Johnson Wax"
      lead="633-74 Johnson Wax Pavilion - great gold disk housing 500-seat theater"
      image={{
        src: "/images/mainliner/633-74.jpg",
        width: 400,
        height: 267,
        alt: "Johnson Wax Pavilion - great gold disk housing 500-seat theater",
      }}
      previousHref="/mainliner63373"
      nextHref="/mainliner63375"
    />
  );
}
