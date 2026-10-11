import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air20.html (Page 20; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir20Page() {
  return (
    <FairAirAerialPage
      pageNum={20}
      title="Industrial Area"
      photoSrc="/images/fair_air20/aerial19.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={962}
      caption="Featuring the Pavilion of the Wonderful World of Scouting."
      previousHref="/fair_air19"
      nextHref="/fair_air21"
    />
  );
}
