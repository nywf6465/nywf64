import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5431 - Alaska — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5431 — Alaska — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5431 (legacy arch5431.html).
 * Nav bar shows Page 32. NEXT → /arch5432; PREVIOUS → /arch5430.
 */
export default function Arch5431Page() {
  return (
    <ArchSlidePage
      slideId={5431}
      title="Slide 5431 - Alaska"
      image={{
        src: "/images/arch/5431Large.jpg",
        width: 400,
        height: 277,
        alt: "Alaska — architect's rendering",
      }}
      captions={["Alaska"]}
      category="STATES"
      previousHref="/arch5430"
      nextHref="/arch5432"
    />
  );
}
