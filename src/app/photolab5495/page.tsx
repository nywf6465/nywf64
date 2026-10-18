import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5495 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5495 — Africa — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5495 (legacy plab5495.html).
 * Nav bar shows Page 26. NEXT → /photolab5496; PREVIOUS → /photolab5494.
 */
export default function PhotoLab5495Page() {
  return (
    <PhotoLabSlidePage
      slideId={5495}
      title="Photo Lab - International Area Set A - Slide 5495"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5495.jpg",
        width: 400,
        height: 267,
        alt: "Africa",
      }}
      captions={["Africa"]}
      previousHref="/photolab5494"
      nextHref="/photolab5496"
    />
  );
}
