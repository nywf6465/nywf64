import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-73 - Greece — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-73 — Long front of building reflects classical heritage of Greece — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-73 (legacy mainliner55573.html).
 * Nav bar shows Page 74. NEXT → /mainliner55574; PREVIOUS → /mainliner55572.
 */
export default function Mainliner55573Page() {
  return (
    <MainlinerSlidePage
      slideId="555-73"
      title="Slide 555-73 - Greece"
      lead="555-73 Long front of building reflects classical heritage of Greece"
      image={{
        src: "/images/mainliner/555-73.jpg",
        width: 400,
        height: 267,
        alt: "Long front of building reflects classical heritage of Greece",
      }}
      previousHref="/mainliner55572"
      nextHref="/mainliner55574"
    />
  );
}
