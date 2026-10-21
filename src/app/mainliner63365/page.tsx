import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-65 - Astral Fountain — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-65 — Astral Fountain, Federal and State Area — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-65 (legacy mainliner63365.html).
 * Nav bar shows Page 66. NEXT → /mainliner63366; PREVIOUS → /mainliner63364.
 */
export default function Mainliner63365Page() {
  return (
    <MainlinerSlidePage
      slideId="633-65"
      title="Slide 633-65 - Astral Fountain"
      lead="633-65 Astral Fountain, Federal and State Area"
      image={{
        src: "/images/mainliner/633-65.jpg",
        width: 266,
        height: 400,
        alt: "Astral Fountain, Federal and State Area",
      }}
      previousHref="/mainliner63364"
      nextHref="/mainliner63366"
    />
  );
}
