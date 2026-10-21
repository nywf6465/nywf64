import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-43 - United Arab Republic — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-43 — Three towering arches form gateway to United Arab Republic's exhibits — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-43 (legacy mainliner63343.html).
 * Nav bar shows Page 44. NEXT → /mainliner63344; PREVIOUS → /mainliner63342.
 */
export default function Mainliner63343Page() {
  return (
    <MainlinerSlidePage
      slideId="633-43"
      title="Slide 633-43 - United Arab Republic"
      lead={
        "633-43 Three towering arches form gateway to United Arab Republic's exhibits"
      }
      image={{
        src: "/images/mainliner/633-43.jpg",
        width: 400,
        height: 267,
        alt: "Three towering arches form gateway to United Arab Republic's exhibits",
      }}
      previousHref="/mainliner63342"
      nextHref="/mainliner63344"
    />
  );
}
