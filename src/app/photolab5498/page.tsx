import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5498 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5498 — Sudan — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5498 (legacy plab5498.html).
 * Nav bar shows Page 29. NEXT → /photolab5499; PREVIOUS → /photolab5497.
 */
export default function PhotoLab5498Page() {
  return (
    <PhotoLabSlidePage
      slideId={5498}
      title="Photo Lab - International Area Set A - Slide 5498"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5498.jpg",
        width: 400,
        height: 267,
        alt: "Sudan",
      }}
      captions={["Sudan"]}
      previousHref="/photolab5497"
      nextHref="/photolab5499"
    />
  );
}
