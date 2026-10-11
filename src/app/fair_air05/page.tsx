import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Transportation Area — See the Fair from the Air — nywf64.com",
  description: "Transportation Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Transportation Area.
 * Body from legacy fair_air05.html (Page 5; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir05Page() {
  return (
    <FairAirAerialPage
      pageNum={5}
      title="Transportation Area"
      photoSrc="/images/fair_air05/aerial04.jpg"
      photoAlt="Transportation Area"
      photoWidth={1200}
      photoHeight={958}
      caption="Featuring the Pavilions of Ford, Eastern Air Lines, US Space Park, Hall of Science (under construction) and others."
      previousHref="/fair_air04"
      nextHref="/fair_air06"
    />
  );
}
