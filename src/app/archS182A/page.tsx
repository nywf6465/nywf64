import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S182-A - Sudan — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S182-A — Sudan — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S182-A (legacy archS182A.html).
 * Nav bar shows Page 80. NEXT → /archS182B; PREVIOUS → /archS181D.
 */
export default function ArchS182APage() {
  return (
    <ArchSlidePage
      slideId="S182-A"
      titleId="archS182A-title"
      title="Slide S182-A - Sudan"
      image={{
        src: "/images/arch/S-182ALarge.jpg",
        width: 400,
        height: 371,
        alt: "Sudan — architect's rendering",
      }}
      captions={["Sudan"]}
      category={null}
      previousHref="/archS181D"
      nextHref="/archS182B"
    />
  );
}
