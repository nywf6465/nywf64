import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5635 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5635 — Ford Motor Pavilion - Dawn of Life Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5635 (legacy plab5635.html).
 * Nav bar shows Page 36. NEXT → /photolab5636; PREVIOUS → /photolab5634.
 */
export default function PhotoLab5635Page() {
  return (
    <PhotoLabSlidePage
      slideId={5635}
      title="Photo Lab - General Tour - Slide 5635"
      image={{
        src: "/images/photolab/5635.jpg",
        width: 400,
        height: 267,
        alt: "Ford Motor Pavilion - Dawn of Life Exhibit",
      }}
      captions={["Ford Motor Pavilion - Dawn of Life Exhibit"]}
      previousHref="/photolab5634"
      nextHref="/photolab5636"
    />
  );
}
