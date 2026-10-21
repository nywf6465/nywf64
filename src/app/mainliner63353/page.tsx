import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-53 - Denmark — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-53 — Attractive display of Danish food and drink - Denmark Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-53 (legacy mainliner63353.html).
 * Nav bar shows Page 54. NEXT → /mainliner63354; PREVIOUS → /mainliner63352.
 */
export default function Mainliner63353Page() {
  return (
    <MainlinerSlidePage
      slideId="633-53"
      title="Slide 633-53 - Denmark"
      lead="633-53 Attractive display of Danish food and drink - Denmark Pavilion"
      image={{
        src: "/images/mainliner/633-53.jpg",
        width: 400,
        height: 267,
        alt: "Attractive display of Danish food and drink - Denmark Pavilion",
      }}
      previousHref="/mainliner63352"
      nextHref="/mainliner63354"
    />
  );
}
