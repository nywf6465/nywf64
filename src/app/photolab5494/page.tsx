import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5494 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5494 — Phillippines — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5494 (legacy plab5494.html).
 * Nav bar shows Page 25. NEXT → /photolab5495; PREVIOUS → /photolab5493.
 */
export default function PhotoLab5494Page() {
  return (
    <PhotoLabSlidePage
      slideId={5494}
      title="Photo Lab - International Area Set A - Slide 5494"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5494.jpg",
        width: 400,
        height: 267,
        alt: "Phillippines",
      }}
      captions={["Phillippines"]}
      previousHref="/photolab5493"
      nextHref="/photolab5495"
    />
  );
}
