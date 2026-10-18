import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5525 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5525 — Santa Maria — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5525 (legacy plab5525.html).
 * Nav bar shows Page 56. NEXT → /photolab5526; PREVIOUS → /photolab5524.
 */
export default function PhotoLab5525Page() {
  return (
    <PhotoLabSlidePage
      slideId={5525}
      title="Photo Lab - Lake Amusement Area - Slide 5525"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5525.jpg",
        width: 400,
        height: 267,
        alt: "Santa Maria",
      }}
      captions={["Santa Maria"]}
      previousHref="/photolab5524"
      nextHref="/photolab5526"
    />
  );
}
