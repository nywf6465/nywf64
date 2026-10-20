import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-22 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-22 — Close view of New York State's pavilion towers - tallest, an observation tower is 226-feet high — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-22 (legacy mainliner63322.html).
 * Nav bar shows Page 23. NEXT → /mainliner63323; PREVIOUS → /mainliner63321.
 */
export default function Mainliner63322Page() {
  return (
    <MainlinerSlidePage
      slideId="633-22"
      title="Slide 633-22 - New York State"
      lead="633-22 Close view of New York State's pavilion towers - tallest, an observation tower is 226-feet high"
      image={{
        src: "/images/mainliner/633-22.jpg",
        width: 267,
        height: 400,
        alt: "Close view of New York State's pavilion towers - tallest, an observation tower is 226-feet high",
      }}
      previousHref="/mainliner63321"
      nextHref="/mainliner63323"
    />
  );
}
