import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Amusement Area — See the Fair from the Air — nywf64.com",
  description: "Amusement Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Amusement Area.
 * Body from legacy fair_air12.html (Page 12; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir12Page() {
  return (
    <FairAirAerialPage
      pageNum={12}
      title="Amusement Area"
      photoSrc="/images/fair_air12/aerial11.jpg"
      photoAlt="Amusement Area"
      photoWidth={1200}
      photoHeight={958}
      caption="Featuring the Pavilions of Florida, AMF, Sana Maria and others."
      previousHref="/fair_air11"
      nextHref="/fair_air13"
    />
  );
}
