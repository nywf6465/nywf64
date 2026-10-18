import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5496 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5496 — Mexico — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5496 (legacy plab5496.html).
 * Nav bar shows Page 27. NEXT → /photolab5497; PREVIOUS → /photolab5495.
 */
export default function PhotoLab5496Page() {
  return (
    <PhotoLabSlidePage
      slideId={5496}
      title="Photo Lab - International Area Set A - Slide 5496"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5496.jpg",
        width: 400,
        height: 267,
        alt: "Mexico",
      }}
      captions={["Mexico"]}
      previousHref="/photolab5495"
      nextHref="/photolab5497"
    />
  );
}
