import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S182-C - Thailand — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S182-C — Thailand — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S182-C (legacy archS182C.html).
 * Nav bar shows Page 82. NEXT → /archS182D; PREVIOUS → /archS182B.
 */
export default function ArchS182CPage() {
  return (
    <ArchSlidePage
      slideId="S182-C"
      titleId="archS182C-title"
      title="Slide S182-C - Thailand"
      image={{
        src: "/images/arch/S-182CLarge.jpg",
        width: 400,
        height: 388,
        alt: "Thailand — architect's rendering",
      }}
      captions={["Thailand"]}
      category={null}
      previousHref="/archS182B"
      nextHref="/archS182D"
    />
  );
}
