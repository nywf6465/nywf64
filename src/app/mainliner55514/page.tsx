import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-14 - Port of New York Authority — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-14 — Port of New York Authority building - aerial gateway to Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-14 (legacy mainliner55514.html).
 * Nav bar shows Page 15. NEXT → /mainliner55515; PREVIOUS → /mainliner55513.
 */
export default function Mainliner55514Page() {
  return (
    <MainlinerSlidePage
      slideId="555-14"
      title="Slide 555-14 - Port of New York Authority"
      lead="555-14 Port of New York Authority building - aerial gateway to Fair"
      image={{
        src: "/images/mainliner/555-14.jpg",
        width: 400,
        height: 273,
        alt: "Port of New York Authority building - aerial gateway to Fair",
      }}
      previousHref="/mainliner55513"
      nextHref="/mainliner55515"
    />
  );
}
