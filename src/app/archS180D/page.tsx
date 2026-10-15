import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S180-D - New York State Pavilion — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S180-D — New York State Pavilion — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S180-D (legacy archS180D.html).
 * Nav bar shows Page 75. NEXT → /archS181A; PREVIOUS → /archS180C.
 */
export default function ArchS180DPage() {
  return (
    <ArchSlidePage
      slideId="S180-D"
      titleId="archS180D-title"
      title="Slide S180-D - New York State Pavilion"
      image={{
        src: "/images/arch/S-180DLarge.jpg",
        width: 400,
        height: 395,
        alt: "New York State Pavilion — architect's rendering",
      }}
      captions={["New York State Pavilion"]}
      category={null}
      previousHref="/archS180C"
      nextHref="/archS181A"
    />
  );
}
