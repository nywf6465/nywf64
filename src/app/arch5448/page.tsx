import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 5448 - Republic of Korea — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide 5448 — Republic of Korea — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide 5448 (legacy arch5448.html).
 * Nav bar shows Page 49. NEXT → /arch5449; PREVIOUS → /arch5447.
 */
export default function Arch5448Page() {
  return (
    <ArchSlidePage
      slideId={5448}
      title="Slide 5448 - Republic of Korea"
      image={{
        src: "/images/arch/5448Large.jpg",
        width: 400,
        height: 282,
        alt: "Republic of Korea — architect's rendering",
      }}
      captions={["Republic of Korea"]}
      category="FOREIGN PARTICIPANTS"
      previousHref="/arch5447"
      nextHref="/arch5449"
    />
  );
}
