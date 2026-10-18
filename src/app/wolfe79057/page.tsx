import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79057 - Sultan & attendants, Pepsi — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79057 — Sultan & attendants, Pepsi — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79057 (legacy wolfe79057.html).
 * Nav bar shows Page 42. NEXT → /wolfe79058; PREVIOUS → /wolfe79054.
 */
export default function Wolfe79057Page() {
  return (
    <WolfeSlidePage
      slideId="79057"
      title="Slide 79057 - Sultan & attendants, Pepsi"
      image={{
        src: "/images/wolfe/79057Large.jpg",
        width: 400,
        height: 268,
        alt: "Sultan & attendants, Pepsi",
      }}
      caption="79057 - Sultan & attendants, Pepsi"
      previousHref="/wolfe79054"
      nextHref="/wolfe79058"
    />
  );
}
