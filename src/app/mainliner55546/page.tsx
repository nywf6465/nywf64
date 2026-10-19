import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-46 - General Foods Arch — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-46 — General Foods Arch — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-46 (legacy mainliner55546.html).
 * Nav bar shows Page 47. NEXT → /mainliner55547; PREVIOUS → /mainliner55545.
 */
export default function Mainliner55546Page() {
  return (
    <MainlinerSlidePage
      slideId="555-46"
      title="Slide 555-46 - General Foods Arch"
      lead="555-46 General Foods Arch"
      image={{
        src: "/images/mainliner/555-46.jpg",
        width: 257,
        height: 400,
        alt: "General Foods Arch",
      }}
      previousHref="/mainliner55545"
      nextHref="/mainliner55547"
    />
  );
}
