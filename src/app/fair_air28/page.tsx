import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Main Mall — See the Fair from the Air — nywf64.com",
  description: "Main Mall aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Main Mall.
 * Page 28 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir28Page() {
  return (
    <FairAirAerialPage
      pageNum={28}
      title="Main Mall"
      photoSrc="/images/fair_air28/aerial27.jpg"
      photoAlt="Main Mall"
      photoWidth={1200}
      photoHeight={963}
      caption="Featuring the Pavilions of the Fair."
      previousHref="/fair_air27"
      nextHref="/fair_air29"
    />
  );
}
