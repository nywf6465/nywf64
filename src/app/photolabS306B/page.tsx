import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S306B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S306B — House of Good Taste — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S306B (legacy plabS306B.html).
 * Nav bar shows Page 23. NEXT → /photolabS306C; PREVIOUS → /photolabS306A.
 */
export default function PhotoLabS306BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S306B"
      title="Photo Lab - Super Scenic Series - Slide S306B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S306B.jpg",
        width: 400,
        height: 400,
        alt: "House of Good Taste",
      }}
      captions={["House of Good Taste"]}
      previousHref="/photolabS306A"
      nextHref="/photolabS306C"
    />
  );
}
