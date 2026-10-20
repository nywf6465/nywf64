import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-76 - Wisconsin — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-76 — Modern teepee points up Indian heritage of Wisconsin — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-76 (legacy mainliner55576.html).
 * Nav bar shows Page 77. NEXT → /mainliner55577; PREVIOUS → /mainliner55575.
 */
export default function Mainliner55576Page() {
  return (
    <MainlinerSlidePage
      slideId="555-76"
      title="Slide 555-76 - Wisconsin"
      lead="555-76 Modern teepee points up Indian heritage of Wisconsin"
      image={{
        src: "/images/mainliner/555-76.jpg",
        width: 267,
        height: 400,
        alt: "Modern teepee points up Indian heritage of Wisconsin",
      }}
      previousHref="/mainliner55575"
      nextHref="/mainliner55577"
    />
  );
}
