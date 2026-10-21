import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-86 - Mormon Church — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-86 — Striking three towered Mormon Church Pavilion, replica of famous Salt Lake City Temple — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-86 (legacy mainliner63386.html).
 * Nav bar shows Page 87. NEXT → /mainliner63387; PREVIOUS → /mainliner63385.
 */
export default function Mainliner63386Page() {
  return (
    <MainlinerSlidePage
      slideId="633-86"
      title="Slide 633-86 - Mormon Church"
      lead="633-86 Striking three towered Mormon Church Pavilion, replica of famous Salt Lake City Temple"
      image={{
        src: "/images/mainliner/633-86.jpg",
        width: 267,
        height: 400,
        alt: "Striking three towered Mormon Church Pavilion, replica of famous Salt Lake City Temple",
      }}
      previousHref="/mainliner63385"
      nextHref="/mainliner63387"
    />
  );
}
