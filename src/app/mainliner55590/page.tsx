import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-90 - Vatican — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-90 — Vatican Pavilion - oval-shaped building topped by cross — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-90 (legacy mainliner55590.html).
 * Nav bar shows Page 91. NEXT → /mainliner55591; PREVIOUS → /mainliner55589.
 */
export default function Mainliner55590Page() {
  return (
    <MainlinerSlidePage
      slideId="555-90"
      title="Slide 555-90 - Vatican"
      lead="555-90 Vatican Pavilion - oval-shaped building topped by cross"
      image={{
        src: "/images/mainliner/555-90.jpg",
        width: 267,
        height: 400,
        alt: "Vatican Pavilion - oval-shaped building topped by cross",
      }}
      previousHref="/mainliner55589"
      nextHref="/mainliner55591"
    />
  );
}
