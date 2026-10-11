import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Amusement Area — See the Fair from the Air — nywf64.com",
  description: "Amusement Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Amusement Area.
 * Page 4 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir04Page() {
  return (
    <FairAirAerialPage
      pageNum={4}
      title="Amusement Area"
      photoSrc="/images/fair_air04/aerial42.jpg"
      photoAlt="Amusement Area"
      photoWidth={1186}
      photoHeight={946}
      caption="Featuring the Pavilion of the New York State Amphitheater and the Florida Water Ski Show. Source: online auction"
      previousHref="/fair_air03"
      nextHref="/fair_air05"
    />
  );
}
