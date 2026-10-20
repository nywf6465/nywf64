import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-27 - General Electric — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-27 — General Electric Pavilion at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-27 (legacy mainliner55527.html).
 * Nav bar shows Page 28. NEXT → /mainliner55528; PREVIOUS → /mainliner55526.
 */
export default function Mainliner55527Page() {
  return (
    <MainlinerSlidePage
      slideId="555-27"
      title="Slide 555-27 - General Electric"
      lead="555-27 General Electric Pavilion at night"
      image={{
        src: "/images/mainliner/555-27.jpg",
        width: 272,
        height: 400,
        alt: "General Electric Pavilion at night",
      }}
      previousHref="/mainliner55526"
      nextHref="/mainliner55528"
    />
  );
}
