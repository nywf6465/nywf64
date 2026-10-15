import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S181-D - Solar Fountain - Night — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S181-D — Solar Fountain - Night — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S181-D (legacy archS181D.html).
 * Nav bar shows Page 79. NEXT → /archS182A; PREVIOUS → /archS181C.
 */
export default function ArchS181DPage() {
  return (
    <ArchSlidePage
      slideId="S181-D"
      titleId="archS181D-title"
      title="Slide S181-D - Solar Fountain - Night"
      image={{
        src: "/images/arch/S-181DLarge.jpg",
        width: 400,
        height: 378,
        alt: "Solar Fountain - Night — architect's rendering",
      }}
      captions={["Solar Fountain - Night"]}
      category={null}
      previousHref="/archS181C"
      nextHref="/archS182A"
    />
  );
}
