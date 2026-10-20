import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-52 - India — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-52 — Striking Pavilion of India — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-52 (legacy mainliner55552.html).
 * Nav bar shows Page 53. NEXT → /mainliner55553; PREVIOUS → /mainliner55551.
 */
export default function Mainliner55552Page() {
  return (
    <MainlinerSlidePage
      slideId="555-52"
      title="Slide 555-52 - India"
      lead="555-52 Striking Pavilion of India"
      image={{
        src: "/images/mainliner/555-52.jpg",
        width: 267,
        height: 400,
        alt: "Striking Pavilion of India",
      }}
      previousHref="/mainliner55551"
      nextHref="/mainliner55553"
    />
  );
}
