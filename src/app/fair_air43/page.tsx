import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Transportation Area — See the Fair from the Air — nywf64.com",
  description: "Transportation Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Transportation Area.
 * Page 43 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir43Page() {
  return (
    <FairAirAerialPage
      pageNum={43}
      title="Transportation Area"
      photoSrc="/images/fair_air43/aerial17.jpg"
      photoAlt="Transportation Area"
      photoWidth={1200}
      photoHeight={955}
      caption="Featuring the Pavilions of US Rubber, SKF Industries, Transportation & Travel, Socony Mobil and others."
      previousHref="/fair_air42"
      nextHref="/fair_air44"
    />
  );
}
