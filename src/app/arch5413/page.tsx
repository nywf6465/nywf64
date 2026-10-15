import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5413 - Electric Power and Light — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5413 — Electric Power and Light — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5413 (legacy arch5413.html).
 * Nav bar shows Page 14. NEXT → /arch5414; PREVIOUS → /arch5412.
 */
export default function Arch5413Page() {
  return (
    <ArchSlidePage
      slideId={5413}
      title="Slide 5413 - Electric Power and Light"
      image={{
        src: "/images/arch/5413Large.jpg",
        width: 285,
        height: 400,
        alt: "Electric Power and Light — architect's rendering",
      }}
      captions={["Electric Power and Light"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5412"
      nextHref="/arch5414"
    />
  );
}
