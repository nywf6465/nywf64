import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S304C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S304C — Aerial Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S304C (legacy plabS304C.html).
 * Nav bar shows Page 16. NEXT → /photolabS304D; PREVIOUS → /photolabS304B.
 */
export default function PhotoLabS304CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S304C"
      title="Photo Lab - Super Scenic Series - Slide S304C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S304C.jpg",
        width: 400,
        height: 389,
        alt: "Aerial Ride",
      }}
      captions={["Aerial Ride"]}
      previousHref="/photolabS304B"
      nextHref="/photolabS304D"
    />
  );
}
