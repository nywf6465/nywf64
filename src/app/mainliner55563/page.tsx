import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-63 - Sudan — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-63 — Pavilion of contemporary Islamic architecture, capped with translucent dome houses Sudan exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-63 (legacy mainliner55563.html).
 * Nav bar shows Page 64. NEXT → /mainliner55564; PREVIOUS → /mainliner55562.
 */
export default function Mainliner55563Page() {
  return (
    <MainlinerSlidePage
      slideId="555-63"
      title="Slide 555-63 - Sudan"
      lead="555-63 Pavilion of contemporary Islamic architecture, capped with translucent dome houses Sudan exhibit"
      image={{
        src: "/images/mainliner/555-63.jpg",
        width: 267,
        height: 400,
        alt: "Pavilion of contemporary Islamic architecture, capped with translucent dome houses Sudan exhibit",
      }}
      previousHref="/mainliner55562"
      nextHref="/mainliner55564"
    />
  );
}
