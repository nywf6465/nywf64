import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S304A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S304A — Texas Music Hall — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S304A (legacy plabS304A.html).
 * Nav bar shows Page 14. NEXT → /photolabS304B; PREVIOUS → /photolabS303D.
 */
export default function PhotoLabS304APage() {
  return (
    <PhotoLabSlidePage
      slideId="S304A"
      title="Photo Lab - Super Scenic Series - Slide S304A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S304A.jpg",
        width: 400,
        height: 403,
        alt: "Texas Music Hall",
      }}
      captions={["Texas Music Hall"]}
      previousHref="/photolabS303D"
      nextHref="/photolabS304B"
    />
  );
}
