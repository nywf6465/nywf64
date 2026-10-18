import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Transportation Area - Slide 5536 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Transportation Area slide 5536 — Chrysler Rocket — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5536 (legacy plab5536.html).
 * Nav bar shows Page 67. NEXT → /photolab5537; PREVIOUS → /photolab5535.
 */
export default function PhotoLab5536Page() {
  return (
    <PhotoLabSlidePage
      slideId={5536}
      title="Photo Lab - Transportation Area - Slide 5536"
      setLabel="TRANSPORTATION AREA"
      image={{
        src: "/images/photolab/5536.jpg",
        width: 268,
        height: 400,
        alt: "Chrysler Rocket",
      }}
      captions={["Chrysler Rocket"]}
      previousHref="/photolab5535"
      nextHref="/photolab5537"
    />
  );
}
