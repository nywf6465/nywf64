import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79114 - Telephoto fo Futurama from N.Y. Tower at night — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79114 — Telephoto of Futurama from N.Y. Tower at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79114 (legacy wolfe79114.html).
 * Tray order shows Page 70 (79112 is already Page 69).
 * The legacy navy title spells “fo”; the plate caption spells “of”. Both are kept.
 * NEXT → /wolfe79115; PREVIOUS → /wolfe79112.
 */
export default function Wolfe79114Page() {
  return (
    <WolfeSlidePage
      slideId="79114"
      title="Slide 79114 - Telephoto fo Futurama from N.Y. Tower at night"
      image={{
        src: "/images/wolfe/79114Large.jpg",
        width: 400,
        height: 262,
        alt: "Telephoto of Futurama from N.Y. Tower at night",
      }}
      caption="79114 - Telephoto of Futurama from N.Y. Tower at night"
      previousHref="/wolfe79112"
      nextHref="/wolfe79115"
    />
  );
}
