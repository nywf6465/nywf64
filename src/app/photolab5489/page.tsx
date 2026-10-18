import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5489 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5489 — Seven-Up — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5489 (legacy plab5489.html).
 * Nav bar shows Page 20. NEXT → /photolab5490; PREVIOUS → /photolab5488.
 */
export default function PhotoLab5489Page() {
  return (
    <PhotoLabSlidePage
      slideId={5489}
      title="Photo Lab - Industrial Area Set B - Slide 5489"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5489.jpg",
        width: 267,
        height: 400,
        alt: "Seven-Up",
      }}
      captions={["Seven-Up"]}
      previousHref="/photolab5488"
      nextHref="/photolab5490"
    />
  );
}
