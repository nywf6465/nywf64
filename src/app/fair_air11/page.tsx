import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "The Fair from the Air — See the Fair from the Air — nywf64.com",
  description: "The Fair from the Air aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — The Fair from the Air.
 * Body from legacy fair_air11.html (Page 11; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir11Page() {
  return (
    <FairAirAerialPage
      pageNum={11}
      title="The Fair from the Air"
      photoSrc="/images/fair_air11/aerial10.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={1200}
      photoHeight={963}
      caption="With the World's Fair Marina and LaGuardia Airport in the background."
      previousHref="/fair_air10"
      nextHref="/fair_air12"
    />
  );
}
