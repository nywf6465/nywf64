import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5447 - Sierra Leone — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5447 — Sierra Leone — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5447 (legacy arch5447.html).
 * Nav bar shows Page 48. NEXT → /arch5448; PREVIOUS → /arch5446.
 */
export default function Arch5447Page() {
  return (
    <ArchSlidePage
      slideId={5447}
      title="Slide 5447 - Sierra Leone"
      image={{
        src: "/images/arch/5447Large.jpg",
        width: 400,
        height: 282,
        alt: "Sierra Leone — architect's rendering",
      }}
      captions={["Sierra Leone"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5446"
      nextHref="/arch5448"
    />
  );
}
