import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5466 - Scott Paper — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5466 — Scott Paper — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5466 (legacy arch5466.html).
 * Nav bar shows Page 67. NEXT → /arch5467; PREVIOUS → /arch5465.
 */
export default function Arch5466Page() {
  return (
    <ArchSlidePage
      slideId={5466}
      title="Slide 5466 - Scott Paper"
      image={{
        src: "/images/arch/5466Large.jpg",
        width: 400,
        height: 286,
        alt: "Scott Paper — architect's rendering",
      }}
      captions={["Scott Paper"]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET B"
      previousHref="/arch5465"
      nextHref="/arch5467"
    />
  );
}
