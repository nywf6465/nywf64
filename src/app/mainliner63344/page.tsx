import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-44 - Mexico — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-44 — Glass and aluminum pavilion houses fantastic exhibits of Mexico — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-44 (legacy mainliner63344.html).
 * Nav bar shows Page 45. NEXT → /mainliner63345; PREVIOUS → /mainliner63343.
 */
export default function Mainliner63344Page() {
  return (
    <MainlinerSlidePage
      slideId="633-44"
      title="Slide 633-44 - Mexico"
      lead="633-44 Glass and aluminum pavilion houses fantastic exhibits of Mexico"
      image={{
        src: "/images/mainliner/633-44.jpg",
        width: 400,
        height: 267,
        alt: "Glass and aluminum pavilion houses fantastic exhibits of Mexico",
      }}
      previousHref="/mainliner63343"
      nextHref="/mainliner63345"
    />
  );
}
