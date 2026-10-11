import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "The Fair from the Air (model) — See the Fair from the Air — nywf64.com",
  description: "The Fair from the Air (model) aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — The Fair from the Air (model).
 * Page 39 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir39Page() {
  return (
    <FairAirAerialPage
      pageNum={39}
      title="The Fair from the Air (model)"
      photoSrc="/images/fair_air39/aerial38.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={1333}
      photoHeight={1050}
      caption="Featuring the Fair's Official Model in the model room at World's Fair Headquarters."
      previousHref="/fair_air38"
      nextHref="/fair_air40"
    />
  );
}
