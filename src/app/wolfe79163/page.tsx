import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79163 - Cafe Belgique - Belgian Village — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79163 — Cafe Belgique - Belgian Village — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79163 (legacy wolfe79163.html).
 * Tray order shows Page 97 (79162 is already Page 96).
 * NEXT → /wolfe79165; PREVIOUS → /wolfe79162.
 */
export default function Wolfe79163Page() {
  return (
    <WolfeSlidePage
      slideId="79163"
      title="Slide 79163 - Cafe Belgique - Belgian Village"
      image={{
        src: "/images/wolfe/79163Large.jpg",
        width: 400,
        height: 263,
        alt: "Cafe Belgique - Belgian Village",
      }}
      caption="79163 - Cafe Belgique - Belgian Village"
      previousHref="/wolfe79162"
      nextHref="/wolfe79165"
    />
  );
}
