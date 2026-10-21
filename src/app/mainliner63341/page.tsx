import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-41 - Republic of China — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-41 — Republic of China houses rare art objects in opulent red and gold replica of an emperor's palace — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-41 (legacy mainliner63341.html).
 * Nav bar shows Page 42. NEXT → /mainliner63342; PREVIOUS → /mainliner63340.
 */
export default function Mainliner63341Page() {
  return (
    <MainlinerSlidePage
      slideId="633-41"
      title="Slide 633-41 - Republic of China"
      lead={
        "633-41 Republic of China houses rare art objects in opulent red and gold replica of an emperor's palace"
      }
      image={{
        src: "/images/mainliner/633-41.jpg",
        width: 267,
        height: 400,
        alt: "Republic of China houses rare art objects in opulent red and gold replica of an emperor's palace",
      }}
      previousHref="/mainliner63340"
      nextHref="/mainliner63342"
    />
  );
}
