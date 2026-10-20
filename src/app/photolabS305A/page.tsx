import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S305A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S305A — Unisphere, Court of Nations — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S305A (legacy plabS305A.html).
 * Nav bar shows Page 18. NEXT → /photolabS305B; PREVIOUS → /photolabS304D.
 */
export default function PhotoLabS305APage() {
  return (
    <PhotoLabSlidePage
      slideId="S305A"
      title="Photo Lab - Super Scenic Series - Slide S305A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S305A.jpg",
        width: 400,
        height: 386,
        alt: "Unisphere, Court of Nations",
      }}
      captions={["Unisphere, Court of Nations"]}
      previousHref="/photolabS304D"
      nextHref="/photolabS305B"
    />
  );
}
