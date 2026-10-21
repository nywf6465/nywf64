import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-31 - Alaska — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-31 — Under white, igloo-shaped dome, Alaska has exhibit of wild life, industry and Indian crafts — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-31 (legacy mainliner63331.html).
 * Nav bar shows Page 32. NEXT → /mainliner63332; PREVIOUS → /mainliner63330.
 */
export default function Mainliner63331Page() {
  return (
    <MainlinerSlidePage
      slideId="633-31"
      title="Slide 633-31 - Alaska"
      lead="633-31 Under white, igloo-shaped dome, Alaska has exhibit of wild life, industry and Indian crafts"
      image={{
        src: "/images/mainliner/633-31.jpg",
        width: 400,
        height: 267,
        alt: "Under white, igloo-shaped dome, Alaska has exhibit of wild life, industry and Indian crafts",
      }}
      previousHref="/mainliner63330"
      nextHref="/mainliner63332"
    />
  );
}
