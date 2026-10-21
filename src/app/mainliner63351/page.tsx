import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-51 - Central America-Panama — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-51 — Open sided building with bright awnings presents exhibits of five Central American countries — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-51 (legacy mainliner63351.html).
 * Nav bar shows Page 52. NEXT → /mainliner63352; PREVIOUS → /mainliner63350.
 */
export default function Mainliner63351Page() {
  return (
    <MainlinerSlidePage
      slideId="633-51"
      title="Slide 633-51 - Central America-Panama"
      lead="633-51 Open sided building with bright awnings presents exhibits of five Central American countries"
      image={{
        src: "/images/mainliner/633-51.jpg",
        width: 400,
        height: 267,
        alt: "Open sided building with bright awnings presents exhibits of five Central American countries",
      }}
      previousHref="/mainliner63350"
      nextHref="/mainliner63352"
    />
  );
}
