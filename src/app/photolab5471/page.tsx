import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5471 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5471 — Electric Power and Light - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5471 (legacy plab5471.html).
 * Nav bar shows Page 2. NEXT → /photolab5472; PREVIOUS → /photolabtray02.
 */
export default function PhotoLab5471Page() {
  return (
    <PhotoLabSlidePage
      slideId={5471}
      title="Photo Lab - Industrial Area Set A - Slide 5471"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5471.jpg",
        width: 400,
        height: 267,
        alt: "Electric Power and Light - Night",
      }}
      captions={["Electric Power and Light - Night"]}
      previousHref="/photolabtray02"
      nextHref="/photolab5472"
    />
  );
}
