import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79024 - Official scale model of the Fair inside American Express — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79024 — Official scale model of the Fair inside American Express — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79024 (legacy wolfe79024.html).
 * Nav bar shows Page 19. NEXT → /wolfe79025; PREVIOUS → /wolfe79023.
 */
export default function Wolfe79024Page() {
  return (
    <WolfeSlidePage
      slideId="79024"
      title="Slide 79024 - Official scale model of the Fair inside American Express"
      image={{
        src: "/images/wolfe/79024Large.jpg",
        width: 400,
        height: 263,
        alt: "Official scale model of the Fair inside American Express",
      }}
      caption="79024 - Official scale model of the Fair inside American Express"
      previousHref="/wolfe79023"
      nextHref="/wolfe79025"
    />
  );
}
