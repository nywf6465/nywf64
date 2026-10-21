import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-59 - Sermons from Science — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-59 — Demonstrations demonstrate compatibility of faith and modern-day science in Sermons from Science Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-59 (legacy mainliner63359.html).
 * Nav bar shows Page 60. NEXT → /mainliner63360; PREVIOUS → /mainliner63358.
 */
export default function Mainliner63359Page() {
  return (
    <MainlinerSlidePage
      slideId="633-59"
      title="Slide 633-59 - Sermons from Science"
      lead="633-59 Demonstrations demonstrate compatibility of faith and modern-day science in Sermons from Science Pavilion"
      image={{
        src: "/images/mainliner/633-59.jpg",
        width: 400,
        height: 267,
        alt: "Demonstrations demonstrate compatibility of faith and modern-day science in Sermons from Science Pavilion",
      }}
      previousHref="/mainliner63358"
      nextHref="/mainliner63360"
    />
  );
}
