import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5606 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5606 — Oregon Timber Carnival Champion Log Rollers — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5606 (legacy plab5606.html).
 * Nav bar shows Page 7. NEXT → /photolab5607; PREVIOUS → /photolab5605.
 */
export default function PhotoLab5606Page() {
  return (
    <PhotoLabSlidePage
      slideId={5606}
      title="Photo Lab - General Tour - Slide 5606"
      image={{
        src: "/images/photolab/5606.jpg",
        width: 267,
        height: 400,
        alt: "Oregon Timber Carnival Champion Log Rollers",
      }}
      captions={["Oregon Timber Carnival Champion Log Rollers"]}
      previousHref="/photolab5605"
      nextHref="/photolab5607"
    />
  );
}
