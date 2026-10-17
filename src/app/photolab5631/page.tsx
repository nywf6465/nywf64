import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5631 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5631 — Lincoln - Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5631 (legacy plab5631.html).
 * Nav bar shows Page 32. NEXT → /photolab5632; PREVIOUS → /photolab5630.
 */
export default function PhotoLab5631Page() {
  return (
    <PhotoLabSlidePage
      slideId={5631}
      title="Photo Lab - General Tour - Slide 5631"
      image={{
        src: "/images/photolab/5631.jpg",
        width: 267,
        height: 400,
        alt: "Lincoln - Illinois Pavilion",
      }}
      captions={["Lincoln - Illinois Pavilion"]}
      previousHref="/photolab5630"
      nextHref="/photolab5632"
    />
  );
}
