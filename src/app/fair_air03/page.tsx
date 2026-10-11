import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Amusement Area — See the Fair from the Air — nywf64.com",
  description: "Amusement Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Amusement Area.
 * Page 3 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir03Page() {
  return (
    <FairAirAerialPage
      pageNum={3}
      title="Amusement Area"
      photoSrc="/images/fair_air03/aerial25.jpg"
      photoAlt="Amusement Area"
      photoWidth={1200}
      photoHeight={928}
      caption="Featuring the Pavilions of AMF & Continental Circus, Amphitheater, Hawaii, Texas and others."
      previousHref="/fair_air02"
      nextHref="/fair_air04"
    />
  );
}
