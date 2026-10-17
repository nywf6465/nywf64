import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5636 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5636 — Pavilion of Spain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5636 (legacy plab5636.html).
 * Nav bar shows Page 37. NEXT → /photolab5637; PREVIOUS → /photolab5635.
 */
export default function PhotoLab5636Page() {
  return (
    <PhotoLabSlidePage
      slideId={5636}
      title="Photo Lab - General Tour - Slide 5636"
      image={{
        src: "/images/photolab/5636.jpg",
        width: 400,
        height: 267,
        alt: "Pavilion of Spain",
      }}
      captions={["Pavilion of Spain"]}
      previousHref="/photolab5635"
      nextHref="/photolab5637"
    />
  );
}
