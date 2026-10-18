import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5514 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5514 — Pavilion of Africa — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5514 (legacy plab5514.html).
 * Nav bar shows Page 45. NEXT → /photolab5515; PREVIOUS → /photolab5513.
 */
export default function PhotoLab5514Page() {
  return (
    <PhotoLabSlidePage
      slideId={5514}
      title="Photo Lab - International Area Set B - Slide 5514"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5514.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Africa",
      }}
      captions={["Pavilion of Africa"]}
      previousHref="/photolab5513"
      nextHref="/photolab5515"
    />
  );
}
