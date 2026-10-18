import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79059 - Bali Dancers - Pepsi dolls — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79059 — Bali Dancers - Pepsi dolls — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79059 (legacy wolfe79059.html).
 * Nav bar shows Page 44. NEXT → /wolfe79060; PREVIOUS → /wolfe79058.
 */
export default function Wolfe79059Page() {
  return (
    <WolfeSlidePage
      slideId="79059"
      title="Slide 79059 - Bali Dancers - Pepsi dolls"
      image={{
        src: "/images/wolfe/79059Large.jpg",
        width: 400,
        height: 261,
        alt: "Bali Dancers - Pepsi dolls",
      }}
      caption="79059 - Bali Dancers - Pepsi dolls"
      previousHref="/wolfe79058"
      nextHref="/wolfe79060"
    />
  );
}
