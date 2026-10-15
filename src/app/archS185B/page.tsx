import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S185-B - Republic of China — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S185-B — Republic of China — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S185-B (legacy archS185B.html).
 * Nav bar shows Page 93. NEXT → /archS185C; PREVIOUS → /archS185A.
 */
export default function ArchS185BPage() {
  return (
    <ArchSlidePage
      slideId="S185-B"
      titleId="archS185B-title"
      title="Slide S185-B - Republic of China"
      image={{
        src: "/images/arch/S-185BLarge.jpg",
        width: 400,
        height: 377,
        alt: "Republic of China — architect's rendering",
      }}
      captions={["Republic of China"]}
      category={null}
      previousHref="/archS185A"
      nextHref="/archS185C"
    />
  );
}
