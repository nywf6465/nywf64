import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5602 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5602 — From N.Y. State Tower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5602 (legacy plab5602.html).
 * Nav bar shows Page 3. NEXT → /photolab5603; PREVIOUS → /photolab5601.
 */
export default function PhotoLab5602Page() {
  return (
    <PhotoLabSlidePage
      slideId={5602}
      title="Photo Lab - General Tour - Slide 5602"
      image={{
        src: "/images/photolab/5602.jpg",
        width: 400,
        height: 267,
        alt: "From N.Y. State Tower",
      }}
      captions={["From N.Y. State Tower"]}
      previousHref="/photolab5601"
      nextHref="/photolab5603"
    />
  );
}
