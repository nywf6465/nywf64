import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5481 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5481 — Fountain of the Planets — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5481 (legacy plab5481.html).
 * Nav bar shows Page 12. NEXT → /photolab5482; PREVIOUS → /photolab5480.
 */
export default function PhotoLab5481Page() {
  return (
    <PhotoLabSlidePage
      slideId={5481}
      title="Photo Lab - Industrial Area Set B - Slide 5481"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5481.jpg",
        width: 400,
        height: 267,
        alt: "Fountain of the Planets",
      }}
      captions={["Fountain of the Planets"]}
      previousHref="/photolab5480"
      nextHref="/photolab5482"
    />
  );
}
