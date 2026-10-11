import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Fair Construction April 1, 1964 — See the Fair from the Air — nywf64.com",
  description: "Fair Construction April 1, 1964 aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Fair Construction April 1, 1964.
 * Body from legacy fair_air42.html (Page 42; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir42Page() {
  return (
    <FairAirAerialPage
      pageNum={42}
      title="Fair Construction April 1, 1964"
      photoSrc="/images/fair_air42/aerial39.jpg"
      photoAlt="Constructional Aerial"
      photoWidth={1200}
      photoHeight={908}
      caption="Featuring an aerial view of the main Fairgrounds Contribution of Kevin Carsh"
      previousHref="/fair_air41"
      nextHref="/fair_air43"
    />
  );
}
