import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air23.html (Page 23; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir23Page() {
  return (
    <FairAirAerialPage
      pageNum={23}
      title="Industrial Area"
      photoSrc="/images/fair_air23/aerial22.jpg"
      photoAlt="Industrial Area"
      photoWidth={1130}
      photoHeight={1425}
      caption="Featuring the Fountains of the Planets."
      previousHref="/fair_air22"
      nextHref="/fair_air24"
    />
  );
}
