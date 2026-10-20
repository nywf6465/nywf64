import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-10 - Ford — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-10 — Ford Rotunda - 64 towering pylons at one end, exhibition hall at other — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-10 (legacy mainliner63310.html).
 * Nav bar shows Page 11. NEXT → /mainliner63311; PREVIOUS → /mainliner63309.
 */
export default function Mainliner63310Page() {
  return (
    <MainlinerSlidePage
      slideId="633-10"
      title="Slide 633-10 - Ford"
      lead="633-10 Ford Rotunda - 64 towering pylons at one end, exhibition hall at other"
      image={{
        src: "/images/mainliner/633-10.jpg",
        width: 400,
        height: 267,
        alt: "Ford Rotunda - 64 towering pylons at one end, exhibition hall at other",
      }}
      previousHref="/mainliner63309"
      nextHref="/mainliner63311"
    />
  );
}
