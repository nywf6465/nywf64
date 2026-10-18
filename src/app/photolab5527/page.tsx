import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5527 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5527 — Wax Museum — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5527 (legacy plab5527.html).
 * Nav bar shows Page 58. NEXT → /photolab5528; PREVIOUS → /photolab5526.
 */
export default function PhotoLab5527Page() {
  return (
    <PhotoLabSlidePage
      slideId={5527}
      title="Photo Lab - Lake Amusement Area - Slide 5527"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5527.jpg",
        width: 400,
        height: 267,
        alt: "Wax Museum",
      }}
      captions={["Wax Museum"]}
      previousHref="/photolab5526"
      nextHref="/photolab5528"
    />
  );
}
