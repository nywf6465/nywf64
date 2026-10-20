import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-61 - Pakistan — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-61 — Pakistan Pavilion - lava stone topped by petal-shaped dome in traditional Islamic architecture — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-61 (legacy mainliner55561.html).
 * Nav bar shows Page 62. NEXT → /mainliner55562; PREVIOUS → /mainliner55560.
 */
export default function Mainliner55561Page() {
  return (
    <MainlinerSlidePage
      slideId="555-61"
      title="Slide 555-61 - Pakistan"
      lead="555-61 Pakistan Pavilion - lava stone topped by petal-shaped dome in traditional Islamic architecture"
      image={{
        src: "/images/mainliner/555-61.jpg",
        width: 400,
        height: 267,
        alt: "Pakistan Pavilion - lava stone topped by petal-shaped dome in traditional Islamic architecture",
      }}
      previousHref="/mainliner55560"
      nextHref="/mainliner55562"
    />
  );
}
