import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air08.html (Page 8; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir08Page() {
  return (
    <FairAirAerialPage
      pageNum={8}
      title="Industrial Area"
      photoSrc="/images/fair_air08/aerial07.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={958}
      caption="Featuring the Pavilions of Johnson Wax, Tower of Light, Fountains of the Fair and the Tiparillo Band Pavilion."
      previousHref="/fair_air07"
      nextHref="/fair_air09"
    />
  );
}
