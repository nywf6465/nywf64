import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5421 - Auto Thrill Show — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5421 — Auto Thrill Show — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5421 (legacy arch5421.html).
 * Nav bar shows Page 22. NEXT → /arch5422; PREVIOUS → /arch5420.
 */
export default function Arch5421Page() {
  return (
    <ArchSlidePage
      slideId={5421}
      title="Slide 5421 - Auto Thrill Show"
      image={{
        src: "/images/arch/5421Large.jpg",
        width: 400,
        height: 278,
        alt: "Auto Thrill Show — architect's rendering",
      }}
      captions={[
        "Auto Thrill Show",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5420"
      nextHref="/arch5422"
    />
  );
}
