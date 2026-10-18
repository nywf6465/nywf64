import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5524 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5524 — Amphitheatre Florida Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5524 (legacy plab5524.html).
 * Nav bar shows Page 55. NEXT → /photolab5525; PREVIOUS → /photolab5523.
 */
export default function PhotoLab5524Page() {
  return (
    <PhotoLabSlidePage
      slideId={5524}
      title="Photo Lab - Lake Amusement Area - Slide 5524"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5524.jpg",
        width: 400,
        height: 267,
        alt: "Amphitheatre Florida Pavilion",
      }}
      captions={["Amphitheatre Florida Pavilion"]}
      previousHref="/photolab5523"
      nextHref="/photolab5525"
    />
  );
}
