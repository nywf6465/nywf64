import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-75 - New Jersey — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-75 — View of some 21 small exhibit buildings of unusual construction which feature New Jersey's tercentenary — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-75 (legacy mainliner55575.html).
 * Nav bar shows Page 76. NEXT → /mainliner55576; PREVIOUS → /mainliner55574.
 */
export default function Mainliner55575Page() {
  return (
    <MainlinerSlidePage
      slideId="555-75"
      title="Slide 555-75 - New Jersey"
      lead="555-75 View of some 21 small exhibit buildings of unusual construction which feature New Jersey's tercentenary"
      image={{
        src: "/images/mainliner/555-75.jpg",
        width: 400,
        height: 267,
        alt: "View of some 21 small exhibit buildings of unusual construction which feature New Jersey's tercentenary",
      }}
      previousHref="/mainliner55574"
      nextHref="/mainliner55576"
    />
  );
}
