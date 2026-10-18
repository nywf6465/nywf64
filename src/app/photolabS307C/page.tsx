import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S307C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S307C — Ford — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S307C (legacy plabS307C.html).
 * Nav bar shows Page 28. NEXT → /photolabS307D; PREVIOUS → /photolabS307B.
 */
export default function PhotoLabS307CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S307C"
      title="Photo Lab - Super Scenic Series - Slide S307C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S307C.jpg",
        width: 400,
        height: 376,
        alt: "Ford",
      }}
      captions={["Ford"]}
      previousHref="/photolabS307B"
      nextHref="/photolabS307D"
    />
  );
}
