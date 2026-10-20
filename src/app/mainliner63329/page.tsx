import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-29 - Illinois — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-29 — Giant sculpture of head of Abraham Lincoln — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-29 (legacy mainliner63329.html).
 * Nav bar shows Page 30. NEXT → /mainliner63330; PREVIOUS → /mainliner63328.
 */
export default function Mainliner63329Page() {
  return (
    <MainlinerSlidePage
      slideId="633-29"
      title="Slide 633-29 - Illinois"
      lead="633-29 Giant sculpture of head of Abraham Lincoln"
      image={{
        src: "/images/mainliner/633-29.jpg",
        width: 267,
        height: 400,
        alt: "Giant sculpture of head of Abraham Lincoln",
      }}
      previousHref="/mainliner63328"
      nextHref="/mainliner63330"
    />
  );
}
