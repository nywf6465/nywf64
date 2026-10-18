import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79000 - Unisphere and Fountains at Dusk — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79000 — Unisphere and Fountains at Dusk — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79000 (legacy wolfe79000.html).
 * Nav bar shows Page 2. NEXT → /wolfe79001; PREVIOUS → /wolfetray.
 */
export default function Wolfe79000Page() {
  return (
    <WolfeSlidePage
      slideId="79000"
      title="Slide 79000 - Unisphere and Fountains at Dusk"
      image={{
        src: "/images/wolfe/79000Large.jpg",
        width: 400,
        height: 262,
        alt: "Unisphere and Fountains at Dusk",
      }}
      caption="79000 - Unisphere and Fountains at Dusk"
      previousHref="/wolfetray"
      nextHref="/wolfe79001"
    />
  );
}
