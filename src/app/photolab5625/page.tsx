import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5625 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5625 — Belgian Village - Famous Gilles Dancers — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5625 (legacy plab5625.html).
 * Nav bar shows Page 26. NEXT → /photolab5626; PREVIOUS → /photolab5624.
 */
export default function PhotoLab5625Page() {
  return (
    <PhotoLabSlidePage
      slideId={5625}
      title="Photo Lab - General Tour - Slide 5625"
      image={{
        src: "/images/photolab/5625.jpg",
        width: 400,
        height: 267,
        alt: "Belgian Village - Famous Gilles Dancers",
      }}
      captions={["Belgian Village - Famous Gilles Dancers"]}
      previousHref="/photolab5624"
      nextHref="/photolab5626"
    />
  );
}
