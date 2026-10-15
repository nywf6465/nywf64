import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S184-A - Medo Photo Supply — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S184-A — Medo Photo Supply — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S184-A (legacy archS184A.html).
 * Nav bar shows Page 88. NEXT → /archS184B; PREVIOUS → /archS183D.
 */
export default function ArchS184APage() {
  return (
    <ArchSlidePage
      slideId="S184-A"
      titleId="archS184A-title"
      title="Slide S184-A - Medo Photo Supply"
      image={{
        src: "/images/arch/S-184ALarge.jpg",
        width: 400,
        height: 366,
        alt: "Medo - Photographic Headquarters — architect's rendering",
      }}
      captions={["Medo - Photographic Headquarters"]}
      category={null}
      previousHref="/archS183D"
      nextHref="/archS184B"
    />
  );
}
