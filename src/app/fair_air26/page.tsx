import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Page 26 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir26Page() {
  return (
    <FairAirAerialPage
      pageNum={26}
      title="International Area"
      photoSrc="/images/fair_air26/aerial37.jpg"
      photoAlt="The Fair from the Air"
      photoWidth={1048}
      photoHeight={1302}
      caption="Featuring the Pavilions of France, Sweden, Astral Fountain, and others. Source: online auction"
      previousHref="/fair_air25"
      nextHref="/fair_air27"
    />
  );
}
