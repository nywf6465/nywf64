import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-85 - Indonesia — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-85 — Graceful pavilion of Indonesia — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-85 (legacy mainliner55585.html).
 * Nav bar shows Page 86. NEXT → /mainliner55586; PREVIOUS → /mainliner55584.
 */
export default function Mainliner55585Page() {
  return (
    <MainlinerSlidePage
      slideId="555-85"
      title="Slide 555-85 - Indonesia"
      lead="555-85 Graceful pavilion of Indonesia"
      image={{
        src: "/images/mainliner/555-85.jpg",
        width: 267,
        height: 400,
        alt: "Graceful pavilion of Indonesia",
      }}
      previousHref="/mainliner55584"
      nextHref="/mainliner55586"
    />
  );
}
