import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-93 - Christian Science — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-93 — Christian Science Pavilion topped by a heptagonal pyramid of glass — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-93 (legacy mainliner55593.html).
 * Nav bar shows Page 94. NEXT → /mainliner55594; PREVIOUS → /mainliner55592.
 */
export default function Mainliner55593Page() {
  return (
    <MainlinerSlidePage
      slideId="555-93"
      title="Slide 555-93 - Christian Science"
      lead="555-93 Christian Science Pavilion topped by a heptagonal pyramid of glass"
      image={{
        src: "/images/mainliner/555-93.jpg",
        width: 400,
        height: 267,
        alt: "Christian Science Pavilion topped by a heptagonal pyramid of glass",
      }}
      previousHref="/mainliner55592"
      nextHref="/mainliner55594"
    />
  );
}
