import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5460 - NCR — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5460 — NCR — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5460 (legacy arch5460.html).
 * Nav bar shows Page 61. NEXT → /arch5461; PREVIOUS → /arch5459.
 */
export default function Arch5460Page() {
  return (
    <ArchSlidePage
      slideId={5460}
      title="Slide 5460 - NCR"
      image={{
        src: "/images/arch/5460Large.jpg",
        width: 400,
        height: 273,
        alt: "National Cash Register — architect's rendering",
      }}
      captions={["National Cash Register"]}
      category="INDUSTRIAL PARTICIPANTS"
      previousHref="/arch5459"
      nextHref="/arch5461"
    />
  );
}
