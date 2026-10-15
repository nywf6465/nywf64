import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5411 - Bell System Exhibit — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5411 — Bell System Exhibit — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5411 (legacy arch5411.html).
 * Nav bar shows Page 12. NEXT → /arch5412; PREVIOUS → /arch5410.
 */
export default function Arch5411Page() {
  return (
    <ArchSlidePage
      slideId={5411}
      title="Slide 5411 - Bell System Exhibit"
      image={{
        src: "/images/arch/5411Large.jpg",
        width: 400,
        height: 277,
        alt: "Bell System Exhibit — architect's rendering",
      }}
      captions={["Bell System Exhibit"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5410"
      nextHref="/arch5412"
    />
  );
}
