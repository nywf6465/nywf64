import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S181-A - Main Mall — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S181-A — Main Mall — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S181-A (legacy archS181A.html).
 * Nav bar shows Page 76. NEXT → /archS181B; PREVIOUS → /archS180D.
 */
export default function ArchS181APage() {
  return (
    <ArchSlidePage
      slideId="S181-A"
      titleId="archS181A-title"
      title="Slide S181-A - Main Mall"
      image={{
        src: "/images/arch/S-181ALarge.jpg",
        width: 400,
        height: 361,
        alt: "Main Mall — architect's rendering",
      }}
      captions={["Main Mall"]}
      category={null}
      previousHref="/archS180D"
      nextHref="/archS181B"
    />
  );
}
