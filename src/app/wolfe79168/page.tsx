import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title: "Slide 79168 - Saturn V Boat Tail — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79168 — Saturn V Boat Tail — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79168 (legacy wolfe79168.html).
 * Tray order shows Page 100 (79167 is already Page 99).
 * NEXT → /wolfe79169; PREVIOUS → /wolfe79167.
 */
export default function Wolfe79168Page() {
  return (
    <WolfeSlidePage
      slideId="79168"
      title="Slide 79168 - Saturn V Boat Tail"
      image={{
        src: "/images/wolfe/79168Large.jpg",
        width: 260,
        height: 400,
        alt: "Saturn V Boat Tail",
      }}
      caption="79168 - Saturn V Boat Tail"
      previousHref="/wolfe79167"
      nextHref="/wolfe79169"
    />
  );
}
