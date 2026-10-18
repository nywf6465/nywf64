import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5497 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5497 — Morocco — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5497 (legacy plab5497.html).
 * Nav bar shows Page 28. NEXT → /photolab5498; PREVIOUS → /photolab5496.
 */
export default function PhotoLab5497Page() {
  return (
    <PhotoLabSlidePage
      slideId={5497}
      title="Photo Lab - International Area Set A - Slide 5497"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5497.jpg",
        width: 400,
        height: 267,
        alt: "Morocco",
      }}
      captions={["Morocco"]}
      previousHref="/photolab5496"
      nextHref="/photolab5498"
    />
  );
}
