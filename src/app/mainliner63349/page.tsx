import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-49 - Guinea — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-49 — Three African huts house Guinea's industrial displays and souvenirs — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-49 (legacy mainliner63349.html).
 * Nav bar shows Page 50. NEXT → /mainliner63350; PREVIOUS → /mainliner63348.
 */
export default function Mainliner63349Page() {
  return (
    <MainlinerSlidePage
      slideId="633-49"
      title="Slide 633-49 - Guinea"
      lead={
        "633-49 Three African huts house Guinea's industrial displays and souvenirs"
      }
      image={{
        src: "/images/mainliner/633-49.jpg",
        width: 400,
        height: 267,
        alt: "Three African huts house Guinea's industrial displays and souvenirs",
      }}
      previousHref="/mainliner63348"
      nextHref="/mainliner63350"
    />
  );
}
