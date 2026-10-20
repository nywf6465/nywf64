import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-19 - New York State — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-19 — Towers of New York State's pavilion framed by gay colored flags — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-19 (legacy mainliner63319.html).
 * Nav bar shows Page 20. NEXT → /mainliner63320; PREVIOUS → /mainliner63318.
 */
export default function Mainliner63319Page() {
  return (
    <MainlinerSlidePage
      slideId="633-19"
      title="Slide 633-19 - New York State"
      lead="633-19 Towers of New York State's pavilion framed by gay colored flags"
      image={{
        src: "/images/mainliner/633-19.jpg",
        width: 400,
        height: 267,
        alt: "Towers of New York State's pavilion framed by gay colored flags",
      }}
      previousHref="/mainliner63318"
      nextHref="/mainliner63320"
    />
  );
}
