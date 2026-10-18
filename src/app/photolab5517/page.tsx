import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5517 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5517 — Pavilion of Sweden — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5517 (legacy plab5517.html).
 * Nav bar shows Page 48. NEXT → /photolab5518; PREVIOUS → /photolab5516.
 */
export default function PhotoLab5517Page() {
  return (
    <PhotoLabSlidePage
      slideId={5517}
      title="Photo Lab - International Area Set B - Slide 5517"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5517.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Sweden",
      }}
      captions={["Pavilion of Sweden"]}
      previousHref="/photolab5516"
      nextHref="/photolab5518"
    />
  );
}
