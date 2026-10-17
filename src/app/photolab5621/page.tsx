import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5621 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5621 — Pavilion of India — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5621 (legacy plab5621.html).
 * Nav bar shows Page 22. NEXT → /photolab5622; PREVIOUS → /photolab5620.
 */
export default function PhotoLab5621Page() {
  return (
    <PhotoLabSlidePage
      slideId={5621}
      title="Photo Lab - General Tour - Slide 5621"
      image={{
        src: "/images/photolab/5621.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of India",
      }}
      captions={["Pavilion of India"]}
      previousHref="/photolab5620"
      nextHref="/photolab5622"
    />
  );
}
