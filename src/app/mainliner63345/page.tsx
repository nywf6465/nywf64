import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-45 - Africa — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-45 — Tribal dancers are featured at African Pavilion - hut-village on stilts — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-45 (legacy mainliner63345.html).
 * Nav bar shows Page 46. NEXT → /mainliner63346; PREVIOUS → /mainliner63344.
 */
export default function Mainliner63345Page() {
  return (
    <MainlinerSlidePage
      slideId="633-45"
      title="Slide 633-45 - Africa"
      lead="633-45 Tribal dancers are featured at African Pavilion - hut-village on stilts"
      image={{
        src: "/images/mainliner/633-45.jpg",
        width: 400,
        height: 267,
        alt: "Tribal dancers are featured at African Pavilion - hut-village on stilts",
      }}
      previousHref="/mainliner63344"
      nextHref="/mainliner63346"
    />
  );
}
