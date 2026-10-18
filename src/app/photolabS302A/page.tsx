import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S302A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S302A — Electric Power and Light — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S302A (legacy plabS302A.html).
 * Nav bar shows Page 6. NEXT → /photolabS302B; PREVIOUS → /photolabS301D.
 */
export default function PhotoLabS302APage() {
  return (
    <PhotoLabSlidePage
      slideId="S302A"
      title="Photo Lab - Super Scenic Series - Slide S302A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S302A.jpg",
        width: 400,
        height: 400,
        alt: "Electric Power and Light",
      }}
      captions={["Electric Power and Light"]}
      previousHref="/photolabS301D"
      nextHref="/photolabS302B"
    />
  );
}
