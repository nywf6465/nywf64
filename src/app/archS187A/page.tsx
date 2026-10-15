import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S187-A - Protestant Center — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S187-A — Protestant Center — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S187-A (legacy archS187A.html).
 * Nav bar shows Page 100. NEXT → /archS187B; PREVIOUS → /archS186D.
 */
export default function ArchS187APage() {
  return (
    <ArchSlidePage
      slideId="S187-A"
      titleId="archS187A-title"
      title="Slide S187-A - Protestant Center"
      image={{
        src: "/images/arch/S-187ALarge.jpg",
        width: 400,
        height: 385,
        alt: "The Protestant Center — architect's rendering",
      }}
      captions={["The Protestant Center"]}
      category={null}
      previousHref="/archS186D"
      nextHref="/archS187B"
    />
  );
}
