import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5612 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5612 — Swiss Sky Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5612 (legacy plab5612.html).
 * Nav bar shows Page 13. NEXT → /photolab5613; PREVIOUS → /photolab5611.
 */
export default function PhotoLab5612Page() {
  return (
    <PhotoLabSlidePage
      slideId={5612}
      title="Photo Lab - General Tour - Slide 5612"
      image={{
        src: "/images/photolab/5612.jpg",
        width: 400,
        height: 267,
        alt: "Swiss Sky Ride",
      }}
      captions={["Swiss Sky Ride"]}
      previousHref="/photolab5611"
      nextHref="/photolab5613"
    />
  );
}
