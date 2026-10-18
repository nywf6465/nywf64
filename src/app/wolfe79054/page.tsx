import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79054 - Four German cuties, Pepsi doll display — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79054 — Four German cuties, Pepsi doll display — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79054 (legacy wolfe79054.html).
 * Nav bar shows Page 41. NEXT → /wolfe79057; PREVIOUS → /wolfe79053.
 */
export default function Wolfe79054Page() {
  return (
    <WolfeSlidePage
      slideId="79054"
      title="Slide 79054 - Four German cuties, Pepsi doll display"
      image={{
        src: "/images/wolfe/79054Large.jpg",
        width: 400,
        height: 293,
        alt: "Four German cuties, Pepsi doll display",
      }}
      caption="79054 - Four German cuties, Pepsi doll display"
      previousHref="/wolfe79053"
      nextHref="/wolfe79057"
    />
  );
}
