import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S301D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S301D — Greyhound at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S301D (legacy plabS301D.html).
 * Nav bar shows Page 5. NEXT → /photolabS302A; PREVIOUS → /photolabS301C.
 */
export default function PhotoLabS301DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S301D"
      title="Photo Lab - Super Scenic Series - Slide S301D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S301D.jpg",
        width: 400,
        height: 400,
        alt: "Greyhound at the Fair",
      }}
      captions={["Greyhound at the Fair"]}
      previousHref="/photolabS301C"
      nextHref="/photolabS302A"
    />
  );
}
