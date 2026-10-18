import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79046 - The Jordan pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79046 — The Jordan pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79046 (legacy wolfe79046.html).
 * Nav bar shows Page 35. NEXT → /wolfe79047; PREVIOUS → /wolfe79045.
 */
export default function Wolfe79046Page() {
  return (
    <WolfeSlidePage
      slideId="79046"
      title="Slide 79046 - The Jordan pavilion"
      image={{
        src: "/images/wolfe/79046Large.jpg",
        width: 400,
        height: 263,
        alt: "The Jordan pavilion",
      }}
      caption="79046 - The Jordan pavilion"
      previousHref="/wolfe79045"
      nextHref="/wolfe79047"
    />
  );
}
