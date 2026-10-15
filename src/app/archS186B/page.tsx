import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S186-B - Hall of Science — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S186-B — Hall of Science — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S186-B (legacy archS186B.html).
 * Nav bar shows Page 97. NEXT → /archS186C; PREVIOUS → /archS186A.
 */
export default function ArchS186BPage() {
  return (
    <ArchSlidePage
      slideId="S186-B"
      titleId="archS186B-title"
      title="Slide S186-B - Hall of Science"
      image={{
        src: "/images/arch/S-186BLarge.jpg",
        width: 400,
        height: 417,
        alt: "Hall of Science — architect's rendering",
      }}
      captions={["Hall of Science"]}
      category={null}
      previousHref="/archS186A"
      nextHref="/archS186C"
    />
  );
}
