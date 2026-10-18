import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5535 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5535 — U.S. Rubber Company Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5535 (legacy plab5535.html).
 * Nav bar shows Page 66. NEXT → /photolab5536; PREVIOUS → /photolab5534.
 */
export default function PhotoLab5535Page() {
  return (
    <PhotoLabSlidePage
      slideId={5535}
      title="Photo Lab - Transportation Area - Slide 5535"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5535.jpg",
        width: 270,
        height: 400,
        alt: "U.S. Rubber Company Exhibit",
      }}
      captions={["U.S. Rubber Company Exhibit"]}
      previousHref="/photolab5534"
      nextHref="/photolab5536"
    />
  );
}
