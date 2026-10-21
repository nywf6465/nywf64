import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-56 - Austria — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-56 — Austria's Pavilion fashioned from laminated Alpine spruce, suspended above ground from three soaring A-shaped supports — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-56 (legacy mainliner63356.html).
 * Nav bar shows Page 57. NEXT → /mainliner63357; PREVIOUS → /mainliner63355.
 */
export default function Mainliner63356Page() {
  return (
    <MainlinerSlidePage
      slideId="633-56"
      title="Slide 633-56 - Austria"
      lead={
        "633-56 Austria's Pavilion fashioned from laminated Alpine spruce, suspended above ground from three soaring A-shaped supports"
      }
      image={{
        src: "/images/mainliner/633-56.jpg",
        width: 400,
        height: 267,
        alt: "Austria's Pavilion fashioned from laminated Alpine spruce, suspended above ground from three soaring A-shaped supports",
      }}
      previousHref="/mainliner63355"
      nextHref="/mainliner63357"
    />
  );
}
