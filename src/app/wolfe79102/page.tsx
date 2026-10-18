import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79102 - 2.2 million dollar money tree, American Express (night) — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79102 — 2.2 million dollar money tree, made up of different foreign currencies encased in plastic, alongside American Express (at night) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79102 (legacy wolfe79102.html).
 * Tray order shows Page 62 (79100 is already Page 61).
 * Navy title and plate caption differ on the legacy page; both are kept.
 * NEXT → /wolfe79105; PREVIOUS → /wolfe79100.
 */
export default function Wolfe79102Page() {
  return (
    <WolfeSlidePage
      slideId="79102"
      title="Slide 79102 - 2.2 million dollar money tree, American Express (night)"
      image={{
        src: "/images/wolfe/79102Large.jpg",
        width: 400,
        height: 268,
        alt: "2.2 million dollar money tree, made up of different foreign currencies encased in plastic, alongside American Express (at night)",
      }}
      caption="79102 - 2.2 million dollar money tree, made up of different foreign currencies encased in plastic, alongside American Express (at night)"
      previousHref="/wolfe79100"
      nextHref="/wolfe79105"
    />
  );
}
