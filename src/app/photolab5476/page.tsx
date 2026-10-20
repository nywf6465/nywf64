import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5476 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5476 — General Cigar — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5476 (legacy plab5476.html).
 * Nav bar shows Page 7. NEXT → /photolab5477; PREVIOUS → /photolab5475.
 */
export default function PhotoLab5476Page() {
  return (
    <PhotoLabSlidePage
      slideId={5476}
      title="Photo Lab - Industrial Area Set A - Slide 5476"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5476.jpg",
        width: 400,
        height: 267,
        alt: "General Cigar",
      }}
      captions={["General Cigar"]}
      previousHref="/photolab5475"
      nextHref="/photolab5477"
    />
  );
}
