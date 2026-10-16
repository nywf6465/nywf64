import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79090 - President Abraham Lincoln, inside Illinois pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79090 — President Abraham Lincoln, inside Illinois pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79090 (legacy wolfe79090.html).
 * Tray order shows Page 59 (79085 is Page 57 and 79088 is Page 58).
 * NEXT → /wolfe79095 (tray and legacy; 790795 is not a slide); PREVIOUS → /wolfe79088.
 */
export default function Wolfe79090Page() {
  return (
    <WolfeSlidePage
      slideId="79090"
      title="Slide 79090 - President Abraham Lincoln, inside Illinois pavilion"
      image={{
        src: "/images/wolfe/79090Large.jpg",
        width: 263,
        height: 400,
        alt: "President Abraham Lincoln, inside Illinois pavilion",
      }}
      caption="79090 - President Abraham Lincoln, inside Illinois pavilion"
      previousHref="/wolfe79088"
      nextHref="/wolfe79095"
    />
  );
}
