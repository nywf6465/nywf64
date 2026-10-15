import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S185-A - Philippines — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S185-A — Philippines — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S185-A (legacy archS185A.html).
 * Nav bar shows Page 92. NEXT → /archS185B; PREVIOUS → /archS184D.
 */
export default function ArchS185APage() {
  return (
    <ArchSlidePage
      slideId="S185-A"
      titleId="archS185A-title"
      title="Slide S185-A - Philippines"
      image={{
        src: "/images/arch/S-185ALarge.jpg",
        width: 400,
        height: 383,
        alt: "Philippines — architect's rendering",
      }}
      captions={["Philippines"]}
      category={null}
      previousHref="/archS184D"
      nextHref="/archS185B"
    />
  );
}
