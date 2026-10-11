import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Fair Construction July 30, 1963 — See the Fair from the Air — nywf64.com",
  description: "Fair Construction July 30, 1963 aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Fair Construction July 30, 1963.
 * Page 7 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir07Page() {
  return (
    <FairAirAerialPage
      pageNum={7}
      title="Fair Construction July 30, 1963"
      photoSrc="/images/fair_air07/aerial41.jpg"
      photoAlt="Construction Aerial"
      photoWidth={1200}
      photoHeight={852}
      caption="Featuring an aerial view of the main Fairgrounds Contribution of Kevin Carsh"
      previousHref="/fair_air06"
      nextHref="/fair_air08"
    />
  );
}
