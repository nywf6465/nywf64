import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S310B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S310B — Composite of 6 Popular Scenes — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S310B (legacy plabS310B.html).
 * Nav bar shows Page 39. NEXT → /photolabS310C; PREVIOUS → /photolabS310A.
 */
export default function PhotoLabS310BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S310B"
      title="Photo Lab - Super Scenic Series - Slide S310B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S310B.jpg",
        width: 400,
        height: 400,
        alt: "Composite of 6 Popular Scenes",
      }}
      captions={["Composite of 6 Popular Scenes"]}
      previousHref="/photolabS310A"
      nextHref="/photolabS310C"
    />
  );
}
