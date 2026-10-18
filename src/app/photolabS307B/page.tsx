import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S307B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S307B — Chrysler — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S307B (legacy plabS307B.html).
 * Nav bar shows Page 27. NEXT → /photolabS307C; PREVIOUS → /photolabS307A.
 */
export default function PhotoLabS307BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S307B"
      title="Photo Lab - Super Scenic Series - Slide S307B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S307B.jpg",
        width: 400,
        height: 406,
        alt: "Chrysler",
      }}
      captions={["Chrysler"]}
      previousHref="/photolabS307A"
      nextHref="/photolabS307C"
    />
  );
}
