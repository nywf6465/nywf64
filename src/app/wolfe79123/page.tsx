import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79123 - City of the future, with moving sidewalks and mid-city airport — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79123 — City of the future, with moving sidewalks and mid-city airport — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79123 (legacy wolfe79123.html).
 * Tray order shows Page 75 (79121 is already Page 74).
 * NEXT → /wolfe79124; PREVIOUS → /wolfe79121.
 */
export default function Wolfe79123Page() {
  return (
    <WolfeSlidePage
      slideId="79123"
      title="Slide 79123 - City of the future, with moving sidewalks and mid-city airport"
      image={{
        src: "/images/wolfe/79123Large.jpg",
        width: 400,
        height: 263,
        alt: "City of the future, with moving sidewalks and mid-city airport",
      }}
      caption="79123 - City of the future, with moving sidewalks and mid-city airport"
      previousHref="/wolfe79121"
      nextHref="/wolfe79124"
    />
  );
}
