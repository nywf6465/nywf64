import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-63 - Vatican — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-63 — Close-up of "Pieta", Vatican Pavilion, Statue shows a grieving Mary cradling her Son after the Crucifixion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-63 (legacy mainliner63363.html).
 * Nav bar shows Page 64. NEXT → /mainliner63364; PREVIOUS → /mainliner63362.
 */
export default function Mainliner63363Page() {
  return (
    <MainlinerSlidePage
      slideId="633-63"
      title="Slide 633-63 - Vatican"
      lead={
        '633-63 Close-up of "Pieta", Vatican Pavilion, Statue shows a grieving Mary cradling her Son after the Crucifixion'
      }
      image={{
        src: "/images/mainliner/633-63.jpg",
        width: 267,
        height: 400,
        alt: 'Close-up of "Pieta", Vatican Pavilion, Statue shows a grieving Mary cradling her Son after the Crucifixion',
      }}
      previousHref="/mainliner63362"
      nextHref="/mainliner63364"
    />
  );
}
