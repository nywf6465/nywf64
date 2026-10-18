import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S301C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S301C — United States Rubber Company Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S301C (legacy plabS301C.html).
 * Nav bar shows Page 4. NEXT → /photolabS301D; PREVIOUS → /photolabS301B.
 */
export default function PhotoLabS301CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S301C"
      title="Photo Lab - Super Scenic Series - Slide S301C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S301C.jpg",
        width: 400,
        height: 400,
        alt: "United States Rubber Company Exhibit",
      }}
      captions={["United States Rubber Company Exhibit"]}
      previousHref="/photolabS301B"
      nextHref="/photolabS301D"
    />
  );
}
