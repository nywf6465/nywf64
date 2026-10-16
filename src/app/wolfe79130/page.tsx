import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79130 - The General Electric Pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79130 — The General Electric Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79130 (legacy wolfe79130.html).
 * Tray order shows Page 72 (79115 is Page 71; 79120 follows).
 * Legacy Next Slide and this page’s NEXT go to /wolfe79132.
 * PREVIOUS follows the 79124 Next Slide link back to /wolfe79124.
 * The tray’s previous thumbnail before 79130 is 79115, and the next is 79120.
 */
export default function Wolfe79130Page() {
  return (
    <WolfeSlidePage
      slideId="79130"
      title="Slide 79130 - The General Electric Pavilion"
      image={{
        src: "/images/wolfe/79130Large.jpg",
        width: 400,
        height: 261,
        alt: "The General Electric Pavilion",
      }}
      caption="79130 - The General Electric Pavilion"
      previousHref="/wolfe79124"
      nextHref="/wolfe79132"
    />
  );
}
