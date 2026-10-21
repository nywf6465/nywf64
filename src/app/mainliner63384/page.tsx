import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    'Slide 633-84 - Electric Power and Light - "Tower of Light" — The Blackhawk Films Slide Set — nywf64.com',
  description:
    "MAINLINER slide 633-84 — Tower of Light - building rises in a forest of aluminum-faced prisms and has world's most powerful searchlight — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-84 (legacy mainliner63384.html).
 * Nav bar shows Page 85. NEXT → /mainliner63385; PREVIOUS → /mainliner63383.
 */
export default function Mainliner63384Page() {
  return (
    <MainlinerSlidePage
      slideId="633-84"
      title={'Slide 633-84 - Electric Power and Light - "Tower of Light"'}
      lead={
        "633-84 Tower of Light - building rises in a forest of aluminum-faced prisms and has world's most powerful searchlight"
      }
      image={{
        src: "/images/mainliner/633-84.jpg",
        width: 400,
        height: 267,
        alt: "Tower of Light - building rises in a forest of aluminum-faced prisms and has world's most powerful searchlight",
      }}
      previousHref="/mainliner63383"
      nextHref="/mainliner63385"
    />
  );
}
