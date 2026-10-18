import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - International Area Set A - Slide 5492 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab International Area Set A slide 5492 — Republic of China — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5492 (legacy plab5492.html).
 * Nav bar shows Page 23. NEXT → /photolab5493; PREVIOUS → /photolab5491.
 */
export default function PhotoLab5492Page() {
  return (
    <PhotoLabSlidePage
      slideId={5492}
      title="Photo Lab - International Area Set A - Slide 5492"
      setLabel="INTERNATIONAL AREA, SET A"
      image={{
        src: "/images/photolab/5492.jpg",
        width: 400,
        height: 267,
        alt: "Republic of China",
      }}
      captions={["Republic of China"]}
      previousHref="/photolab5491"
      nextHref="/photolab5493"
    />
  );
}
