import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Page 23 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir23Page() {
  return (
    <FairAirAerialPage
      pageNum={23}
      title="International Area"
      photoSrc="/images/fair_air23/aerial02.jpg"
      photoAlt="International Area"
      photoWidth={1200}
      photoHeight={954}
      caption="Featuring the Pavilions of Venezuela, Hong Kong, Indonesia, Polynesia, Mexico, China, Bargreen Buffet and others."
      previousHref="/fair_air22"
      nextHref="/fair_air24"
    />
  );
}
