import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5516 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5516 — Polynesian Restaurant — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5516 (legacy plab5516.html).
 * Nav bar shows Page 47. NEXT → /photolab5517; PREVIOUS → /photolab5515.
 */
export default function PhotoLab5516Page() {
  return (
    <PhotoLabSlidePage
      slideId={5516}
      title="Photo Lab - International Area Set B - Slide 5516"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5516.jpg",
        width: 400,
        height: 267,
        alt: "Polynesian Restaurant",
      }}
      captions={["Polynesian Restaurant"]}
      previousHref="/photolab5515"
      nextHref="/photolab5517"
    />
  );
}
