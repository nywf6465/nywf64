import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-45 - Seven-Up — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-45 — Futuristic tower rises 107-feet above Seven-Up Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-45 (legacy mainliner55545.html).
 * Nav bar shows Page 46. NEXT → /mainliner55546; PREVIOUS → /mainliner55544.
 */
export default function Mainliner55545Page() {
  return (
    <MainlinerSlidePage
      slideId="555-45"
      title="Slide 555-45 - Seven-Up"
      lead="555-45 Futuristic tower rises 107-feet above Seven-Up Pavilion"
      image={{
        src: "/images/mainliner/555-45.jpg",
        width: 267,
        height: 400,
        alt: "Futuristic tower rises 107-feet above Seven-Up Pavilion",
      }}
      previousHref="/mainliner55544"
      nextHref="/mainliner55546"
    />
  );
}
