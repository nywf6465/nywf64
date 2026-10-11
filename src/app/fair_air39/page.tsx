import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Body from legacy fair_air39.html (Page 39; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir39Page() {
  return (
    <FairAirAerialPage
      pageNum={39}
      title="International Area"
      photoSrc="/images/fair_air39/aerial36.jpg"
      photoAlt="International Area"
      photoWidth={1059}
      photoHeight={1349}
      caption="Featuring the Pavilions of American Israel, Guinea, Sudan, Jordan, Morocco, and others. Source: online auction"
      previousHref="/fair_air38"
      nextHref="/fair_air40"
    />
  );
}
