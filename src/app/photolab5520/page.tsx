import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5520 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5520 — Swiss Sky Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5520 (legacy plab5520.html).
 * Nav bar shows Page 51. NEXT → /photolab5521; PREVIOUS → /photolab5519.
 */
export default function PhotoLab5520Page() {
  return (
    <PhotoLabSlidePage
      slideId={5520}
      title="Photo Lab - International Area Set B - Slide 5520"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5520.jpg",
        width: 400,
        height: 267,
        alt: "Swiss Sky Ride",
      }}
      captions={["Swiss Sky Ride"]}
      previousHref="/photolab5519"
      nextHref="/photolab5521"
    />
  );
}
