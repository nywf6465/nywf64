import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-39 - Korea — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-39 — Concrete building of free-flowing contemporary lines, Korea Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-39 (legacy mainliner63339.html).
 * Nav bar shows Page 40. NEXT → /mainliner63340; PREVIOUS → /mainliner63338.
 */
export default function Mainliner63339Page() {
  return (
    <MainlinerSlidePage
      slideId="633-39"
      title="Slide 633-39 - Korea"
      lead="633-39 Concrete building of free-flowing contemporary lines, Korea Pavilion"
      image={{
        src: "/images/mainliner/633-39.jpg",
        width: 267,
        height: 400,
        alt: "Concrete building of free-flowing contemporary lines, Korea Pavilion",
      }}
      previousHref="/mainliner63338"
      nextHref="/mainliner63340"
    />
  );
}
