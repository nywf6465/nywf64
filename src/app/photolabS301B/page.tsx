import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S301B — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S301B — General Motors Company — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S301B (legacy plabS301B.html).
 * Nav bar shows Page 3. NEXT → /photolabS301C; PREVIOUS → /photolabS301A.
 */
export default function PhotoLabS301BPage() {
  return (
    <PhotoLabSlidePage
      slideId="S301B"
      title="Photo Lab - Super Scenic Series - Slide S301B"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S301B.jpg",
        width: 400,
        height: 400,
        alt: "General Motors Company",
      }}
      captions={["General Motors Company"]}
      previousHref="/photolabS301A"
      nextHref="/photolabS301C"
    />
  );
}
