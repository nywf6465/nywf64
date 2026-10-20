import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-94 - Masonic Center — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-94 — Masonic Brotherhood Center with 50-foot-high model of symbols of the fraternity — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-94 (legacy mainliner55594.html).
 * Nav bar shows Page 95. NEXT → /mainliner55595; PREVIOUS → /mainliner55593.
 */
export default function Mainliner55594Page() {
  return (
    <MainlinerSlidePage
      slideId="555-94"
      title="Slide 555-94 - Masonic Center"
      lead="555-94 Masonic Brotherhood Center with 50-foot-high model of symbols of the fraternity"
      image={{
        src: "/images/mainliner/555-94.jpg",
        width: 400,
        height: 267,
        alt: "Masonic Brotherhood Center with 50-foot-high model of symbols of the fraternity",
      }}
      previousHref="/mainliner55593"
      nextHref="/mainliner55595"
    />
  );
}
