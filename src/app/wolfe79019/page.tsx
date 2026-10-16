import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79019 - Fairgrounds at night, toward Eastman pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79019 — Fairgrounds at night, toward Eastman pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79019 (legacy wolfe79019.html).
 * Nav bar shows Page 14. NEXT → /wolfe79020; PREVIOUS → /wolfe79018.
 */
export default function Wolfe79019Page() {
  return (
    <WolfeSlidePage
      slideId="79019"
      title="Slide 79019 - Fairgrounds at night, toward Eastman pavilion"
      image={{
        src: "/images/wolfe/79019Large.jpg",
        width: 400,
        height: 262,
        alt: "Fairgrounds at night, toward Eastman pavilion",
      }}
      caption="79019 - Fairgrounds at night, toward Eastman pavilion"
      previousHref="/wolfe79018"
      nextHref="/wolfe79020"
    />
  );
}
