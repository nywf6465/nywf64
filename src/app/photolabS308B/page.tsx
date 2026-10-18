import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S308B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S308B — Hong Kong — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S308B (legacy plabS308B.html).
 * Nav bar shows Page 31. NEXT → /photolabS308C; PREVIOUS → /photolabS308A.
 */
export default function PhotoLabS308BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S308B"
      title="Photo Lab - Super Scenic Series - Slide S308B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S308B.jpg",
        width: 400,
        height: 391,
        alt: "Hong Kong",
      }}
      captions={["Hong Kong"]}
      previousHref="/photolabS308A"
      nextHref="/photolabS308C"
    />
  );
}
