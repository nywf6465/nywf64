import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5648 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5648 — Night Scene from N.Y. State Towers — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5648 (legacy plab5648.html).
 * Nav bar shows Page 49. NEXT → /photolab5649; PREVIOUS → /photolab5647.
 */
export default function PhotoLab5648Page() {
  return (
    <PhotoLabSlidePage
      slideId={5648}
      title="Photo Lab - General Tour - Slide 5648"
      image={{
        src: "/images/photolab/5648.jpg",
        width: 400,
        height: 267,
        alt: "Night Scene from N.Y. State Towers",
      }}
      captions={["Night Scene from N.Y. State Towers"]}
      previousHref="/photolab5647"
      nextHref="/photolab5649"
    />
  );
}
