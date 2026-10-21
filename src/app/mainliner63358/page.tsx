import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-58 - Sweden — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-58 — Attractive Pavilion of Sweden has unusual exhibits of country's skills in technology, design and cuisine — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-58 (legacy mainliner63358.html).
 * Nav bar shows Page 59. NEXT → /mainliner63359; PREVIOUS → /mainliner63357.
 */
export default function Mainliner63358Page() {
  return (
    <MainlinerSlidePage
      slideId="633-58"
      title="Slide 633-58 - Sweden"
      lead={
        "633-58 Attractive Pavilion of Sweden has unusual exhibits of country's skills in technology, design and cuisine"
      }
      image={{
        src: "/images/mainliner/633-58.jpg",
        width: 400,
        height: 267,
        alt: "Attractive Pavilion of Sweden has unusual exhibits of country's skills in technology, design and cuisine",
      }}
      previousHref="/mainliner63357"
      nextHref="/mainliner63359"
    />
  );
}
