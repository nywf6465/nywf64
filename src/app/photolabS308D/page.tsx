import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S308D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S308D — DuPont Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S308D (legacy plabS308D.html).
 * Nav bar shows Page 33. NEXT → /photolabS309A; PREVIOUS → /photolabS308C.
 */
export default function PhotoLabS308DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S308D"
      title="Photo Lab - Super Scenic Series - Slide S308D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S308D.jpg",
        width: 400,
        height: 400,
        alt: "DuPont Exhibit",
      }}
      captions={["DuPont Exhibit"]}
      previousHref="/photolabS308C"
      nextHref="/photolabS309A"
    />
  );
}
