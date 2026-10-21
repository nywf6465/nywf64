import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-71 - Continental Insurance — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-71 — American Revolution comes alive in Pavilion of Continental Insurance — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-71 (legacy mainliner63371.html).
 * Nav bar shows Page 72. NEXT → /mainliner63372; PREVIOUS → /mainliner63370.
 */
export default function Mainliner63371Page() {
  return (
    <MainlinerSlidePage
      slideId="633-71"
      title="Slide 633-71 - Continental Insurance"
      lead="633-71 American Revolution comes alive in Pavilion of Continental Insurance"
      image={{
        src: "/images/mainliner/633-71.jpg",
        width: 267,
        height: 400,
        alt: "American Revolution comes alive in Pavilion of Continental Insurance",
      }}
      previousHref="/mainliner63370"
      nextHref="/mainliner63372"
    />
  );
}
