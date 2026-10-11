import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Page 24 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir24Page() {
  return (
    <FairAirAerialPage
      pageNum={24}
      title="International Area"
      photoSrc="/images/fair_air24/aerial13.jpg"
      photoAlt="International Area"
      photoWidth={1200}
      photoHeight={958}
      caption="Featuring the Pavilions of Philippeans, Lebanon, Greece, Morocco, and others."
      previousHref="/fair_air23"
      nextHref="/fair_air25"
    />
  );
}
