import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S183-B - Johnson Wax — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S183-B — Johnson Wax — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S183-B (legacy archS183B.html).
 * Nav bar shows Page 85. NEXT → /archS183C; PREVIOUS → /archS183A.
 */
export default function ArchS183BPage() {
  return (
    <ArchSlidePage
      slideId="S183-B"
      titleId="archS183B-title"
      title="Slide S183-B - Johnson Wax"
      image={{
        src: "/images/arch/S-183BLarge.jpg",
        width: 400,
        height: 385,
        alt: "Johnson's Wax — architect's rendering",
      }}
      captions={["Johnson's Wax"]}
      category={null}
      previousHref="/archS183A"
      nextHref="/archS183C"
    />
  );
}
