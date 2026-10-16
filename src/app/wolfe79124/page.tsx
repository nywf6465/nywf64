import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79124 - Futuristic home, concluding G.M. tour — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79124 — Futuristic home, concluding G.M. tour — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79124 (legacy wolfe79124.html).
 * Tray order shows Page 76 (79123 is already Page 75).
 * Legacy Next Slide and this page’s NEXT go to /wolfe79130.
 * The tray’s next thumbnail after 79124 is 79132.
 * PREVIOUS → /wolfe79123.
 */
export default function Wolfe79124Page() {
  return (
    <WolfeSlidePage
      slideId="79124"
      title="Slide 79124 - Futuristic home, concluding G.M. tour"
      image={{
        src: "/images/wolfe/79124Large.jpg",
        width: 400,
        height: 264,
        alt: "Futuristic home, concluding G.M. tour",
      }}
      caption="79124 - Futuristic home, concluding G.M. tour"
      previousHref="/wolfe79123"
      nextHref="/wolfe79130"
    />
  );
}
