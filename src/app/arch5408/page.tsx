import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5408 - Pool of Industry (Blue) — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5408 — Pool of Industry (Blue) — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5408 (legacy arch5408.html).
 * Nav bar shows Page 9. NEXT → /arch5409; PREVIOUS → /arch5407.
 */
export default function Arch5408Page() {
  return (
    <ArchSlidePage
      slideId={5408}
      title="Slide 5408 - Pool of Industry (Blue)"
      image={{
        src: "/images/arch/5408Large.jpg",
        width: 400,
        height: 280,
        alt: "Pool of Industry (Blue) — architect's rendering",
      }}
      captions={["Pool of Industry (Blue)"]}
      previousHref="/arch5407"
      nextHref="/arch5409"
    />
  );
}
