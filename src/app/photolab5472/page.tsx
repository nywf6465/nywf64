import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5472 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5472 — Schaefer Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5472 (legacy plab5472.html).
 * Nav bar shows Page 3. NEXT → /photolab5473; PREVIOUS → /photolab5471.
 */
export default function PhotoLab5472Page() {
  return (
    <PhotoLabSlidePage
      slideId={5472}
      title="Photo Lab - Industrial Area Set A - Slide 5472"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5472.jpg",
        width: 400,
        height: 267,
        alt: "Schaefer Center",
      }}
      captions={["Schaefer Center"]}
      previousHref="/photolab5471"
      nextHref="/photolab5473"
    />
  );
}
