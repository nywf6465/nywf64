import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5438 - Montana — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5438 — Montana — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5438 (legacy arch5438.html).
 * Nav bar shows Page 39. NEXT → /arch5439; PREVIOUS → /arch5437.
 */
export default function Arch5438Page() {
  return (
    <ArchSlidePage
      slideId={5438}
      title="Slide 5438 - Montana"
      image={{
        src: "/images/arch/5438Large.jpg",
        width: 400,
        height: 279,
        alt: "Montana — architect's rendering",
      }}
      captions={["Montana"]}
      category="STATES"
      previousHref="/arch5437"
      nextHref="/arch5439"
    />
  );
}
