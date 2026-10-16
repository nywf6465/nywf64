import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79011 - Vatican pavilion and amusement area from Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79011 — Vatican pavilion and amusement area from Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79011 (legacy wolfe79011.html).
 * Nav bar shows Page 9. NEXT → /wolfe79014; PREVIOUS → /wolfe79010.
 */
export default function Wolfe79011Page() {
  return (
    <WolfeSlidePage
      slideId="79011"
      title="Slide 79011 - Vatican pavilion and amusement area from Tower"
      image={{
        src: "/images/wolfe/79011Large.jpg",
        width: 400,
        height: 263,
        alt: "Vatican pavilion and amusement area from Tower",
      }}
      caption="79011 - Vatican pavilion and amusement area from Tower"
      previousHref="/wolfe79010"
      nextHref="/wolfe79014"
    />
  );
}
