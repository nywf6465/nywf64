import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-54 - Venezuela — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-54 — Venezuela exhibits are found in tropical redwood building — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-54 (legacy mainliner55554.html).
 * Nav bar shows Page 55. NEXT → /mainliner55555; PREVIOUS → /mainliner55553.
 */
export default function Mainliner55554Page() {
  return (
    <MainlinerSlidePage
      slideId="555-54"
      title="Slide 555-54 - Venezuela"
      lead="555-54 Venezuela exhibits are found in tropical redwood building"
      image={{
        src: "/images/mainliner/555-54.jpg",
        width: 400,
        height: 267,
        alt: "Venezuela exhibits are found in tropical redwood building",
      }}
      previousHref="/mainliner55553"
      nextHref="/mainliner55555"
    />
  );
}
