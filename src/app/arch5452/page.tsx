import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5452 - Continental Insurance — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5452 — Continental Insurance — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5452 (legacy arch5452.html).
 * Nav bar shows Page 53. NEXT → /arch5453; PREVIOUS → /arch5451.
 */
export default function Arch5452Page() {
  return (
    <ArchSlidePage
      slideId={5452}
      title="Slide 5452 - Continental Insurance"
      image={{
        src: "/images/arch/5452Large.jpg",
        width: 400,
        height: 281,
        alt: "Continental Insurance Companies Model — architect's rendering",
      }}
      captions={[
        "Continental Insurance Companies",
        "Model",
      ]}
      category="INDUSTRIAL PARTICIPANTS"
      setLabel="SET A"
      previousHref="/arch5451"
      nextHref="/arch5453"
    />
  );
}
