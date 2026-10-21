import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-81 - NCR — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-81 — Night shot of two-story ribbed framed and concrete Pavilion of National Cash Register — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-81 (legacy mainliner63381.html).
 * Nav bar shows Page 82. NEXT → /mainliner63382; PREVIOUS → /mainliner63380.
 */
export default function Mainliner63381Page() {
  return (
    <MainlinerSlidePage
      slideId="633-81"
      title="Slide 633-81 - NCR"
      lead="633-81 Night shot of two-story ribbed framed and concrete Pavilion of National Cash Register"
      image={{
        src: "/images/mainliner/633-81.jpg",
        width: 400,
        height: 267,
        alt: "Night shot of two-story ribbed framed and concrete Pavilion of National Cash Register",
      }}
      previousHref="/mainliner63380"
      nextHref="/mainliner63382"
    />
  );
}
