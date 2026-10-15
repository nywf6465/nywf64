import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S187-D - Christian Science — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S187-D — Christian Science — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S187-D (legacy archS187D.html).
 * Nav bar shows Page 103. NEXT → /arch5401; PREVIOUS → /archS187C.
 */
export default function ArchS187DPage() {
  return (
    <ArchSlidePage
      slideId="S187-D"
      titleId="archS187D-title"
      title="Slide S187-D - Christian Science"
      image={{
        src: "/images/arch/S-187DLarge.jpg",
        width: 400,
        height: 386,
        alt: "Christian Science — architect's rendering",
      }}
      captions={["Christian Science"]}
      category={null}
      previousHref="/archS187C"
      nextHref="/arch5401"
    />
  );
}
