import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5529 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5529 — NASA — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5529 (legacy plab5529.html).
 * Nav bar shows Page 60. NEXT → /photolab5530; PREVIOUS → /photolab5528.
 */
export default function PhotoLab5529Page() {
  return (
    <PhotoLabSlidePage
      slideId={5529}
      title="Photo Lab - Lake Amusement Area - Slide 5529"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5529.jpg",
        width: 400,
        height: 262,
        alt: "NASA",
      }}
      captions={["NASA"]}
      previousHref="/photolab5528"
      nextHref="/photolab5530"
    />
  );
}
