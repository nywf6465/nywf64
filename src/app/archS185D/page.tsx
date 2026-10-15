import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S185-D - Indonesia — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S185-D — Indonesia — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S185-D (legacy archS185D.html).
 * Nav bar shows Page 95. NEXT → /archS186A; PREVIOUS → /archS185C.
 */
export default function ArchS185DPage() {
  return (
    <ArchSlidePage
      slideId="S185-D"
      titleId="archS185D-title"
      title="Slide S185-D - Indonesia"
      image={{
        src: "/images/arch/S-185DLarge.jpg",
        width: 400,
        height: 390,
        alt: "Indonesia — architect's rendering",
      }}
      captions={["Indonesia"]}
      category={null}
      previousHref="/archS185C"
      nextHref="/archS186A"
    />
  );
}
