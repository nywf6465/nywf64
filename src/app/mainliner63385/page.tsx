import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-85 - Better Living Center — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-85 — Better Living Center with glass-enclosed Life-Saver tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-85 (legacy mainliner63385.html).
 * Nav bar shows Page 86. NEXT → /mainliner63386; PREVIOUS → /mainliner63384.
 */
export default function Mainliner63385Page() {
  return (
    <MainlinerSlidePage
      slideId="633-85"
      title="Slide 633-85 - Better Living Center"
      lead="633-85 Better Living Center with glass-enclosed Life-Saver tower"
      image={{
        src: "/images/mainliner/633-85.jpg",
        width: 400,
        height: 267,
        alt: "Better Living Center with glass-enclosed Life-Saver tower",
      }}
      previousHref="/mainliner63384"
      nextHref="/mainliner63386"
    />
  );
}
