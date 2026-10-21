import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-76 - American Express — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-76 — Million dollars in currency from many lands forms "money tree" outside American Express Pavilion — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-76 (legacy mainliner63376.html).
 * Nav bar shows Page 77. NEXT → /mainliner63377; PREVIOUS → /mainliner63375.
 */
export default function Mainliner63376Page() {
  return (
    <MainlinerSlidePage
      slideId="633-76"
      title="Slide 633-76 - American Express"
      lead={
        '633-76 Million dollars in currency from many lands forms "money tree" outside American Express Pavilion'
      }
      image={{
        src: "/images/mainliner/633-76.jpg",
        width: 267,
        height: 400,
        alt: 'Million dollars in currency from many lands forms "money tree" outside American Express Pavilion',
      }}
      previousHref="/mainliner63375"
      nextHref="/mainliner63377"
    />
  );
}
