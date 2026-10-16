import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79049 - Model of the Temple of Solomon, inside American-Israel pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79049 — Model of the Temple of Solomon, inside American-Israel pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79049 (legacy wolfe79049.html).
 * Nav bar shows Page 38. NEXT → /wolfe79052; PREVIOUS → /wolfe79048.
 */
export default function Wolfe79049Page() {
  return (
    <WolfeSlidePage
      slideId="79049"
      title="Slide 79049 - Model of the Temple of Solomon, inside American-Israel pavilion"
      image={{
        src: "/images/wolfe/79049Large.jpg",
        width: 400,
        height: 260,
        alt: "Model of the Temple of Solomon, inside American-Israel pavilion",
      }}
      caption="79049 - Model of the Temple of Solomon, inside American-Israel pavilion"
      previousHref="/wolfe79048"
      nextHref="/wolfe79052"
    />
  );
}
