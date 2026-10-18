import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79015 - Distant view of towers of Manhattan from N.Y. Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79015 — Distant view of towers of Manhattan from N.Y. Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79015 (legacy wolfe79015.html).
 * Tray order shows Page 11 (79014 is already Page 10).
 * NEXT → /wolfe79016; PREVIOUS → /wolfe79014.
 */
export default function Wolfe79015Page() {
  return (
    <WolfeSlidePage
      slideId="79015"
      title="Slide 79015 - Distant view of towers of Manhattan from N.Y. Tower"
      image={{
        src: "/images/wolfe/79015Large.jpg",
        width: 400,
        height: 263,
        alt: "Distant view of towers of Manhattan from N.Y. Tower",
      }}
      caption="79015 - Distant view of towers of Manhattan from N.Y. Tower"
      previousHref="/wolfe79014"
      nextHref="/wolfe79016"
    />
  );
}
