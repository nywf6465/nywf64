import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5634 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5634 — Ford Motor Pavilion - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5634 (legacy plab5634.html).
 * Nav bar shows Page 35. NEXT → /photolab5635; PREVIOUS → /photolab5633.
 */
export default function PhotoLab5634Page() {
  return (
    <PhotoLabSlidePage
      slideId={5634}
      title="Photo Lab - General Tour - Slide 5634"
      image={{
        src: "/images/photolab/5634.jpg",
        width: 400,
        height: 267,
        alt: "Ford Motor Pavilion - Night",
      }}
      captions={["Ford Motor Pavilion - Night"]}
      previousHref="/photolab5633"
      nextHref="/photolab5635"
    />
  );
}
