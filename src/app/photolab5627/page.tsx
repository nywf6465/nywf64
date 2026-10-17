import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5627 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5627 — N.Y. Port Authority Heliport — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5627 (legacy plab5627.html).
 * Nav bar shows Page 28. NEXT → /photolab5628; PREVIOUS → /photolab5626.
 */
export default function PhotoLab5627Page() {
  return (
    <PhotoLabSlidePage
      slideId={5627}
      title="Photo Lab - General Tour - Slide 5627"
      image={{
        src: "/images/photolab/5627.jpg",
        width: 267,
        height: 400,
        alt: "N.Y. Port Authority Heliport",
      }}
      captions={["N.Y. Port Authority Heliport"]}
      previousHref="/photolab5626"
      nextHref="/photolab5628"
    />
  );
}
