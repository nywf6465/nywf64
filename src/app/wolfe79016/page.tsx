import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79016 - Distant Manhattan at dusk, from atop Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79016 — Distant Manhattan at dusk, from atop Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79016 (legacy wolfe79016.html).
 * Nav bar shows Page 12. NEXT → /wolfe79018; PREVIOUS → /wolfe79015.
 */
export default function Wolfe79016Page() {
  return (
    <WolfeSlidePage
      slideId="79016"
      title="Slide 79016 - Distant Manhattan at dusk, from atop Tower"
      image={{
        src: "/images/wolfe/79016Large.jpg",
        width: 400,
        height: 262,
        alt: "Distant Manhattan at dusk, from atop Tower",
      }}
      caption="79016 - Distant Manhattan at dusk, from atop Tower"
      previousHref="/wolfe79015"
      nextHref="/wolfe79018"
    />
  );
}
