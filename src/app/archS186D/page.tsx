import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S186-D - Wax Museum — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S186-D — Wax Museum — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S186-D (legacy archS186D.html).
 * Nav bar shows Page 99. NEXT → /archS187A; PREVIOUS → /archS186C.
 */
export default function ArchS186DPage() {
  return (
    <ArchSlidePage
      slideId="S186-D"
      titleId="archS186D-title"
      title="Slide S186-D - Wax Museum"
      image={{
        src: "/images/arch/S-186DLarge.jpg",
        width: 400,
        height: 346,
        alt: "Wax Museum — architect's rendering",
      }}
      captions={["Wax Museum"]}
      category={null}
      previousHref="/archS186C"
      nextHref="/archS187A"
    />
  );
}
