import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79001 - Interior of new, blue subway car, enroute to Fair — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79001 — Interior of new, blue subway car, enroute to Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79001 (legacy wolfe79001.html).
 * Nav bar shows Page 3. NEXT → /wolfe79003; PREVIOUS → /wolfe79000.
 */
export default function Wolfe79001Page() {
  return (
    <WolfeSlidePage
      slideId="79001"
      title="Slide 79001 - Interior of new, blue subway car, enroute to Fair"
      image={{
        src: "/images/wolfe/79001Large.jpg",
        width: 400,
        height: 263,
        alt: "Interior of new, blue subway car, enroute to Fair",
      }}
      caption="79001 - Interior of new, blue subway car, enroute to Fair"
      previousHref="/wolfe79000"
      nextHref="/wolfe79003"
    />
  );
}
