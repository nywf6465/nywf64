import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5649 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5649 — Rocket Thrower & Fireworks — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5649 (legacy plab5649.html).
 * Nav bar shows Page 50. NEXT → /photolab5650; PREVIOUS → /photolab5648.
 */
export default function PhotoLab5649Page() {
  return (
    <PhotoLabSlidePage
      slideId={5649}
      title="Photo Lab - General Tour - Slide 5649"
      image={{
        src: "/images/photolab/5649.jpg",
        width: 400,
        height: 267,
        alt: "Rocket Thrower & Fireworks",
      }}
      captions={["Rocket Thrower & Fireworks"]}
      previousHref="/photolab5648"
      nextHref="/photolab5650"
    />
  );
}
