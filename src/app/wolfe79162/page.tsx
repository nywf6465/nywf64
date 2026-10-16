import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79162 - Costumed Guards, Belgian Village — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79162 — Costumed Guards, Belgian Village — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79162 (legacy wolfe79162.html).
 * Tray order shows Page 96 (79160 is already Page 95).
 * NEXT → /wolfe79163; PREVIOUS → /wolfe79160.
 */
export default function Wolfe79162Page() {
  return (
    <WolfeSlidePage
      slideId="79162"
      title="Slide 79162 - Costumed Guards, Belgian Village"
      image={{
        src: "/images/wolfe/79162Large.jpg",
        width: 400,
        height: 262,
        alt: "Costumed Guards, Belgian Village",
      }}
      caption="79162 - Costumed Guards, Belgian Village"
      previousHref="/wolfe79160"
      nextHref="/wolfe79163"
    />
  );
}
