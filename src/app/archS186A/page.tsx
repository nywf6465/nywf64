import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S186-A - Hall of Education — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S186-A — Hall of Education — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S186-A (legacy archS186A.html).
 * Nav bar shows Page 96. NEXT → /archS186B; PREVIOUS → /archS185D.
 */
export default function ArchS186APage() {
  return (
    <ArchSlidePage
      slideId="S186-A"
      titleId="archS186A-title"
      title="Slide S186-A - Hall of Education"
      image={{
        src: "/images/arch/S-186ALarge.jpg",
        width: 400,
        height: 388,
        alt: "Hall of Education — architect's rendering",
      }}
      captions={["Hall of Education"]}
      category={null}
      previousHref="/archS185D"
      nextHref="/archS186B"
    />
  );
}
