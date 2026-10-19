import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-31 - Eastman Kodak — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-31 — Exhibit section of Eastman Kodak — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-31 (legacy mainliner55531.html).
 * Nav bar shows Page 32. NEXT → /mainliner55532; PREVIOUS → /mainliner55530.
 */
export default function Mainliner55531Page() {
  return (
    <MainlinerSlidePage
      slideId="555-31"
      title="Slide 555-31 - Eastman Kodak"
      lead="555-31 Exhibit section of Eastman Kodak"
      image={{
        src: "/images/mainliner/555-31.jpg",
        width: 400,
        height: 274,
        alt: "Exhibit section of Eastman Kodak",
      }}
      previousHref="/mainliner55530"
      nextHref="/mainliner55532"
    />
  );
}
