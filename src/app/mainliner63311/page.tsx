import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-11 - General Motors — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-11 — General Motors Pavilion, one of the Fair's most eye-catching — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-11 (legacy mainliner63311.html).
 * Nav bar shows Page 12. NEXT → /mainliner63312; PREVIOUS → /mainliner63310.
 */
export default function Mainliner63311Page() {
  return (
    <MainlinerSlidePage
      slideId="633-11"
      title="Slide 633-11 - General Motors"
      lead="633-11 General Motors Pavilion, one of the Fair's most eye-catching"
      image={{
        src: "/images/mainliner/633-11.jpg",
        width: 400,
        height: 271,
        alt: "General Motors Pavilion, one of the Fair's most eye-catching",
      }}
      previousHref="/mainliner63310"
      nextHref="/mainliner63312"
    />
  );
}
