import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-57 - American-Israel — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-57 — Spiral-shaped building houses 4000 years of Jewish history, American-Israel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-57 (legacy mainliner63357.html).
 * Nav bar shows Page 58. NEXT → /mainliner63358; PREVIOUS → /mainliner63356.
 */
export default function Mainliner63357Page() {
  return (
    <MainlinerSlidePage
      slideId="633-57"
      title="Slide 633-57 - American-Israel"
      lead="633-57 Spiral-shaped building houses 4000 years of Jewish history, American-Israel Pavilion"
      image={{
        src: "/images/mainliner/633-57.jpg",
        width: 400,
        height: 267,
        alt: "Spiral-shaped building houses 4000 years of Jewish history, American-Israel Pavilion",
      }}
      previousHref="/mainliner63356"
      nextHref="/mainliner63358"
    />
  );
}
