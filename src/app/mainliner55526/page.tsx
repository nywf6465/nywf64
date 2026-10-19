import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-26 - General Electric — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 555-26 — General Electric\'s "Progressland" under huge, gleaming dome — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 555-26 (legacy mainliner55526.html).
 * Nav bar shows Page 27. NEXT → /mainliner55527; PREVIOUS → /mainliner55525.
 */
export default function Mainliner55526Page() {
  return (
    <MainlinerSlidePage
      slideId="555-26"
      title="Slide 555-26 - General Electric"
      lead={
        '555-26 General Electric\'s "Progressland" under huge, gleaming dome'
      }
      image={{
        src: "/images/mainliner/555-26.jpg",
        width: 400,
        height: 272,
        alt: 'General Electric\'s "Progressland" under huge, gleaming dome',
      }}
      previousHref="/mainliner55525"
      nextHref="/mainliner55527"
    />
  );
}
