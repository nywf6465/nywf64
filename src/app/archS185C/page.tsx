import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S185-C - Hong Kong — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S185-C — Hong Kong — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S185-C (legacy archS185C.html).
 * Nav bar shows Page 94. NEXT → /archS185D; PREVIOUS → /archS185B.
 */
export default function ArchS185CPage() {
  return (
    <ArchSlidePage
      slideId="S185-C"
      titleId="archS185C-title"
      title="Slide S185-C - Hong Kong"
      image={{
        src: "/images/arch/S-185CLarge.jpg",
        width: 400,
        height: 387,
        alt: "Hong Kong — architect's rendering",
      }}
      captions={["Hong Kong"]}
      category={null}
      previousHref="/archS185B"
      nextHref="/archS185D"
    />
  );
}
