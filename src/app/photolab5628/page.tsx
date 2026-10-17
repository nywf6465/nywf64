import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5628 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5628 — N.Y. Port Authority Heliport - Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5628 (legacy plab5628.html).
 * Nav bar shows Page 29. NEXT → /photolab5629; PREVIOUS → /photolab5627.
 */
export default function PhotoLab5628Page() {
  return (
    <PhotoLabSlidePage
      slideId={5628}
      title="Photo Lab - General Tour - Slide 5628"
      image={{
        src: "/images/photolab/5628.jpg",
        width: 400,
        height: 267,
        alt: "N.Y. Port Authority Heliport - Night",
      }}
      captions={["N.Y. Port Authority Heliport - Night"]}
      previousHref="/photolab5627"
      nextHref="/photolab5629"
    />
  );
}
