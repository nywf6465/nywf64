import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5604 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5604 — Morocco — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5604 (legacy plab5604.html).
 * Nav bar shows Page 5. NEXT → /photolab5605; PREVIOUS → /photolab5603.
 */
export default function PhotoLab5604Page() {
  return (
    <PhotoLabSlidePage
      slideId={5604}
      title="Photo Lab - General Tour - Slide 5604"
      image={{
        src: "/images/photolab/5604.jpg",
        width: 400,
        height: 268,
        alt: "Morocco",
      }}
      captions={["Morocco"]}
      previousHref="/photolab5603"
      nextHref="/photolab5605"
    />
  );
}
