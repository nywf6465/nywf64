import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5444 - Austria — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5444 — Austria — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5444 (legacy arch5444.html).
 * Nav bar shows Page 45. NEXT → /arch5445; PREVIOUS → /arch5443.
 */
export default function Arch5444Page() {
  return (
    <ArchSlidePage
      slideId={5444}
      title="Slide 5444 - Austria"
      image={{
        src: "/images/arch/5444Large.jpg",
        width: 400,
        height: 274,
        alt: "Austria — architect's rendering",
      }}
      captions={["Austria"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5443"
      nextHref="/arch5445"
    />
  );
}
