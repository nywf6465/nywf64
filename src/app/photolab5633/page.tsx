import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5633 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5633 — African Pavilion - Native Dancers — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5633 (legacy plab5633.html).
 * Nav bar shows Page 34. NEXT → /photolab5634; PREVIOUS → /photolab5632.
 */
export default function PhotoLab5633Page() {
  return (
    <PhotoLabSlidePage
      slideId={5633}
      title="Photo Lab - General Tour - Slide 5633"
      image={{
        src: "/images/photolab/5633.jpg",
        width: 400,
        height: 267,
        alt: "African Pavilion - Native Dancers",
      }}
      captions={["African Pavilion - Native Dancers"]}
      previousHref="/photolab5632"
      nextHref="/photolab5634"
    />
  );
}
