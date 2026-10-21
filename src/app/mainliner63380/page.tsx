import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-80 - General Electric — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-80 — General Electric Pavilion at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-80 (legacy mainliner63380.html).
 * Nav bar shows Page 81. NEXT → /mainliner63381; PREVIOUS → /mainliner63379.
 */
export default function Mainliner63380Page() {
  return (
    <MainlinerSlidePage
      slideId="633-80"
      title="Slide 633-80 - General Electric"
      lead="633-80 General Electric Pavilion at night"
      image={{
        src: "/images/mainliner/633-80.jpg",
        width: 400,
        height: 267,
        alt: "General Electric Pavilion at night",
      }}
      previousHref="/mainliner63379"
      nextHref="/mainliner63381"
    />
  );
}
