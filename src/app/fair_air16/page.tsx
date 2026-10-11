import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International Area — See the Fair from the Air — nywf64.com",
  description: "International Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International Area.
 * Body from legacy fair_air16.html (Page 16; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir16Page() {
  return (
    <FairAirAerialPage
      pageNum={16}
      title="International Area"
      photoSrc="/images/fair_air16/aerial15.jpg"
      photoAlt="International Area"
      photoWidth={1200}
      photoHeight={965}
      caption="Featuring the Pavilions of Japan, UAR, Lebanon, Solar Fountain and others."
      previousHref="/fair_air15"
      nextHref="/fair_air17"
    />
  );
}
