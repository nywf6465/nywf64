import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-72 - Philippines — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-72 — Elaborate panel of carved wood on display in Philippines Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-72 (legacy mainliner55572.html).
 * Nav bar shows Page 73. NEXT → /mainliner55573; PREVIOUS → /mainliner55571.
 */
export default function Mainliner55572Page() {
  return (
    <MainlinerSlidePage
      slideId="555-72"
      title="Slide 555-72 - Philippines"
      lead="555-72 Elaborate panel of carved wood on display in Philippines Pavilion"
      image={{
        src: "/images/mainliner/555-72.jpg",
        width: 400,
        height: 267,
        alt: "Elaborate panel of carved wood on display in Philippines Pavilion",
      }}
      previousHref="/mainliner55571"
      nextHref="/mainliner55573"
    />
  );
}
