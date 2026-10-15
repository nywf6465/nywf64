import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5403 - Entrance Gate — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5403 — Entrance Gate — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5403 (legacy arch5403.html).
 * Nav bar shows Page 4. NEXT → /arch5404; PREVIOUS → /arch5402.
 */
export default function Arch5403Page() {
  return (
    <ArchSlidePage
      slideId={5403}
      title="Slide 5403 - Entrance Gate"
      image={{
        src: "/images/arch/5403Large.jpg",
        width: 400,
        height: 279,
        alt: "Entrance Gate — architect's rendering",
      }}
      captions={["Entrance Gate"]}
      previousHref="/arch5402"
      nextHref="/arch5404"
    />
  );
}
