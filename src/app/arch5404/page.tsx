import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5404 - Unisphere (Weinrich Horizontal) — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5404 — Unisphere (Weinrich Horizontal) — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5404 (legacy arch5404.html).
 * Nav bar shows Page 5. NEXT → /arch5405; PREVIOUS → /arch5403.
 */
export default function Arch5404Page() {
  return (
    <ArchSlidePage
      slideId={5404}
      title="Slide 5404 - Unisphere (Weinrich Horizontal)"
      image={{
        src: "/images/arch/5404Large.jpg",
        width: 400,
        height: 311,
        alt: "Unisphere (Weinrich Horizontal) — architect's rendering",
      }}
      captions={["Unisphere (Weinrich Horizontal)"]}
      previousHref="/arch5403"
      nextHref="/arch5405"
    />
  );
}
