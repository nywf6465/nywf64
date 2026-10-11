import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "State & Federal Area — See the Fair from the Air — nywf64.com",
  description: "State & Federal Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — State & Federal Area.
 * Body from legacy fair_air43.html (Page 43; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir43Page() {
  return (
    <FairAirAerialPage
      pageNum={43}
      title="State & Federal Area"
      photoSrc="/images/fair_air43/aerial44.jpg"
      photoAlt="State & Federal Area"
      photoWidth={768}
      photoHeight={960}
      caption="Featuring the Pavilions of Missouri, Alaska and Westinghouse."
      previousHref="/fair_air42"
      nextHref="/fair_air44"
    />
  );
}
