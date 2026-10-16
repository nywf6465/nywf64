import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79176 - Order of the Garter - England's highest award — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79176 — Order of the Garter - England's highest award — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79176 (legacy wolfe79176.html).
 * Tray order shows Page 105, the last slide (79175 is already Page 104).
 * The legacy page has no Next Slide link. NEXT returns to the first tray slide, /wolfe79000.
 * PREVIOUS → /wolfe79175.
 */
export default function Wolfe79176Page() {
  return (
    <WolfeSlidePage
      slideId="79176"
      title="Slide 79176 - Order of the Garter - England's highest award"
      image={{
        src: "/images/wolfe/79176Large.jpg",
        width: 400,
        height: 262,
        alt: "Order of the Garter - England's highest award",
      }}
      caption="79176 - Order of the Garter - England's highest award"
      previousHref="/wolfe79175"
      nextHref="/wolfe79000"
    />
  );
}
