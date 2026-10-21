import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-52 - Denmark — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-52 — Denmark Pavilion - striking building of natural wood and glass — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-52 (legacy mainliner63352.html).
 * Nav bar shows Page 53. NEXT → /mainliner63353; PREVIOUS → /mainliner63351.
 */
export default function Mainliner63352Page() {
  return (
    <MainlinerSlidePage
      slideId="633-52"
      title="Slide 633-52 - Denmark"
      lead="633-52 Denmark Pavilion - striking building of natural wood and glass"
      image={{
        src: "/images/mainliner/633-52.jpg",
        width: 400,
        height: 267,
        alt: "Denmark Pavilion - striking building of natural wood and glass",
      }}
      previousHref="/mainliner63351"
      nextHref="/mainliner63353"
    />
  );
}
