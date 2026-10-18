import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5523 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5523 — A M F Monorail — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5523 (legacy plab5523.html).
 * Nav bar shows Page 54. NEXT → /photolab5524; PREVIOUS → /photolab5522.
 */
export default function PhotoLab5523Page() {
  return (
    <PhotoLabSlidePage
      slideId={5523}
      title="Photo Lab - Lake Amusement Area - Slide 5523"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5523.jpg",
        width: 400,
        height: 267,
        alt: "A M F Monorail",
      }}
      captions={["A\u00A0M\u00A0F\u00A0Monorail"]}
      previousHref="/photolab5522"
      nextHref="/photolab5524"
    />
  );
}
