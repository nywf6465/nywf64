import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-92 - Log Flume Ride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-92 — Log Flume Ride - trip on water-borne roller coaster — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-92 (legacy mainliner63392.html).
 * Nav bar shows Page 93. NEXT → /mainliner63393; PREVIOUS → /mainliner63391.
 */
export default function Mainliner63392Page() {
  return (
    <MainlinerSlidePage
      slideId="633-92"
      title="Slide 633-92 - Log Flume Ride"
      lead="633-92 Log Flume Ride - trip on water-borne roller coaster"
      image={{
        src: "/images/mainliner/633-92.jpg",
        width: 267,
        height: 400,
        alt: "Log Flume Ride - trip on water-borne roller coaster",
      }}
      previousHref="/mainliner63391"
      nextHref="/mainliner63393"
    />
  );
}
