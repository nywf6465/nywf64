import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S312A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S312A — Fountains of the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S312A (legacy plabS312A.html).
 * Nav bar shows Page 46. NEXT → /photolabS312B; PREVIOUS → /photolabS310D.
 */
export default function PhotoLabS312APage() {
  return (
    <PhotoLabSlidePage
      slideId="S312A"
      title="Photo Lab - Super Scenic Series - Slide S312A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S312A.jpg",
        width: 400,
        height: 413,
        alt: "Fountains of the Fair",
      }}
      captions={["Fountains of the Fair"]}
      previousHref="/photolabS310D"
      nextHref="/photolabS312B"
    />
  );
}
