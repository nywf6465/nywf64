import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5530 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5530 — Music Hall — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5530 (legacy plab5530.html).
 * Nav bar shows Page 61. NEXT → /photolab5531; PREVIOUS → /photolab5529.
 */
export default function PhotoLab5530Page() {
  return (
    <PhotoLabSlidePage
      slideId={5530}
      title="Photo Lab - Lake Amusement Area - Slide 5530"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5530.jpg",
        width: 400,
        height: 267,
        alt: "Music Hall",
      }}
      captions={["Music Hall"]}
      previousHref="/photolab5529"
      nextHref="/photolab5531"
    />
  );
}
