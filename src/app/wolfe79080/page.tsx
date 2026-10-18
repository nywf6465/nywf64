import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79080 - Antique car ride in Amusement Area — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79080 — Antique car ride in Amusement Area — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79080 (legacy wolfe79080.html).
 * Nav bar shows Page 55. NEXT → /wolfe79083 (tray and legacy; 790783 is not a slide); PREVIOUS → /wolfe79079.
 */
export default function Wolfe79080Page() {
  return (
    <WolfeSlidePage
      slideId="79080"
      title="Slide 79080 - Antique car ride in Amusement Area"
      image={{
        src: "/images/wolfe/79080Large.jpg",
        width: 400,
        height: 263,
        alt: "Antique car ride in Amusement Area",
      }}
      caption="79080 - Antique car ride in Amusement Area"
      previousHref="/wolfe79079"
      nextHref="/wolfe79083"
    />
  );
}
