import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-64 - Billy Graham — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-64 — A 100-foot tower topped by a golden sunburst marks Billy Graham Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-64 (legacy mainliner63364.html).
 * Nav bar shows Page 65. NEXT → /mainliner63365; PREVIOUS → /mainliner63363.
 */
export default function Mainliner63364Page() {
  return (
    <MainlinerSlidePage
      slideId="633-64"
      title="Slide 633-64 - Billy Graham"
      lead="633-64 A 100-foot tower topped by a golden sunburst marks Billy Graham Pavilion"
      image={{
        src: "/images/mainliner/633-64.jpg",
        width: 267,
        height: 400,
        alt: "A 100-foot tower topped by a golden sunburst marks Billy Graham Pavilion",
      }}
      previousHref="/mainliner63363"
      nextHref="/mainliner63365"
    />
  );
}
