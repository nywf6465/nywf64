import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5522 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5522 — Circus — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5522 (legacy plab5522.html).
 * Nav bar shows Page 53. NEXT → /photolab5523; PREVIOUS → /photolab5521.
 */
export default function PhotoLab5522Page() {
  return (
    <PhotoLabSlidePage
      slideId={5522}
      title="Photo Lab - Lake Amusement Area - Slide 5522"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5522.jpg",
        width: 400,
        height: 267,
        alt: "Circus",
      }}
      captions={["Circus"]}
      previousHref="/photolab5521"
      nextHref="/photolab5523"
    />
  );
}
