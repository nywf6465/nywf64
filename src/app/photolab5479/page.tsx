import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5479 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5479 — The Protestant Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5479 (legacy plab5479.html).
 * Nav bar shows Page 10. NEXT → /photolab5480; PREVIOUS → /photolab5478.
 */
export default function PhotoLab5479Page() {
  return (
    <PhotoLabSlidePage
      slideId={5479}
      title="Photo Lab - Industrial Area Set A - Slide 5479"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5479.jpg",
        width: 267,
        height: 400,
        alt: "The Protestant Center",
      }}
      captions={["The Protestant Center"]}
      previousHref="/photolab5478"
      nextHref="/photolab5480"
    />
  );
}
