import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-30 - Eastman Kodak — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-30 — World's largest outdoor photographic prints feature Eastman Kodak Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-30 (legacy mainliner55530.html).
 * Nav bar shows Page 31. NEXT → /mainliner55531; PREVIOUS → /mainliner55529.
 */
export default function Mainliner55530Page() {
  return (
    <MainlinerSlidePage
      slideId="555-30"
      title="Slide 555-30 - Eastman Kodak"
      lead="555-30 World's largest outdoor photographic prints feature Eastman Kodak Pavilion"
      image={{
        src: "/images/mainliner/555-30.jpg",
        width: 400,
        height: 270,
        alt: "World's largest outdoor photographic prints feature Eastman Kodak Pavilion",
      }}
      previousHref="/mainliner55529"
      nextHref="/mainliner55531"
    />
  );
}
