import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5640 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5640 — Lunar Fountain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5640 (legacy plab5640.html).
 * Nav bar shows Page 41. NEXT → /photolab5641; PREVIOUS → /photolab5639.
 */
export default function PhotoLab5640Page() {
  return (
    <PhotoLabSlidePage
      slideId={5640}
      title="Photo Lab - General Tour - Slide 5640"
      image={{
        src: "/images/photolab/5640.jpg",
        width: 400,
        height: 267,
        alt: "Lunar Fountain",
      }}
      captions={["Lunar Fountain"]}
      previousHref="/photolab5639"
      nextHref="/photolab5641"
    />
  );
}
