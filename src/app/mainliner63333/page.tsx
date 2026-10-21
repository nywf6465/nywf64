import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-33 - Minnesota — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-33 — Kensington Runestone, believed to be relic of Viking Expedition in Minnesota in 1362, is feature of Minnesota Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-33 (legacy mainliner63333.html).
 * Nav bar shows Page 34. NEXT → /mainliner63334; PREVIOUS → /mainliner63332.
 */
export default function Mainliner63333Page() {
  return (
    <MainlinerSlidePage
      slideId="633-33"
      title="Slide 633-33 - Minnesota"
      lead="633-33 Kensington Runestone, believed to be relic of Viking Expedition in Minnesota in 1362, is feature of Minnesota Pavilion"
      image={{
        src: "/images/mainliner/633-33.jpg",
        width: 400,
        height: 267,
        alt: "Kensington Runestone, believed to be relic of Viking Expedition in Minnesota in 1362, is feature of Minnesota Pavilion",
      }}
      previousHref="/mainliner63332"
      nextHref="/mainliner63334"
    />
  );
}
