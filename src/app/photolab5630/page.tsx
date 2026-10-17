import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5630 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5630 — Billy Graham Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5630 (legacy plab5630.html).
 * Nav bar shows Page 31. NEXT → /photolab5631; PREVIOUS → /photolab5629.
 */
export default function PhotoLab5630Page() {
  return (
    <PhotoLabSlidePage
      slideId={5630}
      title="Photo Lab - General Tour - Slide 5630"
      image={{
        src: "/images/photolab/5630.jpg",
        width: 400,
        height: 267,
        alt: "Billy Graham Pavilion",
      }}
      captions={["Billy Graham Pavilion"]}
      previousHref="/photolab5629"
      nextHref="/photolab5631"
    />
  );
}
