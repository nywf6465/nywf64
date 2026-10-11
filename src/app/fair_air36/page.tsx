import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "The Fair from the Air — See the Fair from the Air — nywf64.com",
  description: "The Fair from the Air aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — The Fair from the Air.
 * Page 36 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir36Page() {
  return (
    <FairAirAerialPage
      pageNum={36}
      title="The Fair from the Air"
      photoSrc="/images/fair_air36/aerial10.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={1200}
      photoHeight={963}
      caption="With the World's Fair Marina and LaGuardia Airport in the background."
      previousHref="/fair_air35"
      nextHref="/fair_air37"
    />
  );
}
