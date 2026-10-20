import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-04 - General Foods Arch — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-04 — Gondolas of Swiss Sky Ride float across Fair at 115-feet, General Foods Arch in foreground — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-04 (legacy mainliner63304.html).
 * Nav bar shows Page 5. NEXT → /mainliner63305; PREVIOUS → /mainliner63303.
 */
export default function Mainliner63304Page() {
  return (
    <MainlinerSlidePage
      slideId="633-04"
      title="Slide 633-04 - General Foods Arch"
      lead="633-04 Gondolas of Swiss Sky Ride float across Fair at 115-feet, General Foods Arch in foreground"
      image={{
        src: "/images/mainliner/633-04.jpg",
        width: 267,
        height: 400,
        alt: "Gondolas of Swiss Sky Ride float across Fair at 115-feet, General Foods Arch in foreground",
      }}
      previousHref="/mainliner63303"
      nextHref="/mainliner63305"
    />
  );
}
