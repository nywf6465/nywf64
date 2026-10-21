import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-77 - IBM — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-77 — White egg-shaped theater, 90-feet high and covered with letters IBM - International Business Machines — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-77 (legacy mainliner63377.html).
 * Nav bar shows Page 78. NEXT → /mainliner63378; PREVIOUS → /mainliner63376.
 */
export default function Mainliner63377Page() {
  return (
    <MainlinerSlidePage
      slideId="633-77"
      title="Slide 633-77 - IBM"
      lead="633-77 White egg-shaped theater, 90-feet high and covered with letters IBM - International Business Machines"
      image={{
        src: "/images/mainliner/633-77.jpg",
        width: 267,
        height: 400,
        alt: "White egg-shaped theater, 90-feet high and covered with letters IBM - International Business Machines",
      }}
      previousHref="/mainliner63376"
      nextHref="/mainliner63378"
    />
  );
}
