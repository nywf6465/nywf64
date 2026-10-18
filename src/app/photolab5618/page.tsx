import type { Metadata } from "next";
import { PhotoLabSlidePage } from "@/components/PhotoLabSlidePage";

export const metadata: Metadata = {
  title:
    "Photo Lab - General Tour - Slide 5618 — The Photo Lab Slide Set — nywf64.com",
  description:
    "Photo Lab General Tour slide 5618 — Mexico - The Flyers of Papantla — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Photo Lab slide 5618 (legacy plab5618.html).
 * Nav bar shows Page 19. NEXT → /photolab5619; PREVIOUS → /photolab5617.
 */
export default function PhotoLab5618Page() {
  return (
    <PhotoLabSlidePage
      slideId={5618}
      title="Photo Lab - General Tour - Slide 5618"
      image={{
        src: "/images/photolab/5618.jpg",
        width: 267,
        height: 400,
        alt: "Mexico - The Flyers of Papantla",
      }}
      captions={["Mexico - The Flyers of Papantla"]}
      previousHref="/photolab5617"
      nextHref="/photolab5619"
    />
  );
}
