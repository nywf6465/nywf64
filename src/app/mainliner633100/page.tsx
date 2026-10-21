import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-100 - Unisphere — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-100 — Fair's Symbol, Fountains of the Fair, aglow against night sky — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-100 (legacy mainliner633100.html).
 * Nav bar shows Page 101. NEXT → /mainliner63301; PREVIOUS → /mainliner63399.
 */
export default function Mainliner633100Page() {
  return (
    <MainlinerSlidePage
      slideId="633-100"
      title="Slide 633-100 - Unisphere"
      lead={"633-100 Fair's Symbol, Fountains of the Fair, aglow against night sky"}
      image={{
        src: "/images/mainliner/633-100.jpg",
        width: 400,
        height: 272,
        alt: "Fair's Symbol, Fountains of the Fair, aglow against night sky",
      }}
      previousHref="/mainliner63399"
      nextHref="/mainliner63301"
    />
  );
}
