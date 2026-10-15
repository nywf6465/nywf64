import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5445 - Morocco — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5445 — Morocco — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5445 (legacy arch5445.html).
 * Nav bar shows Page 46. NEXT → /arch5446; PREVIOUS → /arch5444.
 */
export default function Arch5445Page() {
  return (
    <ArchSlidePage
      slideId={5445}
      title="Slide 5445 - Morocco"
      image={{
        src: "/images/arch/5445Large.jpg",
        width: 400,
        height: 282,
        alt: "Morocco — architect's rendering",
      }}
      captions={["Morocco"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5444"
      nextHref="/arch5446"
    />
  );
}
