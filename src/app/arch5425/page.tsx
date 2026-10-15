import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5425 - Dancing Waters — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5425 — Dancing Waters — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5425 (legacy arch5425.html).
 * Nav bar shows Page 26. NEXT → /arch5426; PREVIOUS → /arch5424.
 */
export default function Arch5425Page() {
  return (
    <ArchSlidePage
      slideId={5425}
      title="Slide 5425 - Dancing Waters"
      image={{
        src: "/images/arch/5425Large.jpg",
        width: 400,
        height: 280,
        alt: "Dancing Waters — architect's rendering",
      }}
      captions={[
        "Dancing Waters",
      ]}
      category="ENTERTAINMENT & EDUCATION"
      previousHref="/arch5424"
      nextHref="/arch5426"
    />
  );
}
