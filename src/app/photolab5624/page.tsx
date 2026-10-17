import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5624 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5624 — Belgian Village - Street Scene — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5624 (legacy plab5624.html).
 * Nav bar shows Page 25. NEXT → /photolab5625; PREVIOUS → /photolab5623.
 */
export default function PhotoLab5624Page() {
  return (
    <PhotoLabSlidePage
      slideId={5624}
      title="Photo Lab - General Tour - Slide 5624"
      image={{
        src: "/images/photolab/5624.jpg",
        width: 267,
        height: 400,
        alt: "Belgian Village - Street Scene",
      }}
      captions={["Belgian Village - Street Scene"]}
      previousHref="/photolab5623"
      nextHref="/photolab5625"
    />
  );
}
