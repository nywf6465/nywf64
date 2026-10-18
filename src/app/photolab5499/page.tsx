import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5499 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5499 — Greece — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5499 (legacy plab5499.html).
 * Nav bar shows Page 30. NEXT → /photolab5500; PREVIOUS → /photolab5498.
 */
export default function PhotoLab5499Page() {
  return (
    <PhotoLabSlidePage
      slideId={5499}
      title="Photo Lab - International Area Set A - Slide 5499"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5499.jpg",
        width: 400,
        height: 267,
        alt: "Greece",
      }}
      captions={["Greece"]}
      previousHref="/photolab5498"
      nextHref="/photolab5500"
    />
  );
}
