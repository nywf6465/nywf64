import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5478 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5478 — Parker Pen Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5478 (legacy plab5478.html).
 * Nav bar shows Page 9. NEXT → /photolab5479; PREVIOUS → /photolab5477.
 */
export default function PhotoLab5478Page() {
  return (
    <PhotoLabSlidePage
      slideId={5478}
      title="Photo Lab - Industrial Area Set A - Slide 5478"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5478.jpg",
        width: 400,
        height: 267,
        alt: "Parker Pen Pavilion",
      }}
      captions={["Parker Pen Pavilion"]}
      previousHref="/photolab5477"
      nextHref="/photolab5479"
    />
  );
}
