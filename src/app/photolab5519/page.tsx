import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5519 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5519 — Sermons From Science — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5519 (legacy plab5519.html).
 * Nav bar shows Page 50. NEXT → /photolab5520; PREVIOUS → /photolab5518.
 */
export default function PhotoLab5519Page() {
  return (
    <PhotoLabSlidePage
      slideId={5519}
      title="Photo Lab - International Area Set B - Slide 5519"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5519.jpg",
        width: 400,
        height: 267,
        alt: "Sermons From Science",
      }}
      captions={["Sermons From Science"]}
      previousHref="/photolab5518"
      nextHref="/photolab5520"
    />
  );
}
