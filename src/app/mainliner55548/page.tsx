import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-48 - Sermons from Science — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-48 — Sermons from Science Pavilion - scalloped roof is reached by ramp over reflecting pool — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-48 (legacy mainliner55548.html).
 * Nav bar shows Page 49. NEXT → /mainliner55549; PREVIOUS → /mainliner55547.
 */
export default function Mainliner55548Page() {
  return (
    <MainlinerSlidePage
      slideId="555-48"
      title="Slide 555-48 - Sermons from Science"
      lead="555-48 Sermons from Science Pavilion - scalloped roof is reached by ramp over reflecting pool"
      image={{
        src: "/images/mainliner/555-48.jpg",
        width: 400,
        height: 267,
        alt: "Sermons from Science Pavilion - scalloped roof is reached by ramp over reflecting pool",
      }}
      previousHref="/mainliner55547"
      nextHref="/mainliner55549"
    />
  );
}
