import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79034 - Close-up of the Pieta — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79034 — Close-up of the Pieta — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79034 (legacy wolfe79034.html).
 * Nav bar shows Page 29. NEXT → /wolfe79035; PREVIOUS → /wolfe79033.
 */
export default function Wolfe79034Page() {
  return (
    <WolfeSlidePage
      slideId="79034"
      title="Slide 79034 - Close-up of the Pieta"
      image={{
        src: "/images/wolfe/79034Large.jpg",
        width: 400,
        height: 263,
        alt: "Close-up of the Pieta",
      }}
      caption="79034 - Close-up of the Pieta"
      previousHref="/wolfe79033"
      nextHref="/wolfe79035"
    />
  );
}
