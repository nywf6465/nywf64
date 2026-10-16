import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79139 - Night view of Electric Power & Light pavilion — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79139 — Night view of Electric Power & Light pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79139 (legacy wolfe79139.html).
 * Tray order shows Page 82 (79137 is already Page 81).
 * NEXT → /wolfe79141; PREVIOUS → /wolfe79137.
 */
export default function Wolfe79139Page() {
  return (
    <WolfeSlidePage
      slideId="79139"
      title="Slide 79139 - Night view of Electric Power & Light pavilion"
      image={{
        src: "/images/wolfe/79139Large.jpg",
        width: 400,
        height: 259,
        alt: "Night view of Electric Power & Light pavilion",
      }}
      caption="79139 - Night view of Electric Power & Light pavilion"
      previousHref="/wolfe79137"
      nextHref="/wolfe79141"
    />
  );
}
