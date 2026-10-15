import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S181-B - Astral Fountain - Night — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S181-B — Astral Fountain - Night — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S181-B (legacy archS181B.html).
 * Nav bar shows Page 77. NEXT → /archS181C; PREVIOUS → /archS181A.
 */
export default function ArchS181BPage() {
  return (
    <ArchSlidePage
      slideId="S181-B"
      titleId="archS181B-title"
      title="Slide S181-B - Astral Fountain - Night"
      image={{
        src: "/images/arch/S-181BLarge.jpg",
        width: 400,
        height: 376,
        alt: "Astral Fountain - Night — architect's rendering",
      }}
      captions={["Astral Fountain - Night"]}
      category={null}
      previousHref="/archS181A"
      nextHref="/archS181C"
    />
  );
}
