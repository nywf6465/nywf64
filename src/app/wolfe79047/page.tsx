import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79047 - Looking into interior model of Dome of the Rock, inside Jordan pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79047 — Looking into interior of model of Dome of the Rock, with roof removed - inside Jordan pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79047 (legacy wolfe79047.html).
 * Nav bar shows Page 36. NEXT → /wolfe79048; PREVIOUS → /wolfe79046.
 * Navy title and plate caption differ on the legacy page; both are kept.
 */
export default function Wolfe79047Page() {
  return (
    <WolfeSlidePage
      slideId="79047"
      title="Slide 79047 - Looking into interior model of Dome of the Rock, inside Jordan pavilion"
      image={{
        src: "/images/wolfe/79047Large.jpg",
        width: 400,
        height: 262,
        alt: "Looking into interior of model of Dome of the Rock, with roof removed - inside Jordan pavilion",
      }}
      caption="79047 - Looking into interior of model of Dome of the Rock, with roof removed - inside Jordan pavilion"
      previousHref="/wolfe79046"
      nextHref="/wolfe79048"
    />
  );
}
