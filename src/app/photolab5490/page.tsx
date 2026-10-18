import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5490 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5490 — Church of Jesus Christ of Latter Day Saints - Day — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5490 (legacy plab5490.html).
 * Nav bar shows Page 21. NEXT → /photolab5491; PREVIOUS → /photolab5489.
 */
export default function PhotoLab5490Page() {
  return (
    <PhotoLabSlidePage
      slideId={5490}
      title="Photo Lab - Industrial Area Set B - Slide 5490"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5490.jpg",
        width: 267,
        height: 400,
        alt: "Church of Jesus Christ of Latter Day Saints - Day",
      }}
      captions={["Church of Jesus Christ of Latter Day Saints - Day"]}
      previousHref="/photolab5489"
      nextHref="/photolab5491"
    />
  );
}
