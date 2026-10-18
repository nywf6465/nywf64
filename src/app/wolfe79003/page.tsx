import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79003 - Crowds Throng Main Entrance — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79003 — Crowds Throng Main Entrance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79003 (legacy wolfe79003.html).
 * Nav bar shows Page 4. NEXT → /wolfe79004; PREVIOUS → /wolfe79001.
 * Legacy has no slide 79002; the prior tray slide is 79001.
 */
export default function Wolfe79003Page() {
  return (
    <WolfeSlidePage
      slideId="79003"
      title="Slide 79003 - Crowds Throng Main Entrance"
      image={{
        src: "/images/wolfe/79003Large.jpg",
        width: 400,
        height: 263,
        alt: "Crowds Throng Main Entrance",
      }}
      caption="79003 - Crowds Throng Main Entrance"
      previousHref="/wolfe79001"
      nextHref="/wolfe79004"
    />
  );
}
