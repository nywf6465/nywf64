import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79088 - Inside Hollywood Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79088 — Inside Hollywood Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79088 (legacy wolfe79088.html).
 * Tray order shows Page 58 (79085 is already Page 57).
 * NEXT → /wolfe79090 (tray and legacy; 790790 is not a slide); PREVIOUS → /wolfe79085.
 */
export default function Wolfe79088Page() {
  return (
    <WolfeSlidePage
      slideId="79088"
      title="Slide 79088 - Inside Hollywood Pavilion"
      image={{
        src: "/images/wolfe/79088Large.jpg",
        width: 400,
        height: 264,
        alt: "Inside Hollywood Pavilion",
      }}
      caption="79088 - Inside Hollywood Pavilion"
      previousHref="/wolfe79085"
      nextHref="/wolfe79090"
    />
  );
}
