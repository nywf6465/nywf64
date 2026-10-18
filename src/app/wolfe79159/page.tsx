import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79159 - Toothy tyrannosaurus (50 feet long) — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79159 — Toothy tyrannosaurus (50 feet long) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79159 (legacy wolfe79159.html).
 * Tray order shows Page 94 (79158 is already Page 93).
 * NEXT → /wolfe79160; PREVIOUS → /wolfe79158.
 */
export default function Wolfe79159Page() {
  return (
    <WolfeSlidePage
      slideId="79159"
      title="Slide 79159 - Toothy tyrannosaurus (50 feet long)"
      image={{
        src: "/images/wolfe/79159Large.jpg",
        width: 259,
        height: 400,
        alt: "Toothy tyrannosaurus (50 feet long)",
      }}
      caption="79159 - Toothy tyrannosaurus (50 feet long)"
      previousHref="/wolfe79158"
      nextHref="/wolfe79160"
    />
  );
}
