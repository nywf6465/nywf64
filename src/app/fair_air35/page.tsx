import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "State & Federal Area — See the Fair from the Air — nywf64.com",
  description: "State & Federal Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — State & Federal Area.
 * Body from legacy fair_air35.html (Page 35; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir35Page() {
  return (
    <FairAirAerialPage
      pageNum={35}
      title="State & Federal Area"
      photoSrc="/images/fair_air35/aerial34.jpg"
      photoAlt="State & Federal Area"
      photoWidth={1109}
      photoHeight={900}
      caption="Featuring the Pavilion of New York. Source: online auction"
      previousHref="/fair_air34"
      nextHref="/fair_air36"
    />
  );
}
