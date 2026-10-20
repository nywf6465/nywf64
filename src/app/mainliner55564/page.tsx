import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-64 - United Arab Republic — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-64 — Triple arched pavilion of United Arab Republic — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-64 (legacy mainliner55564.html).
 * Nav bar shows Page 65. NEXT → /mainliner55565; PREVIOUS → /mainliner55563.
 */
export default function Mainliner55564Page() {
  return (
    <MainlinerSlidePage
      slideId="555-64"
      title="Slide 555-64 - United Arab Republic"
      lead="555-64 Triple arched pavilion of United Arab Republic"
      image={{
        src: "/images/mainliner/555-64.jpg",
        width: 400,
        height: 267,
        alt: "Triple arched pavilion of United Arab Republic",
      }}
      previousHref="/mainliner55563"
      nextHref="/mainliner55565"
    />
  );
}
