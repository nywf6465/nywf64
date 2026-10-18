import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - Industrial Area Set B - Slide 5487 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab Industrial Area Set B slide 5487 — Pavilion of American Interiors -Night — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5487 (legacy plab5487.html).
 * Nav bar shows Page 18. NEXT → /photolab5488; PREVIOUS → /photolab5486.
 */
export default function PhotoLab5487Page() {
  return (
    <PhotoLabSlidePage
      slideId={5487}
      title="Photo Lab - Industrial Area Set B - Slide 5487"
      setLabel="INDUSTRIAL AREA, SET B"
      image={{
        src: "/images/photolab/5487.jpg",
        width: 267,
        height: 400,
        alt: "Pavilion of American Interiors -Night",
      }}
      captions={["Pavilion of American Interiors -Night"]}
      previousHref="/photolab5486"
      nextHref="/photolab5488"
    />
  );
}
