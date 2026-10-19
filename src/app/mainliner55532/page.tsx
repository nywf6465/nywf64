import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    'Slide 555-32 - Electric Power and Light - "Tower of Light" — The Blackhawk Films Slide Set — nywf64.com',
  description:
    "MAINLINER slide 555-32 — World's most powerful searchlight beam rises from center of Electric Power and Light Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-32 (legacy mainliner55532.html).
 * Nav bar shows Page 33. NEXT → /mainliner55533; PREVIOUS → /mainliner55531.
 */
export default function Mainliner55532Page() {
  return (
    <MainlinerSlidePage
      slideId="555-32"
      title={'Slide 555-32 - Electric Power and Light - "Tower of Light"'}
      lead="555-32 World's most powerful searchlight beam rises from center of Electric Power and Light Pavilion"
      image={{
        src: "/images/mainliner/555-32.jpg",
        width: 400,
        height: 270,
        alt: "World's most powerful searchlight beam rises from center of Electric Power and Light Pavilion",
      }}
      previousHref="/mainliner55531"
      nextHref="/mainliner55533"
    />
  );
}
