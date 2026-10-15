import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5407 - Lunar Fountain - Day — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5407 — Lunar Fountain - Day — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5407 (legacy arch5407.html).
 * Nav bar shows Page 8. NEXT → /arch5408; PREVIOUS → /arch5406.
 */
export default function Arch5407Page() {
  return (
    <ArchSlidePage
      slideId={5407}
      title="Slide 5407 - Lunar Fountain - Day"
      image={{
        src: "/images/arch/5407Large.jpg",
        width: 400,
        height: 272,
        alt: "Lunar Fountain - Day — architect's rendering",
      }}
      captions={["Lunar Fountain - Day"]}
      previousHref="/arch5406"
      nextHref="/arch5408"
    />
  );
}
