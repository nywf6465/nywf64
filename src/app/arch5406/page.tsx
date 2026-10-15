import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5406 - Astral Fountain - Day — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5406 — Astral Fountain - Day — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5406 (legacy arch5406.html).
 * Nav bar shows Page 7. NEXT → /arch5407; PREVIOUS → /arch5405.
 */
export default function Arch5406Page() {
  return (
    <ArchSlidePage
      slideId={5406}
      title="Slide 5406 - Astral Fountain - Day"
      image={{
        src: "/images/arch/5406Large.jpg",
        width: 400,
        height: 278,
        alt: "Astral Fountain - Day — architect's rendering",
      }}
      captions={["Astral Fountain - Day"]}
      previousHref="/arch5405"
      nextHref="/arch5407"
    />
  );
}
