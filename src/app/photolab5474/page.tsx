import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5474 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5474 — Coca Cola - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5474 (legacy plab5474.html).
 * Nav bar shows Page 5. NEXT → /photolab5475; PREVIOUS → /photolab5473.
 */
export default function PhotoLab5474Page() {
  return (
    <PhotoLabSlidePage
      slideId={5474}
      title="Photo Lab - Industrial Area Set A - Slide 5474"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5474.jpg",
        width: 400,
        height: 267,
        alt: "Coca Cola - Night",
      }}
      captions={["Coca Cola - Night"]}
      previousHref="/photolab5473"
      nextHref="/photolab5475"
    />
  );
}
