import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-18 - Lowenbrau — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-18 — Lowenbrau Gardens' brewery wagon drawn by four massive horses — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-18 (legacy mainliner63318.html).
 * Nav bar shows Page 19. NEXT → /mainliner63319; PREVIOUS → /mainliner63317.
 */
export default function Mainliner63318Page() {
  return (
    <MainlinerSlidePage
      slideId="633-18"
      title="Slide 633-18 - Lowenbrau"
      lead="633-18 Lowenbrau Gardens' brewery wagon drawn by four massive horses"
      image={{
        src: "/images/mainliner/633-18.jpg",
        width: 400,
        height: 267,
        alt: "Lowenbrau Gardens' brewery wagon drawn by four massive horses",
      }}
      previousHref="/mainliner63317"
      nextHref="/mainliner63319"
    />
  );
}
