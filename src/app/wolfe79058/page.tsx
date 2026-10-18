import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79058 - Weird colors and design of junks alongside Hong Kong — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79058 — Weird colors and design of junks alongside Hong Kong — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79058 (legacy wolfe79058.html).
 * Nav bar shows Page 43. NEXT → /wolfe79059; PREVIOUS → /wolfe79057.
 */
export default function Wolfe79058Page() {
  return (
    <WolfeSlidePage
      slideId="79058"
      title="Slide 79058 - Weird colors and design of junks alongside Hong Kong"
      image={{
        src: "/images/wolfe/79058Large.jpg",
        width: 260,
        height: 400,
        alt: "Weird colors and design of junks alongside Hong Kong",
      }}
      caption="79058 - Weird colors and design of junks alongside Hong Kong"
      previousHref="/wolfe79057"
      nextHref="/wolfe79059"
    />
  );
}
