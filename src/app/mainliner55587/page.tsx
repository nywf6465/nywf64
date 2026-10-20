import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-87 - Central America-Panama — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-87 — Attractive open-sided building of Central America - Panama — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-87 (legacy mainliner55587.html).
 * Nav bar shows Page 88. NEXT → /mainliner55588; PREVIOUS → /mainliner55586.
 */
export default function Mainliner55587Page() {
  return (
    <MainlinerSlidePage
      slideId="555-87"
      title="Slide 555-87 - Central America-Panama"
      lead="555-87 Attractive open-sided building of Central America - Panama"
      image={{
        src: "/images/mainliner/555-87.jpg",
        width: 400,
        height: 267,
        alt: "Attractive open-sided building of Central America - Panama",
      }}
      previousHref="/mainliner55586"
      nextHref="/mainliner55588"
    />
  );
}
