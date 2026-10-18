import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79121 - Logging 'truck' of the future cust through forest using laser light beam — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79121 — Logging 'truck' of the future cuts swath through forest using laser light beam — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79121 (legacy wolfe79121.html).
 * Tray order shows Page 74 (79120 is already Page 73).
 * The legacy navy title spells “cust”; the plate caption spells “cuts swath”. Both are kept.
 * NEXT → /wolfe79123; PREVIOUS → /wolfe79120.
 */
export default function Wolfe79121Page() {
  return (
    <WolfeSlidePage
      slideId="79121"
      title="Slide 79121 - Logging 'truck' of the future cust through forest using laser light beam"
      image={{
        src: "/images/wolfe/79121Large.jpg",
        width: 400,
        height: 264,
        alt: "Logging 'truck' of the future cuts swath through forest using laser light beam",
      }}
      caption="79121 - Logging 'truck' of the future cuts swath through forest using laser light beam"
      previousHref="/wolfe79120"
      nextHref="/wolfe79123"
    />
  );
}
