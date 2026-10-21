import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-87 - United States — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-87 — 330-foot building of multi-colored glass - United States Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-87 (legacy mainliner63387.html).
 * Nav bar shows Page 88. NEXT → /mainliner63388; PREVIOUS → /mainliner63386.
 */
export default function Mainliner63387Page() {
  return (
    <MainlinerSlidePage
      slideId="633-87"
      title="Slide 633-87 - United States"
      lead="633-87 330-foot building of multi-colored glass - United States Pavilion"
      image={{
        src: "/images/mainliner/633-87.jpg",
        width: 400,
        height: 267,
        alt: "330-foot building of multi-colored glass - United States Pavilion",
      }}
      previousHref="/mainliner63386"
      nextHref="/mainliner63388"
    />
  );
}
