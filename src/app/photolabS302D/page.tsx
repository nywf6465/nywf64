import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S302D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S302D — General Electric Company — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S302D (legacy plabS302D.html).
 * Nav bar shows Page 9. NEXT → /photolabS303A; PREVIOUS → /photolabS302C.
 */
export default function PhotoLabS302DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S302D"
      title="Photo Lab - Super Scenic Series - Slide S302D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S302D.jpg",
        width: 400,
        height: 400,
        alt: "General Electric Company",
      }}
      captions={["General Electric Company"]}
      previousHref="/photolabS302C"
      nextHref="/photolabS303A"
    />
  );
}
