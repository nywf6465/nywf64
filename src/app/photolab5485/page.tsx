import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5485 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5485 — International Business Machines - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5485 (legacy plab5485.html).
 * Nav bar shows Page 16. NEXT → /photolab5486; PREVIOUS → /photolab5484.
 */
export default function PhotoLab5485Page() {
  return (
    <PhotoLabSlidePage
      slideId={5485}
      title="Photo Lab - Industrial Area Set B - Slide 5485"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5485.jpg",
        width: 400,
        height: 267,
        alt: "International Business Machines - Night",
      }}
      captions={["International Business Machines - Night"]}
      previousHref="/photolab5484"
      nextHref="/photolab5486"
    />
  );
}
