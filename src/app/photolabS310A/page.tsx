import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S310A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S310A — Composite of 6 Popular Scenes — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S310A (legacy plabS310A.html).
 * Nav bar shows Page 38. NEXT → /photolabS310B; PREVIOUS → /photolabS309D.
 */
export default function PhotoLabS310APage() {
  return (
    <PhotoLabSlidePage
      slideId="S310A"
      title="Photo Lab - Super Scenic Series - Slide S310A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S310A.jpg",
        width: 400,
        height: 400,
        alt: "Composite of 6 Popular Scenes",
      }}
      captions={["Composite of 6 Popular Scenes"]}
      previousHref="/photolabS309D"
      nextHref="/photolabS310B"
    />
  );
}
