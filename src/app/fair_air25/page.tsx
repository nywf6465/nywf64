import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "The Fair from the Air — See the Fair from the Air — nywf64.com",
  description: "The Fair from the Air aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — The Fair from the Air.
 * Body from legacy fair_air25.html (Page 25; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir25Page() {
  return (
    <FairAirAerialPage
      pageNum={25}
      title="The Fair from the Air"
      photoSrc="/images/fair_air25/aerial21.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={3409}
      photoHeight={2217}
      caption="Featuring a high altitude aerial view of the Fairgrounds"
      previousHref="/fair_air24"
      nextHref="/fair_air26"
    />
  );
}
