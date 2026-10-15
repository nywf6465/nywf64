import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S180-A - Unisphere (Red) — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S180-A — Unisphere (Red) — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S180-A (legacy archS180A.html).
 * Nav bar shows Page 72. NEXT → /archS180B; PREVIOUS → /arch5470.
 */
export default function ArchS180APage() {
  return (
    <ArchSlidePage
      slideId="S180-A"
      titleId="archS180A-title"
      title="Slide S180-A - Unisphere (Red)"
      image={{
        src: "/images/arch/S-180ALarge.jpg",
        width: 400,
        height: 400,
        alt: "Unisphere (Red) — architect's rendering",
      }}
      captions={["Unisphere (Red)"]}
      category={null}
      previousHref="/arch5470"
      nextHref="/archS180B"
    />
  );
}
