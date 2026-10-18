import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5650 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5650 — Unisphere Evening — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5650 (legacy plab5650.html).
 * Nav bar shows Page 51. NEXT → /photolab5601; PREVIOUS → /photolab5649.
 */
export default function PhotoLab5650Page() {
  return (
    <PhotoLabSlidePage
      slideId={5650}
      title="Photo Lab - General Tour - Slide 5650"
      image={{
        src: "/images/photolab/5650.jpg",
        width: 400,
        height: 267,
        alt: "Unisphere Evening",
      }}
      captions={["Unisphere Evening"]}
      previousHref="/photolab5649"
      nextHref="/photolab5601"
    />
  );
}
