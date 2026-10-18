import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79006 - Overview of crowds, looking toward New York State Towers — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79006 — Overview of crowds, looking toward New York State Towers — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79006 (legacy wolfe79006.html).
 * Nav bar shows Page 6. NEXT → /wolfe79007; PREVIOUS → /wolfe79004.
 * Legacy has no slide 79005; the prior tray slide is 79004.
 */
export default function Wolfe79006Page() {
  return (
    <WolfeSlidePage
      slideId="79006"
      title="Slide 79006 - Overview of crowds, looking toward New York State Towers"
      image={{
        src: "/images/wolfe/79006Large.jpg",
        width: 400,
        height: 263,
        alt: "Overview of crowds, looking toward New York State Towers",
      }}
      caption="79006 - Overview of crowds, looking toward New York State Towers"
      previousHref="/wolfe79004"
      nextHref="/wolfe79007"
    />
  );
}
