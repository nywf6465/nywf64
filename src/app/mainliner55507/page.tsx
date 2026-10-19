import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-07 - Glide-a-Ride — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-07 — One of the Fair's transporation fleet of 300 Greyhound vehicles — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-07 (legacy mainliner55507.html).
 * Nav bar shows Page 8. NEXT → /mainliner55508; PREVIOUS → /mainliner55506.
 */
export default function Mainliner55507Page() {
  return (
    <MainlinerSlidePage
      slideId="555-07"
      title="Slide 555-07 - Glide-a-Ride"
      lead="555-07 One of the Fair's transporation fleet of 300 Greyhound vehicles"
      image={{
        src: "/images/mainliner/555-07.jpg",
        width: 400,
        height: 271,
        alt: "One of the Fair's transporation fleet of 300 Greyhound vehicles",
      }}
      previousHref="/mainliner55506"
      nextHref="/mainliner55508"
    />
  );
}
