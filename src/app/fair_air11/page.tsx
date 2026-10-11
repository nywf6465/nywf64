import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Page 11 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir11Page() {
  return (
    <FairAirAerialPage
      pageNum={11}
      title="Industrial Area"
      photoSrc="/images/fair_air11/aerial12.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={955}
      caption="Featuring the Pavilion of Travelers Insurance and others."
      previousHref="/fair_air10"
      nextHref="/fair_air12"
    />
  );
}
