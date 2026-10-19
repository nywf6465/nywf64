import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-35 - RCA — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-35 — Cluster of white and copper buildings house R.C.A. exhibits — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-35 (legacy mainliner55535.html).
 * Nav bar shows Page 36. NEXT → /mainliner55536; PREVIOUS → /mainliner55534.
 */
export default function Mainliner55535Page() {
  return (
    <MainlinerSlidePage
      slideId="555-35"
      title="Slide 555-35 - RCA"
      lead="555-35 Cluster of white and copper buildings house R.C.A. exhibits"
      image={{
        src: "/images/mainliner/555-35.jpg",
        width: 400,
        height: 269,
        alt: "Cluster of white and copper buildings house R.C.A. exhibits",
      }}
      previousHref="/mainliner55534"
      nextHref="/mainliner55536"
    />
  );
}
