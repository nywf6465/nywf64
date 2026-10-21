import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-95 - Hawaii — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-95 — Aloha Theater - Hawaii's exotic dances and music are featured — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-95 (legacy mainliner63395.html).
 * Nav bar shows Page 96. NEXT → /mainliner63396; PREVIOUS → /mainliner63394.
 */
export default function Mainliner63395Page() {
  return (
    <MainlinerSlidePage
      slideId="633-95"
      title="Slide 633-95 - Hawaii"
      lead={"633-95 Aloha Theater - Hawaii's exotic dances and music are featured"}
      image={{
        src: "/images/mainliner/633-95.jpg",
        width: 267,
        height: 400,
        alt: "Aloha Theater - Hawaii's exotic dances and music are featured",
      }}
      previousHref="/mainliner63394"
      nextHref="/mainliner63396"
    />
  );
}
