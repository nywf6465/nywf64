import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-54 - Philippines — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-54 — Night shot of Philippine Pavilion built in shape of salakot, wide-brimmed sun hat of Islanders — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-54 (legacy mainliner63354.html).
 * Nav bar shows Page 55. NEXT → /mainliner63355; PREVIOUS → /mainliner63353.
 */
export default function Mainliner63354Page() {
  return (
    <MainlinerSlidePage
      slideId="633-54"
      title="Slide 633-54 - Philippines"
      lead="633-54 Night shot of Philippine Pavilion built in shape of salakot, wide-brimmed sun hat of Islanders"
      image={{
        src: "/images/mainliner/633-54.jpg",
        width: 400,
        height: 267,
        alt: "Night shot of Philippine Pavilion built in shape of salakot, wide-brimmed sun hat of Islanders",
      }}
      previousHref="/mainliner63353"
      nextHref="/mainliner63355"
    />
  );
}
