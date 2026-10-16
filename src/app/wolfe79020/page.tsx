import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79020 - Brilliantly lighted panorama African pavilions foreground — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79020 — Brilliantly lighted panorama African pavilions foreground — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79020 (legacy wolfe79020.html).
 * Nav bar shows Page 15. NEXT → /wolfe79021; PREVIOUS → /wolfe79019.
 */
export default function Wolfe79020Page() {
  return (
    <WolfeSlidePage
      slideId="79020"
      title="Slide 79020 - Brilliantly lighted panorama African pavilions foreground"
      image={{
        src: "/images/wolfe/79020Large.jpg",
        width: 400,
        height: 265,
        alt: "Brilliantly lighted panorama African pavilions foreground",
      }}
      caption="79020 - Brilliantly lighted panorama African pavilions foreground"
      previousHref="/wolfe79019"
      nextHref="/wolfe79021"
    />
  );
}
