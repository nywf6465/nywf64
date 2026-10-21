import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-50 - Sierra Leone — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-50 — Three conic shapes floating above glass walls feature Sierra Leone Pavilion's architecture — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-50 (legacy mainliner63350.html).
 * Nav bar shows Page 51. NEXT → /mainliner63351; PREVIOUS → /mainliner63349.
 */
export default function Mainliner63350Page() {
  return (
    <MainlinerSlidePage
      slideId="633-50"
      title="Slide 633-50 - Sierra Leone"
      lead={
        "633-50 Three conic shapes floating above glass walls feature Sierra Leone Pavilion's architecture"
      }
      image={{
        src: "/images/mainliner/633-50.jpg",
        width: 400,
        height: 267,
        alt: "Three conic shapes floating above glass walls feature Sierra Leone Pavilion's architecture",
      }}
      previousHref="/mainliner63349"
      nextHref="/mainliner63351"
    />
  );
}
