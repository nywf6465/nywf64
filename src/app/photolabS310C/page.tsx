import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S310C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S310C — Composite of 6 Popular Scenes — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S310C (legacy plabS310C.html).
 * Nav bar shows Page 40. NEXT → /photolabS310D; PREVIOUS → /photolabS310B.
 */
export default function PhotoLabS310CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S310C"
      title="Photo Lab - Super Scenic Series - Slide S310C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S310C.jpg",
        width: 400,
        height: 400,
        alt: "Composite of 6 Popular Scenes",
      }}
      captions={["Composite of 6 Popular Scenes"]}
      previousHref="/photolabS310B"
      nextHref="/photolabS310D"
    />
  );
}
