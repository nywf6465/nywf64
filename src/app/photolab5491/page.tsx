import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5491 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5491 — Thailand - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5491 (legacy plab5491.html).
 * Nav bar shows Page 22. NEXT → /photolab5492; PREVIOUS → /photolab5490.
 */
export default function PhotoLab5491Page() {
  return (
    <PhotoLabSlidePage
      slideId={5491}
      title="Photo Lab - International Area Set A - Slide 5491"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5491.jpg",
        width: 267,
        height: 400,
        alt: "Thailand - Night",
      }}
      captions={["Thailand - Night"]}
      previousHref="/photolab5490"
      nextHref="/photolab5492"
    />
  );
}
