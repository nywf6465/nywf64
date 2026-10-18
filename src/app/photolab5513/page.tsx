import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5513 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5513 — Berlin Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5513 (legacy plab5513.html).
 * Nav bar shows Page 44. NEXT → /photolab5514; PREVIOUS → /photolab5512.
 */
export default function PhotoLab5513Page() {
  return (
    <PhotoLabSlidePage
      slideId={5513}
      title="Photo Lab - International Area Set B - Slide 5513"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5513.jpg",
        width: 400,
        height: 267,
        alt: "Berlin Pavilion",
      }}
      captions={["Berlin Pavilion"]}
      previousHref="/photolab5512"
      nextHref="/photolab5514"
    />
  );
}
