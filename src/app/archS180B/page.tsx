import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S180-B - Heliport — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S180-B — Heliport — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S180-B (legacy archS180B.html).
 * Nav bar shows Page 73. NEXT → /archS180C; PREVIOUS → /archS180A.
 */
export default function ArchS180BPage() {
  return (
    <ArchSlidePage
      slideId="S180-B"
      titleId="archS180B-title"
      title="Slide S180-B - Heliport"
      image={{
        src: "/images/arch/S-180BLarge.jpg",
        width: 400,
        height: 383,
        alt: "Port of New York Authority Heliport — architect's rendering",
      }}
      captions={["Port of New York Authority", "Heliport"]}
      category={null}
      previousHref="/archS180A"
      nextHref="/archS180C"
    />
  );
}
