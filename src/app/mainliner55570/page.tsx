import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-70 - Republic of China — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-70 — Red and gold Oriental palace is setting for exhibit of Republic of China — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-70 (legacy mainliner55570.html).
 * Nav bar shows Page 71. NEXT → /mainliner55571; PREVIOUS → /mainliner55569.
 */
export default function Mainliner55570Page() {
  return (
    <MainlinerSlidePage
      slideId="555-70"
      title="Slide 555-70 - Republic of China"
      lead="555-70 Red and gold Oriental palace is setting for exhibit of Republic of China"
      image={{
        src: "/images/mainliner/555-70.jpg",
        width: 267,
        height: 400,
        alt: "Red and gold Oriental palace is setting for exhibit of Republic of China",
      }}
      previousHref="/mainliner55569"
      nextHref="/mainliner55571"
    />
  );
}
