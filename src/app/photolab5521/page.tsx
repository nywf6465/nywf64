import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5521 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5521 — Aerial View — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5521 (legacy plab5521.html).
 * Nav bar shows Page 52. NEXT → /photolab55122; PREVIOUS → /photolab5520.
 */
export default function PhotoLab5521Page() {
  return (
    <PhotoLabSlidePage
      slideId={5521}
      title="Photo Lab - Lake Amusement Area - Slide 5521"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5521.jpg",
        width: 400,
        height: 270,
        alt: "Aerial View",
      }}
      captions={["Aerial View"]}
      previousHref="/photolab5520"
      nextHref="/photolab55122"
    />
  );
}
