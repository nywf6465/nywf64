import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-51 - Pavilion of 2000 Tribes — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-51 — WBT 2,000 Tribes Pavilion modeled after aborigine hut — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-51 (legacy mainliner55551.html).
 * Nav bar shows Page 52. NEXT → /mainliner55552; PREVIOUS → /mainliner55550.
 */
export default function Mainliner55551Page() {
  return (
    <MainlinerSlidePage
      slideId="555-51"
      title="Slide 555-51 - Pavilion of 2000 Tribes"
      lead={
        "555-51 WBT\u00A02,000 Tribes Pavilion modeled after aborigine hut"
      }
      image={{
        src: "/images/mainliner/555-51.jpg",
        width: 400,
        height: 267,
        alt: "WBT 2,000 Tribes Pavilion modeled after aborigine hut",
      }}
      previousHref="/mainliner55550"
      nextHref="/mainliner55552"
    />
  );
}
