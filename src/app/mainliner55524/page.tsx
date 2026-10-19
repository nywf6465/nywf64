import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-24 - IBM — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-24 — White egg-shaped theater, 90-feet high and covered with letters IBM - International Business Machines — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-24 (legacy mainliner55524.html).
 * Nav bar shows Page 25. NEXT → /mainliner55525; PREVIOUS → /mainliner55523.
 */
export default function Mainliner55524Page() {
  return (
    <MainlinerSlidePage
      slideId="555-24"
      title="Slide 555-24 - IBM"
      lead={
        "555-24 White egg-shaped theater, 90-feet high and covered with letters IBM\u00A0- International Business Machines"
      }
      image={{
        src: "/images/mainliner/555-24.jpg",
        width: 400,
        height: 274,
        alt: "White egg-shaped theater, 90-feet high and covered with letters IBM - International Business Machines",
      }}
      previousHref="/mainliner55523"
      nextHref="/mainliner55525"
    />
  );
}
