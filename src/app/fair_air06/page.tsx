import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Fair Construction August 6, 1963 — See the Fair from the Air — nywf64.com",
  description: "Fair Construction August 6, 1963 aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Fair Construction August 6, 1963.
 * Page 6 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir06Page() {
  return (
    <FairAirAerialPage
      pageNum={6}
      title="Fair Construction August 6, 1963"
      photoSrc="/images/fair_air06/aerial40.jpg"
      photoAlt="Construction Aerial"
      photoWidth={1200}
      photoHeight={901}
      caption="Featuring an aerial view of the main Fairgrounds Contribution of Kevin Carsh"
      previousHref="/fair_air05"
      nextHref="/fair_air07"
    />
  );
}
