import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-02 - Port of New York Authority — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-02 — Port of New York Authority building, aerial gateway to Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-02 (legacy mainliner63302.html).
 * Nav bar shows Page 3. NEXT → /mainliner63303; PREVIOUS → /mainliner63301.
 */
export default function Mainliner63302Page() {
  return (
    <MainlinerSlidePage
      slideId="633-02"
      title="Slide 633-02 - Port of New York Authority"
      lead="633-02 Port of New York Authority building, aerial gateway to Fair"
      image={{
        src: "/images/mainliner/633-02.jpg",
        width: 400,
        height: 267,
        alt: "Port of New York Authority building, aerial gateway to Fair",
      }}
      previousHref="/mainliner63301"
      nextHref="/mainliner63303"
    />
  );
}
