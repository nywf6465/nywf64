import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5493 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5493 — Pakistan — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5493 (legacy plab5493.html).
 * Nav bar shows Page 24. NEXT → /photolab5494; PREVIOUS → /photolab5492.
 */
export default function PhotoLab5493Page() {
  return (
    <PhotoLabSlidePage
      slideId={5493}
      title="Photo Lab - International Area Set A - Slide 5493"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5493.jpg",
        width: 400,
        height: 267,
        alt: "Pakistan",
      }}
      captions={["Pakistan"]}
      previousHref="/photolab5492"
      nextHref="/photolab5494"
    />
  );
}
