import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-24 - Hollywood U.S.A. — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-24 — Facsimile of Graumann's Chinese Theater at Hollywood U.S.A. — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-24 (legacy mainliner63324.html).
 * Nav bar shows Page 25. NEXT → /mainliner63325; PREVIOUS → /mainliner63323.
 */
export default function Mainliner63324Page() {
  return (
    <MainlinerSlidePage
      slideId="633-24"
      title="Slide 633-24 - Hollywood U.S.A."
      lead="633-24 Facsimile of Graumann's Chinese Theater at Hollywood U.S.A."
      image={{
        src: "/images/mainliner/633-24.jpg",
        width: 267,
        height: 400,
        alt: "Facsimile of Graumann's Chinese Theater at Hollywood U.S.A.",
      }}
      previousHref="/mainliner63323"
      nextHref="/mainliner63325"
    />
  );
}
