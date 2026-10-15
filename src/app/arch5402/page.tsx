import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5402 - Unisphere (Red) — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5402 — Unisphere (Red) — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5402 (legacy arch5402.html).
 * Nav bar shows Page 3. No NEXT — PREVIOUS returns to /archtray.
 */
export default function Arch5402Page() {
  return (
    <ArchSlidePage
      slideId={5402}
      title="Slide 5402 - Unisphere (Red)"
      image={{
        src: "/images/arch/5402Large.jpg",
        width: 242,
        height: 400,
        alt: "Unisphere (Red) — architect's rendering",
      }}
      captions={["Unisphere", "(Red)"]}
    />
  );
}
