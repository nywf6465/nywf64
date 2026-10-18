import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5483 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5483 — Festival of Gas — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5483 (legacy plab5483.html).
 * Nav bar shows Page 14. NEXT → /photolab5484; PREVIOUS → /photolab5482.
 */
export default function PhotoLab5483Page() {
  return (
    <PhotoLabSlidePage
      slideId={5483}
      title="Photo Lab - Industrial Area Set B - Slide 5483"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5483.jpg",
        width: 400,
        height: 267,
        alt: "Festival of Gas",
      }}
      captions={["Festival of Gas"]}
      previousHref="/photolab5482"
      nextHref="/photolab5484"
    />
  );
}
