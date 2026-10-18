import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5531 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5531 — Unisphere — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5531 (legacy plab5531.html).
 * Nav bar shows Page 62. NEXT → /photolab5532; PREVIOUS → /photolab5530.
 */
export default function PhotoLab5531Page() {
  return (
    <PhotoLabSlidePage
      slideId={5531}
      title="Photo Lab - Transportation Area - Slide 5531"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5531.jpg",
        width: 400,
        height: 269,
        alt: "Unisphere",
      }}
      captions={["Unisphere"]}
      previousHref="/photolab5530"
      nextHref="/photolab5532"
    />
  );
}
