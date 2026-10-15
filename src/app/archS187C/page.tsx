import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S187-C - Billy Graham — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S187-C — Billy Graham — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S187-C (legacy archS187C.html).
 * Nav bar shows Page 102. NEXT → /archS187D; PREVIOUS → /archS187B.
 */
export default function ArchS187CPage() {
  return (
    <ArchSlidePage
      slideId="S187-C"
      titleId="archS187C-title"
      title="Slide S187-C - Billy Graham"
      image={{
        src: "/images/arch/S-187CLarge.jpg",
        width: 400,
        height: 384,
        alt: "Billy Graham's Pavilion — architect's rendering",
      }}
      captions={["Billy Graham's Pavilion"]}
      category={null}
      previousHref="/archS187B"
      nextHref="/archS187D"
    />
  );
}
