import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air19.html (Page 19; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir19Page() {
  return (
    <FairAirAerialPage
      pageNum={19}
      title="Industrial Area"
      photoSrc="/images/fair_air19/aerial18.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={963}
      caption="Featuring the Main Entrance and Main Entrance Pylon."
      previousHref="/fair_air18"
      nextHref="/fair_air20"
    />
  );
}
