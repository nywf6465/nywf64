import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S313C — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S313C — Bell Telephone Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S313C (legacy plabS313C.html).
 * Nav bar shows Page 52. NEXT → /photolabS313D; PREVIOUS → /photolabS313B.
 */
export default function PhotoLabS313CPage() {
  return (
    <PhotoLabSlidePage
      slideId="S313C"
      title="Photo Lab - Super Scenic Series - Slide S313C"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S313C.jpg",
        width: 400,
        height: 404,
        alt: "Bell Telephone Exhibit",
      }}
      captions={["Bell Telephone Exhibit"]}
      previousHref="/photolabS313B"
      nextHref="/photolabS313D"
    />
  );
}
