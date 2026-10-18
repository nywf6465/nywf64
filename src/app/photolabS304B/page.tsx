import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S304B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S304B — AMF Monorail — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S304B (legacy plabS304B.html).
 * Nav bar shows Page 15. NEXT → /photolabS304C; PREVIOUS → /photolabS304A.
 */
export default function PhotoLabS304BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S304B"
      title="Photo Lab - Super Scenic Series - Slide S304B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S304B.jpg",
        width: 400,
        height: 396,
        alt: "AMF Monorail",
      }}
      captions={["AMF Monorail"]}
      previousHref="/photolabS304A"
      nextHref="/photolabS304C"
    />
  );
}
