import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-88 - Boy Scouts of America — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-88 — Boy Scouts of America headquarter in colorful area at Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-88 (legacy mainliner63388.html).
 * Nav bar shows Page 89. NEXT → /mainliner63389; PREVIOUS → /mainliner63387.
 */
export default function Mainliner63388Page() {
  return (
    <MainlinerSlidePage
      slideId="633-88"
      title="Slide 633-88 - Boy Scouts of America"
      lead="633-88 Boy Scouts of America headquarter in colorful area at Fair"
      image={{
        src: "/images/mainliner/633-88.jpg",
        width: 400,
        height: 267,
        alt: "Boy Scouts of America headquarter in colorful area at Fair",
      }}
      previousHref="/mainliner63387"
      nextHref="/mainliner63389"
    />
  );
}
