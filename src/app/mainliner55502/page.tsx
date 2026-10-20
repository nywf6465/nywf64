import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-02 - Swiss Skyride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-02 — Gondolas of Swiss Sky Ride float across the Fair at 115-feet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-02 (legacy mainliner55502.html).
 * Nav bar shows Page 3. NEXT → /mainliner55503; PREVIOUS → /mainliner55501.
 */
export default function Mainliner55502Page() {
  return (
    <MainlinerSlidePage
      slideId="555-02"
      title="Slide 555-02 - Swiss Skyride"
      lead="555-02 Gondolas of Swiss Sky Ride float across Fair at 115-feet"
      image={{
        src: "/images/mainliner/555-02.jpg",
        width: 400,
        height: 267,
        alt: "Gondolas of Swiss Sky Ride float across Fair at 115-feet",
      }}
      previousHref="/mainliner55501"
      nextHref="/mainliner55503"
    />
  );
}
