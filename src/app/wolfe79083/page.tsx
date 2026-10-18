import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79083 - Action view of log-rolling at Oregon pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79083 — Action view of log-rolling at Oregon pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79083 (legacy wolfe79083.html).
 * Nav bar shows Page 56. NEXT → /wolfe79085 (tray and legacy; 790785 is not a slide); PREVIOUS → /wolfe79080.
 */
export default function Wolfe79083Page() {
  return (
    <WolfeSlidePage
      slideId="79083"
      title="Slide 79083 - Action view of log-rolling at Oregon pavilion"
      image={{
        src: "/images/wolfe/79083Large.jpg",
        width: 400,
        height: 261,
        alt: "Action view of log-rolling at Oregon pavilion",
      }}
      caption="79083 - Action view of log-rolling at Oregon pavilion"
      previousHref="/wolfe79080"
      nextHref="/wolfe79085"
    />
  );
}
