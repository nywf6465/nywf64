import type { Metadata } from "next";
import { WolfeSlidePage } from "@/components/WolfeSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 79018 - Night time panorama of amusement area and lake from Tower — Wolfe Worldwide Films — nywf64.com",
  description:
    "Wolfe Worldwide Films slide 79018 — Night time panorama of amusement area and lake from Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wolfe slide 79018 (legacy wolfe79018.html).
 * Nav bar shows Page 13. NEXT → /wolfe79019; PREVIOUS → /wolfe79016.
 */
export default function Wolfe79018Page() {
  return (
    <WolfeSlidePage
      slideId="79018"
      title="Slide 79018 - Night time panorama of amusement area and lake from Tower"
      image={{
        src: "/images/wolfe/79018Large.jpg",
        width: 400,
        height: 263,
        alt: "Night time panorama of amusement area and lake from Tower",
      }}
      caption="79018 - Night time panorama of amusement area and lake from Tower"
      previousHref="/wolfe79016"
      nextHref="/wolfe79019"
    />
  );
}
