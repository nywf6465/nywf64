import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-06 - Unisphere — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-06 — Night view of Unisphere with Fountains of Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-06 (legacy mainliner55506.html).
 * Nav bar shows Page 7. NEXT → /mainliner55507; PREVIOUS → /mainliner55505.
 */
export default function Mainliner55506Page() {
  return (
    <MainlinerSlidePage
      slideId="555-06"
      title="Slide 555-06 - Unisphere"
      lead="555-06 Night view of Unisphere with Fountains of Fair"
      image={{
        src: "/images/mainliner/555-06.jpg",
        width: 400,
        height: 264,
        alt: "Night view of Unisphere with Fountains of Fair",
      }}
      previousHref="/mainliner55505"
      nextHref="/mainliner55507"
    />
  );
}
