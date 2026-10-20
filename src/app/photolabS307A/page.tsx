import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S307A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S307A — Sinclair Dinoland — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S307A (legacy plabS307A.html).
 * Nav bar shows Page 26. NEXT → /photolabS307B; PREVIOUS → /photolabS306D.
 */
export default function PhotoLabS307APage() {
  return (
    <PhotoLabSlidePage
      slideId="S307A"
      title="Photo Lab - Super Scenic Series - Slide S307A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S307A.jpg",
        width: 400,
        height: 396,
        alt: "Sinclair Dinoland",
      }}
      captions={["Sinclair Dinoland"]}
      previousHref="/photolabS306D"
      nextHref="/photolabS307B"
    />
  );
}
