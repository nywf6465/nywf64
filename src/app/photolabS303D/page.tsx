import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S303D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S303D — Fountain of the Planets — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S303D (legacy plabS303D.html).
 * Nav bar shows Page 13. NEXT → /photolabS304A; PREVIOUS → /photolabS303C.
 */
export default function PhotoLabS303DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S303D"
      title="Photo Lab - Super Scenic Series - Slide S303D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S303D.jpg",
        width: 400,
        height: 400,
        alt: "Fountain of the Planets",
      }}
      captions={["Fountain of the Planets"]}
      previousHref="/photolabS303C"
      nextHref="/photolabS304A"
    />
  );
}
