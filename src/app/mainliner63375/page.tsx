import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-75 - DuPont — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-75 — Big, circular DuPont Pavilion holds two theaters — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-75 (legacy mainliner63375.html).
 * Nav bar shows Page 76. NEXT → /mainliner63376; PREVIOUS → /mainliner63374.
 */
export default function Mainliner63375Page() {
  return (
    <MainlinerSlidePage
      slideId="633-75"
      title="Slide 633-75 - DuPont"
      lead="633-75 Big, circular DuPont Pavilion holds two theaters"
      image={{
        src: "/images/mainliner/633-75.jpg",
        width: 400,
        height: 267,
        alt: "Big, circular DuPont Pavilion holds two theaters",
      }}
      previousHref="/mainliner63374"
      nextHref="/mainliner63376"
    />
  );
}
