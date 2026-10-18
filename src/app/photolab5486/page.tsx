import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5486 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5486 — Travelers Insurance Companies — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5486 (legacy plab5486.html).
 * Nav bar shows Page 17. NEXT → /photolab5487; PREVIOUS → /photolab5485.
 */
export default function PhotoLab5486Page() {
  return (
    <PhotoLabSlidePage
      slideId={5486}
      title="Photo Lab - Industrial Area Set B - Slide 5486"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5486.jpg",
        width: 400,
        height: 267,
        alt: "Travelers Insurance Companies",
      }}
      captions={["Travelers Insurance Companies"]}
      previousHref="/photolab5485"
      nextHref="/photolab5487"
    />
  );
}
