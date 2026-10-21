import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-79 - General Electric — The Blackhawk Films Slide Set — nywf64.com",
  description:
    'MAINLINER slide 633-79 — General Electric\'s "Progressland" is under huge, gleaming dome — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * MAINLINER slide 633-79 (legacy mainliner63379.html).
 * Nav bar shows Page 80. NEXT → /mainliner63380; PREVIOUS → /mainliner63378.
 */
export default function Mainliner63379Page() {
  return (
    <MainlinerSlidePage
      slideId="633-79"
      title="Slide 633-79 - General Electric"
      lead={
        '633-79 General Electric\'s "Progressland" is under huge, gleaming dome'
      }
      image={{
        src: "/images/mainliner/633-79.jpg",
        width: 400,
        height: 267,
        alt: 'General Electric\'s "Progressland" is under huge, gleaming dome',
      }}
      previousHref="/mainliner63378"
      nextHref="/mainliner63380"
    />
  );
}
