import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S184-B - American Interiors — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S184-B — American Interiors — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S184-B (legacy archS184B.html).
 * Nav bar shows Page 89. NEXT → /archS184C; PREVIOUS → /archS184A.
 */
export default function ArchS184BPage() {
  return (
    <ArchSlidePage
      slideId="S184-B"
      titleId="archS184B-title"
      title="Slide S184-B - American Interiors"
      image={{
        src: "/images/arch/S-184BLarge.jpg",
        width: 400,
        height: 398,
        alt: "Pavilion of American Interiors — architect's rendering",
      }}
      captions={["Pavilion of American Interiors"]}
      category={null}
      previousHref="/archS184A"
      nextHref="/archS184C"
    />
  );
}
