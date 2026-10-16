import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79060 - The Hong Kong pavilion lighted at dusk — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79060 — The Hong Kong pavilion lighted at dusk — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79060 (legacy wolfe79060.html).
 * Nav bar shows Page 45. NEXT → /wolfe79061; PREVIOUS → /wolfe79059.
 */
export default function Wolfe79060Page() {
  return (
    <WolfeSlidePage
      slideId="79060"
      title="Slide 79060 - The Hong Kong pavilion lighted at dusk"
      image={{
        src: "/images/wolfe/79060Large.jpg",
        width: 400,
        height: 262,
        alt: "The Hong Kong pavilion lighted at dusk",
      }}
      caption="79060 - The Hong Kong pavilion lighted at dusk"
      previousHref="/wolfe79059"
      nextHref="/wolfe79061"
    />
  );
}
