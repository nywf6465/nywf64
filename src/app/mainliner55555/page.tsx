import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-55 - Hong Kong — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-55 — Upswept eaves, intricate carvings and bright colors mark Hong Kong Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-55 (legacy mainliner55555.html).
 * Nav bar shows Page 56. NEXT → /mainliner55556; PREVIOUS → /mainliner55554.
 */
export default function Mainliner55555Page() {
  return (
    <MainlinerSlidePage
      slideId="555-55"
      title="Slide 555-55 - Hong Kong"
      lead="555-55 Upswept eaves, intricate carvings and bright colors mark Hong Kong Pavilion"
      image={{
        src: "/images/mainliner/555-55.jpg",
        width: 400,
        height: 267,
        alt: "Upswept eaves, intricate carvings and bright colors mark Hong Kong Pavilion",
      }}
      previousHref="/mainliner55554"
      nextHref="/mainliner55556"
    />
  );
}
