import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S310D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S310D — Composite of 6 Popular Scenes — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S310D (legacy plabS310D.html).
 * Nav bar shows Page 41. NEXT → /photolabS312A; PREVIOUS → /photolabS310C.
 */
export default function PhotoLabS310DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S310D"
      title="Photo Lab - Super Scenic Series - Slide S310D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S310D.jpg",
        width: 400,
        height: 400,
        alt: "Composite of 6 Popular Scenes",
      }}
      captions={["Composite of 6 Popular Scenes"]}
      previousHref="/photolabS310C"
      nextHref="/photolabS312A"
    />
  );
}
