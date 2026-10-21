import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-94 - Walter's International Wax Museum — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-94 — Walter's International Wax Museum houses largest collection of its kind in the United States — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-94 (legacy mainliner63394.html).
 * Nav bar shows Page 95. NEXT → /mainliner63395; PREVIOUS → /mainliner63393.
 */
export default function Mainliner63394Page() {
  return (
    <MainlinerSlidePage
      slideId="633-94"
      title="Slide 633-94 - Walter's International Wax Museum"
      lead={
        "633-94 Walter's International Wax Museum houses largest collection of its kind in the United States"
      }
      image={{
        src: "/images/mainliner/633-94.jpg",
        width: 400,
        height: 267,
        alt: "Walter's International Wax Museum houses largest collection of its kind in the United States",
      }}
      previousHref="/mainliner63393"
      nextHref="/mainliner63395"
    />
  );
}
