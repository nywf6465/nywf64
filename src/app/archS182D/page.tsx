import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S182-D - Vatican — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S182-D — Vatican — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S182-D (legacy archS182D.html).
 * Nav bar shows Page 83. NEXT → /archS183A; PREVIOUS → /archS182C.
 */
export default function ArchS182DPage() {
  return (
    <ArchSlidePage
      slideId="S182-D"
      titleId="archS182D-title"
      title="Slide S182-D - Vatican"
      image={{
        src: "/images/arch/S-182DLarge.jpg",
        width: 400,
        height: 371,
        alt: "Vatican Pavilion — architect's rendering",
      }}
      captions={["Vatican Pavilion"]}
      category={null}
      previousHref="/archS182C"
      nextHref="/archS183A"
    />
  );
}
