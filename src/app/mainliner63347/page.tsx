import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-47 - Spain — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-47 — In a striking modern pavilion, atmosphere of old Spain forms setting for great art — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-47 (legacy mainliner63347.html).
 * Nav bar shows Page 48. NEXT → /mainliner63348; PREVIOUS → /mainliner63346.
 */
export default function Mainliner63347Page() {
  return (
    <MainlinerSlidePage
      slideId="633-47"
      title="Slide 633-47 - Spain"
      lead="633-47 In a striking modern pavilion, atmosphere of old Spain forms setting for great art"
      image={{
        src: "/images/mainliner/633-47.jpg",
        width: 400,
        height: 267,
        alt: "In a striking modern pavilion, atmosphere of old Spain forms setting for great art",
      }}
      previousHref="/mainliner63346"
      nextHref="/mainliner63348"
    />
  );
}
