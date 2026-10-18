import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5473 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5473 — General Electric Company - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5473 (legacy plab5473.html).
 * Nav bar shows Page 4. NEXT → /photolab5474; PREVIOUS → /photolab5472.
 */
export default function PhotoLab5473Page() {
  return (
    <PhotoLabSlidePage
      slideId={5473}
      title="Photo Lab - Industrial Area Set A - Slide 5473"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5473.jpg",
        width: 400,
        height: 267,
        alt: "General Electric Company - Night",
      }}
      captions={["General Electric Company - Night"]}
      previousHref="/photolab5472"
      nextHref="/photolab5474"
    />
  );
}
