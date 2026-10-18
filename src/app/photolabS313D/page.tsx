import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S313D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S313D — Eastman Kodak Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S313D (legacy plabS313D.html).
 * Nav bar shows Page 53. NEXT → /photolabS301A; PREVIOUS → /photolabS313C.
 */
export default function PhotoLabS313DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S313D"
      title="Photo Lab - Super Scenic Series - Slide S313D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S313D.jpg",
        width: 400,
        height: 403,
        alt: "Eastman Kodak Exhibit",
      }}
      captions={["Eastman Kodak Exhibit"]}
      previousHref="/photolabS313C"
      nextHref="/photolabS301A"
    />
  );
}
