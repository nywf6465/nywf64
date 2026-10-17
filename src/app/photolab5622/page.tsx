import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5622 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5622 — Belgian Village - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5622 (legacy plab5622.html).
 * Nav bar shows Page 23. NEXT → /photolab5623; PREVIOUS → /photolab5621.
 */
export default function PhotoLab5622Page() {
  return (
    <PhotoLabSlidePage
      slideId={5622}
      title="Photo Lab - General Tour - Slide 5622"
      image={{
        src: "/images/photolab/5622.jpg",
        width: 267,
        height: 400,
        alt: "Belgian Village - Night",
      }}
      captions={["Belgian Village - Night"]}
      previousHref="/photolab5621"
      nextHref="/photolab5623"
    />
  );
}
