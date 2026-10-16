import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79132 - Late 19th Century phase of G.E. Progressland show — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79132 — Late 19th Century phase of G.E. Progressland show — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79132 (legacy wolfe79132.html).
 * Tray order shows Page 77 (79124 is already Page 76).
 * Legacy Next Slide and this page’s NEXT go to /wolfe79133.
 * PREVIOUS follows the 79130 Next Slide link back to /wolfe79130.
 * The tray’s previous thumbnail before 79132 is 79124.
 */
export default function Wolfe79132Page() {
  return (
    <WolfeSlidePage
      slideId="79132"
      title="Slide 79132 - Late 19th Century phase of G.E. Progressland show"
      image={{
        src: "/images/wolfe/79132Large.jpg",
        width: 400,
        height: 263,
        alt: "Late 19th Century phase of G.E. Progressland show",
      }}
      caption="79132 - Late 19th Century phase of G.E. Progressland show"
      previousHref="/wolfe79130"
      nextHref="/wolfe79133"
    />
  );
}
