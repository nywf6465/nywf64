import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Lake Amusement Area - Slide 5528 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Lake Amusement Area slide 5528 — Les Poupees de Paris — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5528 (legacy plab5528.html).
 * Nav bar shows Page 59. NEXT → /photolab5529; PREVIOUS → /photolab5527.
 */
export default function PhotoLab5528Page() {
  return (
    <PhotoLabSlidePage
      slideId={5528}
      title="Photo Lab - Lake Amusement Area - Slide 5528"
      setLabel="LAKE AMUSEMENT AREA"
      image={{
        src: "/images/photolab/5528.jpg",
        width: 400,
        height: 266,
        alt: "Les Poupees de Paris",
      }}
      captions={["Les Poupees de Paris"]}
      previousHref="/photolab5527"
      nextHref="/photolab5529"
    />
  );
}
