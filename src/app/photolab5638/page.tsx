import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5638 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5638 — Thailand Pavilion Native Costumed Figure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5638 (legacy plab5638.html).
 * Nav bar shows Page 39. NEXT → /photolab5639; PREVIOUS → /photolab5637.
 */
export default function PhotoLab5638Page() {
  return (
    <PhotoLabSlidePage
      slideId={5638}
      title="Photo Lab - General Tour - Slide 5638"
      image={{
        src: "/images/photolab/5638.jpg",
        width: 267,
        height: 400,
        alt: "Thailand Pavilion Native Costumed Figure",
      }}
      captions={["Thailand Pavilion Native Costumed Figure"]}
      previousHref="/photolab5637"
      nextHref="/photolab5639"
    />
  );
}
