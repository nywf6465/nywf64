import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-12 - Chrysler — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-12 — Giant car and huge rocket - portion of unique Chrysler exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-12 (legacy mainliner63312.html).
 * Nav bar shows Page 13. NEXT → /mainliner63313; PREVIOUS → /mainliner63311.
 */
export default function Mainliner63312Page() {
  return (
    <MainlinerSlidePage
      slideId="633-12"
      title="Slide 633-12 - Chrysler"
      lead="633-12 Giant car and huge rocket - portion of unique Chrysler exhibit"
      image={{
        src: "/images/mainliner/633-12.jpg",
        width: 400,
        height: 272,
        alt: "Giant car and huge rocket - portion of unique Chrysler exhibit",
      }}
      previousHref="/mainliner63311"
      nextHref="/mainliner63313"
    />
  );
}
