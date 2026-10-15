import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S184-C - Coca Cola — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S184-C — Coca Cola — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S184-C (legacy archS184C.html).
 * Nav bar shows Page 90. NEXT → /archS184D; PREVIOUS → /archS184B.
 */
export default function ArchS184CPage() {
  return (
    <ArchSlidePage
      slideId="S184-C"
      titleId="archS184C-title"
      title="Slide S184-C - Coca Cola"
      image={{
        src: "/images/arch/S-184CLarge.jpg",
        width: 400,
        height: 364,
        alt: "Coca Cola — architect's rendering",
      }}
      captions={["Coca Cola"]}
      category={null}
      previousHref="/archS184B"
      nextHref="/archS184D"
    />
  );
}
