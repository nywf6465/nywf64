import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79028 - Towers of Pepsi Cola (& Walt Disney) ride — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79028 — Towers of Pepsi Cola (& Walt Disney) ride — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79028 (legacy wolfe79028.html).
 * Nav bar shows Page 23. NEXT → /wolfe79029; PREVIOUS → /wolfe79027.
 */
export default function Wolfe79028Page() {
  return (
    <WolfeSlidePage
      slideId="79028"
      title="Slide 79028 - Towers of Pepsi Cola (& Walt Disney) ride"
      image={{
        src: "/images/wolfe/79028Large.jpg",
        width: 262,
        height: 400,
        alt: "Towers of Pepsi Cola (& Walt Disney) ride",
      }}
      caption="79028 - Towers of Pepsi Cola (& Walt Disney) ride"
      previousHref="/wolfe79027"
      nextHref="/wolfe79029"
    />
  );
}
