import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5623 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5623 — Belgian Village - Cafe — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5623 (legacy plab5623.html).
 * Nav bar shows Page 24. NEXT → /photolab5624; PREVIOUS → /photolab5622.
 */
export default function PhotoLab5623Page() {
  return (
    <PhotoLabSlidePage
      slideId={5623}
      title="Photo Lab - General Tour - Slide 5623"
      image={{
        src: "/images/photolab/5623.jpg",
        width: 400,
        height: 267,
        alt: "Belgian Village - Cafe",
      }}
      captions={["Belgian Village - Cafe"]}
      previousHref="/photolab5622"
      nextHref="/photolab5624"
    />
  );
}
