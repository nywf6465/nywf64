import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S186-C - Sermons from Science — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S186-C — Sermons from Science — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S186-C (legacy archS186C.html).
 * Nav bar shows Page 98. NEXT → /archS186D; PREVIOUS → /archS186B.
 */
export default function ArchS186CPage() {
  return (
    <ArchSlidePage
      slideId="S186-C"
      titleId="archS186C-title"
      title="Slide S186-C - Sermons from Science"
      image={{
        src: "/images/arch/S-186CLarge.jpg",
        width: 400,
        height: 360,
        alt: "Sermons from Science — architect's rendering",
      }}
      captions={["Sermons from Science"]}
      category={null}
      previousHref="/archS186B"
      nextHref="/archS186D"
    />
  );
}
