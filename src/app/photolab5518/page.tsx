import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5518 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5518 — House of Japan — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5518 (legacy plab5518.html).
 * Nav bar shows Page 49. NEXT → /photolab5519; PREVIOUS → /photolab5517.
 */
export default function PhotoLab5518Page() {
  return (
    <PhotoLabSlidePage
      slideId={5518}
      title="Photo Lab - International Area Set B - Slide 5518"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5518.jpg",
        width: 400,
        height: 267,
        alt: "House of Japan",
      }}
      captions={["House of Japan"]}
      previousHref="/photolab5517"
      nextHref="/photolab5519"
    />
  );
}
