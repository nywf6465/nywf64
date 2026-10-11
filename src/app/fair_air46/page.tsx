import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Amusement Area — See the Fair from the Air — nywf64.com",
  description: "Amusement Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Amusement Area.
 * Body from legacy fair_air46.html (Page 46; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir46Page() {
  return (
    <FairAirAerialPage
      pageNum={46}
      title="Amusement Area"
      photoSrc="/images/fair_air46/aerial42.jpg"
      photoAlt="Amusement Area"
      photoWidth={1186}
      photoHeight={946}
      caption="Featuring the Pavilion of the New York State Amphitheater and the Florida Water Ski Show. Source: online auction"
      previousHref="/fair_air45"
      nextHref="/fair_airoverview"
    />
  );
}
