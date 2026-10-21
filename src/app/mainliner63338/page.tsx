import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-38 - India — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-38 — Striking pavilion of India — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-38 (legacy mainliner63338.html).
 * Nav bar shows Page 39. NEXT → /mainliner63339; PREVIOUS → /mainliner63337.
 */
export default function Mainliner63338Page() {
  return (
    <MainlinerSlidePage
      slideId="633-38"
      title="Slide 633-38 - India"
      lead="633-38 Striking pavilion of India"
      image={{
        src: "/images/mainliner/633-38.jpg",
        width: 267,
        height: 400,
        alt: "Striking pavilion of India",
      }}
      previousHref="/mainliner63337"
      nextHref="/mainliner63339"
    />
  );
}
