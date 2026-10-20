import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-05 - AMF\u00A0Monorail — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-05 — AMF\u00A0Monorail takes passengers on scenic ride over flag-lined Meadow Lake Bridge — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-05 (legacy mainliner63305.html).
 * Nav bar shows Page 6. NEXT → /mainliner63306; PREVIOUS → /mainliner63304.
 */
export default function Mainliner63305Page() {
  return (
    <MainlinerSlidePage
      slideId="633-05"
      title={"Slide 633-05 - AMF\u00A0Monorail"}
      lead={
        "633-05 AMF\u00A0Monorail takes passengers on scenic ride over flag-lined Meadow Lake Bridge"
      }
      image={{
        src: "/images/mainliner/633-05.jpg",
        width: 400,
        height: 271,
        alt: "AMF\u00A0Monorail takes passengers on scenic ride over flag-lined Meadow Lake Bridge",
      }}
      previousHref="/mainliner63304"
      nextHref="/mainliner63306"
    />
  );
}
