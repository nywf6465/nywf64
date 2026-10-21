import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-70 - Seven-Up — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-70 — Seven-Up's futuristic clock-tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-70 (legacy mainliner63370.html).
 * Nav bar shows Page 71. NEXT → /mainliner63371; PREVIOUS → /mainliner63369.
 */
export default function Mainliner63370Page() {
  return (
    <MainlinerSlidePage
      slideId="633-70"
      title="Slide 633-70 - Seven-Up"
      lead={"633-70 Seven-Up's futuristic clock-tower"}
      image={{
        src: "/images/mainliner/633-70.jpg",
        width: 266,
        height: 400,
        alt: "Seven-Up's futuristic clock-tower",
      }}
      previousHref="/mainliner63369"
      nextHref="/mainliner63371"
    />
  );
}
