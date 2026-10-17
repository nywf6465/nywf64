import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5639 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5639 — Emmett Kelly, Jr. - Kodak Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5639 (legacy plab5639.html).
 * Nav bar shows Page 40. NEXT → /photolab5640; PREVIOUS → /photolab5638.
 */
export default function PhotoLab5639Page() {
  return (
    <PhotoLabSlidePage
      slideId={5639}
      title="Photo Lab - General Tour - Slide 5639"
      image={{
        src: "/images/photolab/5639.jpg",
        width: 267,
        height: 400,
        alt: "Emmett Kelly, Jr. - Kodak Pavilion",
      }}
      captions={["Emmett Kelly, Jr. - Kodak Pavilion"]}
      previousHref="/photolab5638"
      nextHref="/photolab5640"
    />
  );
}
