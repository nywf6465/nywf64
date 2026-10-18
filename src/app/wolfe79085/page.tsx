import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79085 - Hollywood pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79085 — Hollywood pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79085 (legacy wolfe79085.html).
 * Nav bar shows Page 57. NEXT → /wolfe79088 (tray and legacy; 790788 is not a slide); PREVIOUS → /wolfe79083.
 */
export default function Wolfe79085Page() {
  return (
    <WolfeSlidePage
      slideId="79085"
      title="Slide 79085 - Hollywood pavilion"
      image={{
        src: "/images/wolfe/79085Large.jpg",
        width: 400,
        height: 262,
        alt: "Hollywood pavilion",
      }}
      caption="79085 - Hollywood pavilion"
      previousHref="/wolfe79083"
      nextHref="/wolfe79088"
    />
  );
}
