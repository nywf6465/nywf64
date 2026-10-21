import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-97 - Florida — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-97 — Florida Pavilion offers tourist attractions, art collection and water show — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-97 (legacy mainliner63397.html).
 * Nav bar shows Page 98. NEXT → /mainliner63398; PREVIOUS → /mainliner63396.
 */
export default function Mainliner63397Page() {
  return (
    <MainlinerSlidePage
      slideId="633-97"
      title="Slide 633-97 - Florida"
      lead="633-97 Florida Pavilion offers tourist attractions, art collection and water show"
      image={{
        src: "/images/mainliner/633-97.jpg",
        width: 400,
        height: 267,
        alt: "Florida Pavilion offers tourist attractions, art collection and water show",
      }}
      previousHref="/mainliner63396"
      nextHref="/mainliner63398"
    />
  );
}
