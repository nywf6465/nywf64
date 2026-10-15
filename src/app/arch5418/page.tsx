import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5418 - U.S. Post Office — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5418 — U.S. Post Office — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5418 (legacy arch5418.html).
 * Nav bar shows Page 19. NEXT → /arch5419; PREVIOUS → /arch5417.
 */
export default function Arch5418Page() {
  return (
    <ArchSlidePage
      slideId={5418}
      title="Slide 5418 - U.S. Post Office"
      image={{
        src: "/images/arch/5418Large.jpg",
        width: 400,
        height: 276,
        alt: "U.S. Post Office — architect's rendering",
      }}
      captions={["U.S. Post Office"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5417"
      nextHref="/arch5419"
    />
  );
}
