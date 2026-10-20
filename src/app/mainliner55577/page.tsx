import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-77 - New York City — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-77 — New York City Pavilion and Ice Theater - major attraction of Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-77 (legacy mainliner55577.html).
 * Nav bar shows Page 78. NEXT → /mainliner55578; PREVIOUS → /mainliner55576.
 */
export default function Mainliner55577Page() {
  return (
    <MainlinerSlidePage
      slideId="555-77"
      title="Slide 555-77 - New York City"
      lead="555-77 New York City Pavilion and Ice Theater - major attraction of Fair"
      image={{
        src: "/images/mainliner/555-77.jpg",
        width: 400,
        height: 267,
        alt: "New York City Pavilion and Ice Theater - major attraction of Fair",
      }}
      previousHref="/mainliner55576"
      nextHref="/mainliner55578"
    />
  );
}
