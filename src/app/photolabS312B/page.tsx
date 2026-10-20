import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S312B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S312B — Swiss Sky Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S312B (legacy plabS312B.html).
 * Nav bar shows Page 47. NEXT → /photolabS312C; PREVIOUS → /photolabS312A.
 */
export default function PhotoLabS312BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S312B"
      title="Photo Lab - Super Scenic Series - Slide S312B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S312B.jpg",
        width: 400,
        height: 404,
        alt: "Swiss Sky Ride",
      }}
      captions={["Swiss Sky Ride"]}
      previousHref="/photolabS312A"
      nextHref="/photolabS312C"
    />
  );
}
