import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set A - Slide 5475 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set A slide 5475 — National Cash Register — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5475 (legacy plab5475.html).
 * Nav bar shows Page 6. NEXT → /photolab5476; PREVIOUS → /photolab5474.
 */
export default function PhotoLab5475Page() {
  return (
    <PhotoLabSlidePage
      slideId={5475}
      title="Photo Lab - Industrial Area Set A - Slide 5475"
      setLabel="INDUSTRIAL AREA, SET A"
      image={{
        src: "/images/photolab/5475.jpg",
        width: 400,
        height: 271,
        alt: "National Cash Register",
      }}
      captions={["National Cash Register"]}
      previousHref="/photolab5474"
      nextHref="/photolab5476"
    />
  );
}
