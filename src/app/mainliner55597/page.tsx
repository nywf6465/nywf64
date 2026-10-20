import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-97 - AMF\u00A0Monorail — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-97 — Lake Amusement Park area with World's Fair Monorail — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-97 (legacy mainliner55597.html).
 * Nav bar shows Page 98. NEXT → /mainliner55598; PREVIOUS → /mainliner55596.
 */
export default function Mainliner55597Page() {
  return (
    <MainlinerSlidePage
      slideId="555-97"
      title={"Slide 555-97 - AMF\u00A0Monorail"}
      lead="555-97 Lake Amusement Park area with World's Fair Monorail"
      image={{
        src: "/images/mainliner/555-97.jpg",
        width: 400,
        height: 267,
        alt: "Lake Amusement Park area with World's Fair Monorail",
      }}
      previousHref="/mainliner55596"
      nextHref="/mainliner55598"
    />
  );
}
