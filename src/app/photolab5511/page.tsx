import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set B - Slide 5511 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set B slide 5511 — Pavilion of Spain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5511 (legacy plab5511.html).
 * Nav bar shows Page 42. NEXT → /photolab5512; PREVIOUS → /photolab5510.
 */
export default function PhotoLab5511Page() {
  return (
    <PhotoLabSlidePage
      slideId={5511}
      title="Photo Lab - International Area Set B - Slide 5511"
      setLabel="INTERNATIONAL AREA, SET B"
      image={{
        src: "/images/photolab/5511.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Spain",
      }}
      captions={["Pavilion of Spain"]}
      previousHref="/photolab5510"
      nextHref="/photolab5512"
    />
  );
}
