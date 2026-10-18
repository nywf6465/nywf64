import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79068 - Dining atop the Better Living pavilion at Hilton's Cafe International — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79068 — Dining atop the Better Living pavilion at Hilton's Cafe International — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79068 (legacy wolfe79068.html).
 * Nav bar shows Page 51. NEXT → /wolfe79072; PREVIOUS → /wolfe79067.
 */
export default function Wolfe79068Page() {
  return (
    <WolfeSlidePage
      slideId="79068"
      title="Slide 79068 - Dining atop the Better Living pavilion at Hilton's Cafe International"
      image={{
        src: "/images/wolfe/79068Large.jpg",
        width: 400,
        height: 261,
        alt: "Dining atop the Better Living pavilion at Hilton's Cafe International",
      }}
      caption="79068 - Dining atop the Better Living pavilion at Hilton's Cafe International"
      previousHref="/wolfe79067"
      nextHref="/wolfe79072"
    />
  );
}
