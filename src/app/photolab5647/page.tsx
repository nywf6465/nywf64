import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5647 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5647 — General Motors - Interior Exploring The Moon’s Surface — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5647 (legacy plab5647.html).
 * Nav bar shows Page 48. NEXT → /photolab5648; PREVIOUS → /photolab5646.
 */
export default function PhotoLab5647Page() {
  return (
    <PhotoLabSlidePage
      slideId={5647}
      title="Photo Lab - General Tour - Slide 5647"
      image={{
        src: "/images/photolab/5647.jpg",
        width: 400,
        height: 267,
        alt: "General Motors - Interior Exploring The Moon's Surface",
      }}
      captions={["General Motors - Interior Exploring The Moon's Surface"]}
      previousHref="/photolab5646"
      nextHref="/photolab5648"
    />
  );
}
