import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79052 - Elves pouring and pumping into kettle, Schaefer Center — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79052 — Elves pouring and pumping into kettle, Schaefer Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79052 (legacy wolfe79052.html).
 * Nav bar shows Page 39. NEXT → /wolfe79053; PREVIOUS → /wolfe79049.
 */
export default function Wolfe79052Page() {
  return (
    <WolfeSlidePage
      slideId="79052"
      title="Slide 79052 - Elves pouring and pumping into kettle, Schaefer Center"
      image={{
        src: "/images/wolfe/79052Large.jpg",
        width: 400,
        height: 261,
        alt: "Elves pouring and pumping into kettle, Schaefer Center",
      }}
      caption="79052 - Elves pouring and pumping into kettle, Schaefer Center"
      previousHref="/wolfe79049"
      nextHref="/wolfe79053"
    />
  );
}
