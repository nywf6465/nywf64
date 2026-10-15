import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S183-A - General Motors — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S183-A — General Motors — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S183-A (legacy archS183A.html).
 * Nav bar shows Page 84. NEXT → /archS183B; PREVIOUS → /archS182D.
 */
export default function ArchS183APage() {
  return (
    <ArchSlidePage
      slideId="S183-A"
      titleId="archS183A-title"
      title="Slide S183-A - General Motors"
      image={{
        src: "/images/arch/S-183ALarge.jpg",
        width: 400,
        height: 387,
        alt: "General Motors — architect's rendering",
      }}
      captions={["General Motors"]}
      category={null}
      previousHref="/archS182D"
      nextHref="/archS183B"
    />
  );
}
