import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S184-D - Travelers Insurance — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S184-D — Travelers Insurance — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S184-D (legacy archS184D.html).
 * Nav bar shows Page 91. NEXT → /archS185A; PREVIOUS → /archS184C.
 */
export default function ArchS184DPage() {
  return (
    <ArchSlidePage
      slideId="S184-D"
      titleId="archS184D-title"
      title="Slide S184-D - Travelers Insurance"
      image={{
        src: "/images/arch/S-184DLarge.jpg",
        width: 400,
        height: 379,
        alt: "Travelers Insurance Companies — architect's rendering",
      }}
      captions={["Travelers Insurance Companies"]}
      category={null}
      previousHref="/archS184C"
      nextHref="/archS185A"
    />
  );
}
