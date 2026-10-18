import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5526 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5526 — Hawaii — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5526 (legacy plab5526.html).
 * Nav bar shows Page 57. NEXT → /photolab5527; PREVIOUS → /photolab5525.
 */
export default function PhotoLab5526Page() {
  return (
    <PhotoLabSlidePage
      slideId={5526}
      title="Photo Lab - Lake Amusement Area - Slide 5526"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5526.jpg",
        width: 400,
        height: 267,
        alt: "Hawaii",
      }}
      captions={["Hawaii"]}
      previousHref="/photolab5525"
      nextHref="/photolab5527"
    />
  );
}
