import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S309D — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S309D — Hall of Education — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S309D (legacy plabS309D.html).
 * Nav bar shows Page 37. NEXT → /photolabS310A; PREVIOUS → /photolabS309C.
 */
export default function PhotoLabS309DPage() {
  return (
    <PhotoLabSlidePage
      slideId="S309D"
      title="Photo Lab - Super Scenic Series - Slide S309D"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S309D.jpg",
        width: 400,
        height: 404,
        alt: "Hall of Education",
      }}
      captions={["Hall of Education"]}
      previousHref="/photolabS309C"
      nextHref="/photolabS310A"
    />
  );
}
