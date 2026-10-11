import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Page 27 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir27Page() {
  return (
    <FairAirAerialPage
      pageNum={27}
      title="International Area"
      photoSrc="/images/fair_air27/aerial36.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={1059}
      photoHeight={1349}
      caption="Featuring the Pavilions of American Israel, Guinea, Sudan, Jordan, Morocco, and others. Source: online auction"
      previousHref="/fair_air26"
      nextHref="/fair_air28"
    />
  );
}
