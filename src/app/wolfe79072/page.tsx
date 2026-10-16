import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79072 - Taj Mahal through fountains, inside Coke pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79072 — Taj Mahal through fountains, inside Coke pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79072 (legacy wolfe79072.html).
 * Nav bar shows Page 52. NEXT → /wolfe79073; PREVIOUS → /wolfe79068.
 */
export default function Wolfe79072Page() {
  return (
    <WolfeSlidePage
      slideId="79072"
      title="Slide 79072 - Taj Mahal through fountains, inside Coke pavilion"
      image={{
        src: "/images/wolfe/79072Large.jpg",
        width: 400,
        height: 261,
        alt: "Taj Mahal through fountains, inside Coke pavilion",
      }}
      caption="79072 - Taj Mahal through fountains, inside Coke pavilion"
      previousHref="/wolfe79068"
      nextHref="/wolfe79073"
    />
  );
}
