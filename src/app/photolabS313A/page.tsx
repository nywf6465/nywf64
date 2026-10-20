import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S313A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S313A — Unisphere — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S313A (legacy plabS313A.html).
 * Nav bar shows Page 50. NEXT → /photolabS313B; PREVIOUS → /photolabS312D.
 */
export default function PhotoLabS313APage() {
  return (
    <PhotoLabSlidePage
      slideId="S313A"
      title="Photo Lab - Super Scenic Series - Slide S313A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S313A.jpg",
        width: 400,
        height: 403,
        alt: "Unisphere",
      }}
      captions={["Unisphere"]}
      previousHref="/photolabS312D"
      nextHref="/photolabS313B"
    />
  );
}
