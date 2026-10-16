import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79061 - Little Bo Peep, geese, and friends, Pepsi dolls — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79061 — Little Bo Peep, geese, and friends, Pepsi dolls — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79061 (legacy wolfe79061.html).
 * Nav bar shows Page 46. NEXT → /wolfe79062; PREVIOUS → /wolfe79060.
 */
export default function Wolfe79061Page() {
  return (
    <WolfeSlidePage
      slideId="79061"
      title="Slide 79061 - Little Bo Peep, geese, and friends, Pepsi dolls"
      image={{
        src: "/images/wolfe/79061Large.jpg",
        width: 400,
        height: 265,
        alt: "Little Bo Peep, geese, and friends, Pepsi dolls",
      }}
      caption="79061 - Little Bo Peep, geese, and friends, Pepsi dolls"
      previousHref="/wolfe79060"
      nextHref="/wolfe79062"
    />
  );
}
