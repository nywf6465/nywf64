import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Super Scenic Series - Slide S306A — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Super Scenic Series slide S306A — Fountains of the Planets — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide S306A (legacy plabS306A.html).
 * Nav bar shows Page 22. NEXT → /photolabS306B; PREVIOUS → /photolabS305D.
 */
export default function PhotoLabS306APage() {
  return (
    <PhotoLabSlidePage
      slideId="S306A"
      title="Photo Lab - Super Scenic Series - Slide S306A"
      setLabel="SUPER SCENIC SERIES"
      image={{
        src: "/images/photolab/S306A.jpg",
        width: 400,
        height: 400,
        alt: "Fountains of the Planets",
      }}
      captions={["Fountains of the Planets"]}
      previousHref="/photolabS305D"
      nextHref="/photolabS306B"
    />
  );
}
