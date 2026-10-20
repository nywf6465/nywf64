import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-71 - Republic of China — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-71 — Detail of work on Pavilion of Republic of China — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-71 (legacy mainliner55571.html).
 * Nav bar shows Page 72. NEXT → /mainliner55572; PREVIOUS → /mainliner55570.
 */
export default function Mainliner55571Page() {
  return (
    <MainlinerSlidePage
      slideId="555-71"
      title="Slide 555-71 - Republic of China"
      lead="555-71 Detail of work on Pavilion of Republic of China"
      image={{
        src: "/images/mainliner/555-71.jpg",
        width: 400,
        height: 267,
        alt: "Detail of work on Pavilion of Republic of China",
      }}
      previousHref="/mainliner55570"
      nextHref="/mainliner55572"
    />
  );
}
