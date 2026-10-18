import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5534 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5534 — Aerial View — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5534 (legacy plab5534.html).
 * Nav bar shows Page 65. NEXT → /photolab5535; PREVIOUS → /photolab5533.
 */
export default function PhotoLab5534Page() {
  return (
    <PhotoLabSlidePage
      slideId={5534}
      title="Photo Lab - Transportation Area - Slide 5534"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5534.jpg",
        width: 400,
        height: 270,
        alt: "Aerial View",
      }}
      captions={["Aerial View"]}
      previousHref="/photolab5533"
      nextHref="/photolab5535"
    />
  );
}
