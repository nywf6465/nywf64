import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5515 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5515 — Pavilion of India — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5515 (legacy plab5515.html).
 * Nav bar shows Page 46. NEXT → /photolab5516; PREVIOUS → /photolab5514.
 */
export default function PhotoLab5515Page() {
  return (
    <PhotoLabSlidePage
      slideId={5515}
      title="Photo Lab - International Area Set B - Slide 5515"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5515.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of India",
      }}
      captions={["Pavilion of India"]}
      previousHref="/photolab5514"
      nextHref="/photolab5516"
    />
  );
}
