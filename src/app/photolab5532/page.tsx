import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5532 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5532 — Sinclair Dinoland — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5532 (legacy plab5532.html).
 * Nav bar shows Page 63. NEXT → /photolab5533; PREVIOUS → /photolab5531.
 */
export default function PhotoLab5532Page() {
  return (
    <PhotoLabSlidePage
      slideId={5532}
      title="Photo Lab - Transportation Area - Slide 5532"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5532.jpg",
        width: 400,
        height: 264,
        alt: "Sinclair Dinoland",
      }}
      captions={["Sinclair Dinoland"]}
      previousHref="/photolab5531"
      nextHref="/photolab5533"
    />
  );
}
