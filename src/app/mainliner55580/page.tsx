import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-80 - Alaska — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-80 — 49th state has unusual exhibit in white, igloo-shaped pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-80 (legacy mainliner55580.html).
 * Nav bar shows Page 81. NEXT → /mainliner55581; PREVIOUS → /mainliner55579.
 */
export default function Mainliner55580Page() {
  return (
    <MainlinerSlidePage
      slideId="555-80"
      title="Slide 555-80 - Alaska"
      lead="555-80 49th state has unusual exhibit in white, igloo-shaped pavilion"
      image={{
        src: "/images/mainliner/555-80.jpg",
        width: 400,
        height: 267,
        alt: "49th state has unusual exhibit in white, igloo-shaped pavilion",
      }}
      previousHref="/mainliner55579"
      nextHref="/mainliner55581"
    />
  );
}
