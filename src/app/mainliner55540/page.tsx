import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-40 - United States — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-40 — Insignia on United States Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-40 (legacy mainliner55540.html).
 * Nav bar shows Page 41. NEXT → /mainliner55541; PREVIOUS → /mainliner55539.
 */
export default function Mainliner55540Page() {
  return (
    <MainlinerSlidePage
      slideId="555-40"
      title="Slide 555-40 - United States"
      lead="555-40 Insignia on United States Pavilion"
      image={{
        src: "/images/mainliner/555-40.jpg",
        width: 400,
        height: 267,
        alt: "Insignia on United States Pavilion",
      }}
      previousHref="/mainliner55539"
      nextHref="/mainliner55541"
    />
  );
}
