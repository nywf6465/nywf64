import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-65 - Polynesia — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-65 — Restaurant features "village" at Polynesian Pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-65 (legacy mainliner55565.html).
 * Nav bar shows Page 66. NEXT → /mainliner55566; PREVIOUS → /mainliner55564.
 */
export default function Mainliner55565Page() {
  return (
    <MainlinerSlidePage
      slideId="555-65"
      title="Slide 555-65 - Polynesia"
      lead={'555-65 Restaurant features "village" at Polynesian Pavilion'}
      image={{
        src: "/images/mainliner/555-65.jpg",
        width: 400,
        height: 267,
        alt: 'Restaurant features "village" at Polynesian Pavilion',
      }}
      previousHref="/mainliner55564"
      nextHref="/mainliner55566"
    />
  );
}
