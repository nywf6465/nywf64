import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "State & Federal Area — See the Fair from the Air — nywf64.com",
  description: "State & Federal Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — State & Federal Area.
 * Page 31 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir31Page() {
  return (
    <FairAirAerialPage
      pageNum={31}
      title="State & Federal Area"
      photoSrc="/images/fair_air31/aerial14.jpg"
      photoAlt="State & Federal Area"
      photoWidth={1200}
      photoHeight={954}
      caption="Featuring the Pavilions of Illinois, Long Island Railroad, Montana and others."
      previousHref="/fair_air30"
      nextHref="/fair_air32"
    />
  );
}
