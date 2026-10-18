import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5614 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5614 — Sinclair Dinoland — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5614 (legacy plab5614.html).
 * Nav bar shows Page 15. NEXT → /photolab5615; PREVIOUS → /photolab5613.
 */
export default function PhotoLab5614Page() {
  return (
    <PhotoLabSlidePage
      slideId={5614}
      title="Photo Lab - General Tour - Slide 5614"
      image={{
        src: "/images/photolab/5614.jpg",
        width: 267,
        height: 400,
        alt: "Sinclair Dinoland",
      }}
      captions={["Sinclair Dinoland"]}
      previousHref="/photolab5613"
      nextHref="/photolab5615"
    />
  );
}
