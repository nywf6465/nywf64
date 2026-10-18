import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5603 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5603 — The Rocket Thrower — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5603 (legacy plab5603.html).
 * Nav bar shows Page 4. NEXT → /photolab5604; PREVIOUS → /photolab5602.
 */
export default function PhotoLab5603Page() {
  return (
    <PhotoLabSlidePage
      slideId={5603}
      title="Photo Lab - General Tour - Slide 5603"
      image={{
        src: "/images/photolab/5603.jpg",
        width: 267,
        height: 400,
        alt: "The Rocket Thrower",
      }}
      captions={["The Rocket Thrower"]}
      previousHref="/photolab5602"
      nextHref="/photolab5604"
    />
  );
}
