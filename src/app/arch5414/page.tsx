import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5414 - Greyhound Information Booth — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5414 — Greyhound Information Booth at the Fair — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5414 (legacy arch5414.html).
 * Nav bar shows Page 15. NEXT → /arch5415; PREVIOUS → /arch5413.
 */
export default function Arch5414Page() {
  return (
    <ArchSlidePage
      slideId={5414}
      title="Slide 5414 - Greyhound Information Booth"
      image={{
        src: "/images/arch/5414Large.jpg",
        width: 325,
        height: 400,
        alt: "Greyhound Information Booth at the Fair — architect's rendering",
      }}
      captions={["Greyhound Information Booth", "at the Fair"]}
      category="PUBLIC SERVICES"
      previousHref="/arch5413"
      nextHref="/arch5415"
    />
  );
}
