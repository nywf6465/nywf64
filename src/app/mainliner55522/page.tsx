import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-22 - Illinois — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-22 — Statue of Abraham Lincoln, Illinois exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-22 (legacy mainliner55522.html).
 * Nav bar shows Page 23. NEXT → /mainliner55523; PREVIOUS → /mainliner55521.
 */
export default function Mainliner55522Page() {
  return (
    <MainlinerSlidePage
      slideId="555-22"
      title="Slide 555-22 - Illinois"
      lead="555-22 Statue of Abraham Lincoln, Illinois exhibit"
      image={{
        src: "/images/mainliner/555-22.jpg",
        width: 269,
        height: 400,
        alt: "Statue of Abraham Lincoln, Illinois exhibit",
      }}
      previousHref="/mainliner55521"
      nextHref="/mainliner55523"
    />
  );
}
