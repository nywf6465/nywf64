import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S181-C - Pool of Industry — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S181-C — Pool of Industry — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S181-C (legacy archS181C.html).
 * Nav bar shows Page 78. NEXT → /archS181D; PREVIOUS → /archS181B.
 */
export default function ArchS181CPage() {
  return (
    <ArchSlidePage
      slideId="S181-C"
      titleId="archS181C-title"
      title="Slide S181-C - Pool of Industry"
      image={{
        src: "/images/arch/S-181CLarge.jpg",
        width: 400,
        height: 387,
        alt: "Pool of Industry — architect's rendering",
      }}
      captions={["Pool of Industry"]}
      category={null}
      previousHref="/archS181B"
      nextHref="/archS181D"
    />
  );
}
