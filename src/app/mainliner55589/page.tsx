import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-89 - Protestant and Orthodox Center — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-89 — Protestant and Orthodox Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-89 (legacy mainliner55589.html).
 * Nav bar shows Page 90. NEXT → /mainliner55590; PREVIOUS → /mainliner55588.
 */
export default function Mainliner55589Page() {
  return (
    <MainlinerSlidePage
      slideId="555-89"
      title="Slide 555-89 - Protestant and Orthodox Center"
      lead="555-89 Protestant and Orthodox Center"
      image={{
        src: "/images/mainliner/555-89.jpg",
        width: 267,
        height: 400,
        alt: "Protestant and Orthodox Center",
      }}
      previousHref="/mainliner55588"
      nextHref="/mainliner55590"
    />
  );
}
