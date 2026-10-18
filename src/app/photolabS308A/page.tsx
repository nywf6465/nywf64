import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S308A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S308A — Hong Kong - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S308A (legacy plabS308A.html).
 * Nav bar shows Page 30. NEXT → /photolabS308B; PREVIOUS → /photolabS307D.
 */
export default function PhotoLabS308APage() {
  return (
    <PhotoLabSlidePage
      slideId="S308A"
      title="Photo Lab - Super Scenic Series - Slide S308A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S308A.jpg",
        width: 400,
        height: 391,
        alt: "Hong Kong - Night",
      }}
      captions={["Hong Kong - Night"]}
      previousHref="/photolabS307D"
      nextHref="/photolabS308B"
    />
  );
}
