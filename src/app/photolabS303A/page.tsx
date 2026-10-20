import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S303A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S303A — Solar Fountain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S303A (legacy plabS303A.html).
 * Nav bar shows Page 10. NEXT → /photolabS303B; PREVIOUS → /photolabS302D.
 */
export default function PhotoLabS303APage() {
  return (
    <PhotoLabSlidePage
      slideId="S303A"
      title="Photo Lab - Super Scenic Series - Slide S303A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S303A.jpg",
        width: 400,
        height: 394,
        alt: "Solar Fountain",
      }}
      captions={["Solar Fountain"]}
      previousHref="/photolabS302D"
      nextHref="/photolabS303B"
    />
  );
}
