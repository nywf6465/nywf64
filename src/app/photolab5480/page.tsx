import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5480 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5480 — Church of Jesus Christ of Latter Day Saints - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5480 (legacy plab5480.html).
 * Nav bar shows Page 11. NEXT → /photolab5481; PREVIOUS → /photolab5479.
 */
export default function PhotoLab5480Page() {
  return (
    <PhotoLabSlidePage
      slideId={5480}
      title="Photo Lab - Industrial Area Set A - Slide 5480"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5480.jpg",
        width: 267,
        height: 400,
        alt: "Church of Jesus Christ of Latter Day Saints - Night",
      }}
      captions={["Church of Jesus Christ of Latter Day Saints - Night"]}
      previousHref="/photolab5479"
      nextHref="/photolab5481"
    />
  );
}
