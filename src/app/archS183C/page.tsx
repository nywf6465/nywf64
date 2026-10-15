import type { Metadata } from "next";
import { ArchSlidePage } from "@/components/ArchSlidePage";

export const metadata: Metadata = {
  title:
    "Slide S183-C - Sinclair — The Architectural Series — nywf64.com",
  description:
    "Architectural Series slide S183-C — Sinclair — Photo Lab slides on nywf64.com.",
};

/**
 * Architectural Series slide S183-C (legacy archS183C.html).
 * Nav bar shows Page 86. NEXT → /archS183D; PREVIOUS → /archS183B.
 */
export default function ArchS183CPage() {
  return (
    <ArchSlidePage
      slideId="S183-C"
      titleId="archS183C-title"
      title="Slide S183-C - Sinclair"
      image={{
        src: "/images/arch/S-183CLarge.jpg",
        width: 400,
        height: 379,
        alt: "Sinclair Dinoland — architect's rendering",
      }}
      captions={["Sinclair Dinoland"]}
      category={null}
      previousHref="/archS183B"
      nextHref="/archS183D"
    />
  );
}
