import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Fair Construction April 1, 1964 — See the Fair from the Air — nywf64.com",
  description: "Fair Construction April 1, 1964 aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Fair Construction April 1, 1964.
 * Page 5 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir05Page() {
  return (
    <FairAirAerialPage
      pageNum={5}
      title="Fair Construction April 1, 1964"
      photoSrc="/images/fair_air05/aerial39.jpg"
      photoAlt="Construction Aerial"
      photoWidth={1200}
      photoHeight={908}
      caption="Featuring an aerial view of the main Fairgrounds Contribution of Kevin Carsh"
      previousHref="/fair_air04"
      nextHref="/fair_air06"
    />
  );
}
