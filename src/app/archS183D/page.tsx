import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S183-D - Seven-Up — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S183-D — Seven-Up — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S183-D (legacy archS183D.html).
 * Nav bar shows Page 87. NEXT → /archS184A; PREVIOUS → /archS183C.
 */
export default function ArchS183DPage() {
  return (
    <ArchSlidePage
      slideId="S183-D"
      titleId="archS183D-title"
      title="Slide S183-D - Seven-Up"
      image={{
        src: "/images/arch/S-183DLarge.jpg",
        width: 400,
        height: 382,
        alt: "Seven-Up — architect's rendering",
      }}
      captions={["Seven-Up"]}
      category={null}
      previousHref="/archS183C"
      nextHref="/archS184A"
    />
  );
}
