import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5610 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5610 — Republic of China — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5610 (legacy plab5610.html).
 * Nav bar shows Page 11. NEXT → /photolab5611; PREVIOUS → /photolab5609.
 */
export default function PhotoLab5610Page() {
  return (
    <PhotoLabSlidePage
      slideId={5610}
      title="Photo Lab - General Tour - Slide 5610"
      image={{
        src: "/images/photolab/5610.jpg",
        width: 267,
        height: 400,
        alt: "Republic of China",
      }}
      captions={["Republic of China"]}
      previousHref="/photolab5609"
      nextHref="/photolab5611"
    />
  );
}
