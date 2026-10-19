import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-12 - Chrysler — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-12 — Huge engine highlights Chrysler Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-12 (legacy mainliner55512.html).
 * Nav bar shows Page 13. NEXT → /mainliner55513; PREVIOUS → /mainliner55511.
 */
export default function Mainliner55512Page() {
  return (
    <MainlinerSlidePage
      slideId="555-12"
      title="Slide 555-12 - Chrysler"
      lead="555-12 Huge engine highlights Chrysler Pavilion"
      image={{
        src: "/images/mainliner/555-12.jpg",
        width: 400,
        height: 271,
        alt: "Huge engine highlights Chrysler Pavilion",
      }}
      previousHref="/mainliner55511"
      nextHref="/mainliner55513"
    />
  );
}
