import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79106 - Ford Rotunda at night from atop N.Y. Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79106 — Ford Rotunda at night from atop N.Y. Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79106 (legacy wolfe79106.html).
 * Tray order shows Page 64 (79105 is already Page 63).
 * NEXT → /wolfe79108; PREVIOUS → /wolfe79105.
 */
export default function Wolfe79106Page() {
  return (
    <WolfeSlidePage
      slideId="79106"
      title="Slide 79106 - Ford Rotunda at night from atop N.Y. Tower"
      image={{
        src: "/images/wolfe/79106Large.jpg",
        width: 400,
        height: 263,
        alt: "Ford Rotunda at night from atop N.Y. Tower",
      }}
      caption="79106 - Ford Rotunda at night from atop N.Y. Tower"
      previousHref="/wolfe79105"
      nextHref="/wolfe79108"
    />
  );
}
