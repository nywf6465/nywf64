import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79175 - Nobel Prize received by Churchill — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79175 — Nobel Prize received by Churchill — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79175 (legacy wolfe79175.html).
 * Tray order shows Page 104 (79174 is already Page 103).
 * NEXT → /wolfe79176; PREVIOUS → /wolfe79174.
 */
export default function Wolfe79175Page() {
  return (
    <WolfeSlidePage
      slideId="79175"
      title="Slide 79175 - Nobel Prize received by Churchill"
      image={{
        src: "/images/wolfe/79175Large.jpg",
        width: 400,
        height: 262,
        alt: "Nobel Prize received by Churchill",
      }}
      caption="79175 - Nobel Prize received by Churchill"
      previousHref="/wolfe79174"
      nextHref="/wolfe79176"
    />
  );
}
