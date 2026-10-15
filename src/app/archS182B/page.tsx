import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S182-B - Hong Kong — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S182-B — Hong Kong — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S182-B (legacy archS182B.html).
 * Nav bar shows Page 81. NEXT → /archS182C; PREVIOUS → /archS182A.
 */
export default function ArchS182BPage() {
  return (
    <ArchSlidePage
      slideId="S182-B"
      titleId="archS182B-title"
      title="Slide S182-B - Hong Kong"
      image={{
        src: "/images/arch/S-182BLarge.jpg",
        width: 400,
        height: 388,
        alt: "Hong Kong (Model) — architect's rendering",
      }}
      captions={["Hong Kong (Model)"]}
      category={null}
      previousHref="/archS182A"
      nextHref="/archS182C"
    />
  );
}
