import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Transportation Area — See the Fair from the Air — nywf64.com",
  description: "Transportation Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Transportation Area.
 * Body from legacy fair_air27.html (Page 27; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir27Page() {
  return (
    <FairAirAerialPage
      pageNum={27}
      title="Transportation Area"
      photoSrc="/images/fair_air27/aerial26.jpg"
      photoAlt="Transportation Area"
      photoWidth={1200}
      photoHeight={959}
      caption="Featuring the Pavilions of Lowenbrau and Avis."
      previousHref="/fair_air26"
      nextHref="/fair_air28"
    />
  );
}
