import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79031 - Stained glass screen inside Protestant & Orthodox Center — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79031 — Stained glass screen inside Protestant & Orthodox Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79031 (legacy wolfe79031.html).
 * Nav bar shows Page 26. NEXT → /wolfe79032; PREVIOUS → /wolfe79030.
 */
export default function Wolfe79031Page() {
  return (
    <WolfeSlidePage
      slideId="79031"
      title="Slide 79031 - Stained glass screen inside Protestant & Orthodox Center"
      image={{
        src: "/images/wolfe/79031Large.jpg",
        width: 400,
        height: 265,
        alt: "Stained glass screen inside Protestant & Orthodox Center",
      }}
      caption="79031 - Stained glass screen inside Protestant & Orthodox Center"
      previousHref="/wolfe79030"
      nextHref="/wolfe79032"
    />
  );
}
