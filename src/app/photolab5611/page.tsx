import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5611 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5611 — Pavilion of Centralamerica - Panama — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5611 (legacy plab5611.html).
 * Nav bar shows Page 12. NEXT → /photolab5612; PREVIOUS → /photolab5610.
 */
export default function PhotoLab5611Page() {
  return (
    <PhotoLabSlidePage
      slideId={5611}
      title="Photo Lab - General Tour - Slide 5611"
      image={{
        src: "/images/photolab/5611.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Centralamerica - Panama",
      }}
      captions={["Pavilion of Centralamerica - Panama"]}
      previousHref="/photolab5610"
      nextHref="/photolab5612"
    />
  );
}
