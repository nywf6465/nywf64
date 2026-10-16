import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79030 - Protestant and Orthodox Center — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79030 — Protestant and Orthodox Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79030 (legacy wolfe79030.html).
 * Nav bar shows Page 25. NEXT → /wolfe79031; PREVIOUS → /wolfe79029.
 */
export default function Wolfe79030Page() {
  return (
    <WolfeSlidePage
      slideId="79030"
      title="Slide 79030 - Protestant and Orthodox Center"
      image={{
        src: "/images/wolfe/79030Large.jpg",
        width: 262,
        height: 400,
        alt: "Protestant and Orthodox Center",
      }}
      caption="79030 - Protestant and Orthodox Center"
      previousHref="/wolfe79029"
      nextHref="/wolfe79031"
    />
  );
}
