import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Page 14 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir14Page() {
  return (
    <FairAirAerialPage
      pageNum={14}
      title="Industrial Area"
      photoSrc="/images/fair_air14/aerial19.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={962}
      caption="Featuring the Pavilion of the Wonderful World of Scouting."
      previousHref="/fair_air13"
      nextHref="/fair_air15"
    />
  );
}
