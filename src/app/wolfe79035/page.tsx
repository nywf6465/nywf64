import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79035 - Masonic Brotherhood Center lighted at dusk — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79035 — Masonic Brotherhood Center lighted at dusk — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79035 (legacy wolfe79035.html).
 * Nav bar shows Page 30. NEXT → /wolfe79037; PREVIOUS → /wolfe79034.
 */
export default function Wolfe79035Page() {
  return (
    <WolfeSlidePage
      slideId="79035"
      title="Slide 79035 - Masonic Brotherhood Center lighted at dusk"
      image={{
        src: "/images/wolfe/79035Large.jpg",
        width: 400,
        height: 263,
        alt: "Masonic Brotherhood Center lighted at dusk",
      }}
      caption="79035 - Masonic Brotherhood Center lighted at dusk"
      previousHref="/wolfe79034"
      nextHref="/wolfe79037"
    />
  );
}
