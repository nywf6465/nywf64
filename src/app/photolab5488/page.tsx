import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5488 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5488 — Rheingold’s Little Old New York — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5488 (legacy plab5488.html).
 * Nav bar shows Page 19. NEXT → /photolab5489; PREVIOUS → /photolab5487.
 */
export default function PhotoLab5488Page() {
  return (
    <PhotoLabSlidePage
      slideId={5488}
      title="Photo Lab - Industrial Area Set B - Slide 5488"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5488.jpg",
        width: 400,
        height: 267,
        alt: "Rheingold's Little Old New York",
      }}
      captions={["Rheingold's Little Old New York"]}
      previousHref="/photolab5487"
      nextHref="/photolab5489"
    />
  );
}
