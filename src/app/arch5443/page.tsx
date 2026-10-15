import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5443 - Malaysia — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5443 — Malaysia — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5443 (legacy arch5443.html).
 * Nav bar shows Page 44. NEXT → /arch5444; PREVIOUS → /arch5442.
 */
export default function Arch5443Page() {
  return (
    <ArchSlidePage
      slideId={5443}
      title="Slide 5443 - Malaysia"
      image={{
        src: "/images/arch/5443Large.jpg",
        width: 400,
        height: 282,
        alt: "Malaysia — architect's rendering",
      }}
      captions={["Malaysia"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5442"
      nextHref="/arch5444"
    />
  );
}
