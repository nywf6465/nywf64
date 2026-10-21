import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-40 - Jordan — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-40 — Gold mosaic and colored glass covers many-domed structure of Jordan seen at night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-40 (legacy mainliner63340.html).
 * Nav bar shows Page 41. NEXT → /mainliner63341; PREVIOUS → /mainliner63339.
 */
export default function Mainliner63340Page() {
  return (
    <MainlinerSlidePage
      slideId="633-40"
      title="Slide 633-40 - Jordan"
      lead="633-40 Gold mosaic and colored glass covers many-domed structure of Jordan seen at night"
      image={{
        src: "/images/mainliner/633-40.jpg",
        width: 400,
        height: 267,
        alt: "Gold mosaic and colored glass covers many-domed structure of Jordan seen at night",
      }}
      previousHref="/mainliner63339"
      nextHref="/mainliner63341"
    />
  );
}
