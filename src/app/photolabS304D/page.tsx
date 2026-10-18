import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S304D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S304D — Log Flume Ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S304D (legacy plabS304D.html).
 * Nav bar shows Page 17. NEXT → /photolabS305A; PREVIOUS → /photolabS304C.
 */
export default function PhotoLabS304DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S304D"
      title="Photo Lab - Super Scenic Series - Slide S304D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S304D.jpg",
        width: 400,
        height: 393,
        alt: "Log Flume Ride",
      }}
      captions={["Log Flume Ride"]}
      previousHref="/photolabS304C"
      nextHref="/photolabS305A"
    />
  );
}
