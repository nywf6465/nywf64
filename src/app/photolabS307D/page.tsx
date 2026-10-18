import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S307D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S307D — Chrysler — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S307D (legacy plabS307D.html).
 * Nav bar shows Page 29. NEXT → /photolabS308A; PREVIOUS → /photolabS307C.
 */
export default function PhotoLabS307DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S307D"
      title="Photo Lab - Super Scenic Series - Slide S307D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S307D.jpg",
        width: 400,
        height: 402,
        alt: "Chrysler",
      }}
      captions={["Chrysler"]}
      previousHref="/photolabS307C"
      nextHref="/photolabS308A"
    />
  );
}
