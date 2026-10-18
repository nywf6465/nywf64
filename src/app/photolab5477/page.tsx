import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5477 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5477 — Eastman Kodak Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5477 (legacy plab5477.html).
 * Nav bar shows Page 8. NEXT → /photolab5479; PREVIOUS → /photolab5476.
 */
export default function PhotoLab5477Page() {
  return (
    <PhotoLabSlidePage
      slideId={5477}
      title="Photo Lab - Industrial Area Set A - Slide 5477"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5477.jpg",
        width: 400,
        height: 267,
        alt: "Eastman Kodak Exhibit",
      }}
      captions={["Eastman Kodak Exhibit"]}
      previousHref="/photolab5476"
      nextHref="/photolab5479"
    />
  );
}
