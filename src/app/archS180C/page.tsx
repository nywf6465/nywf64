import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S180-C - Federal Pavilion — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S180-C — Federal Pavilion — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S180-C (legacy archS180C.html).
 * Nav bar shows Page 74. NEXT → /archS180D; PREVIOUS → /archS180B.
 */
export default function ArchS180CPage() {
  return (
    <ArchSlidePage
      slideId="S180-C"
      titleId="archS180C-title"
      title="Slide S180-C - Federal Pavilion"
      image={{
        src: "/images/arch/S-180CLarge.jpg",
        width: 400,
        height: 386,
        alt: "Federal Pavilion — architect's rendering",
      }}
      captions={["Federal Pavilion"]}
      category={null}
      previousHref="/archS180B"
      nextHref="/archS180D"
    />
  );
}
