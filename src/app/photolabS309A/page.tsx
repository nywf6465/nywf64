import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S309A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S309A — Better Living — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S309A (legacy plabS309A.html).
 * Nav bar shows Page 34. NEXT → /photolabS309B; PREVIOUS → /photolabS308D.
 */
export default function PhotoLabS309APage() {
  return (
    <PhotoLabSlidePage
      slideId="S309A"
      title="Photo Lab - Super Scenic Series - Slide S309A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S309A.jpg",
        width: 400,
        height: 400,
        alt: "Better Living",
      }}
      captions={["Better Living"]}
      previousHref="/photolabS308D"
      nextHref="/photolabS309B"
    />
  );
}
