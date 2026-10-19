import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-08 - General Motors — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-08 — General Motors Pavilion, one of the Fair's most eye-catching — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-08 (legacy mainliner55508.html).
 * Nav bar shows Page 9. NEXT → /mainliner55509; PREVIOUS → /mainliner55507.
 */
export default function Mainliner55508Page() {
  return (
    <MainlinerSlidePage
      slideId="555-08"
      title="Slide 555-08 - General Motors"
      lead="555-08 General Motors Pavilion - one of the Fair's most eye-catching"
      image={{
        src: "/images/mainliner/555-08.jpg",
        width: 400,
        height: 272,
        alt: "General Motors Pavilion - one of the Fair's most eye-catching",
      }}
      previousHref="/mainliner55507"
      nextHref="/mainliner55509"
    />
  );
}
