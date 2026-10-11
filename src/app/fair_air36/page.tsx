import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Body from legacy fair_air36.html (Page 36; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir36Page() {
  return (
    <FairAirAerialPage
      pageNum={36}
      title="Industrial Area"
      photoSrc="/images/fair_air36/aerial35.jpg"
      photoAlt="Industrial Area"
      photoWidth={719}
      photoHeight={900}
      caption="Featuring the Pavilions of IBM and Equitable. Source: online auction"
      previousHref="/fair_air35"
      nextHref="/fair_air37"
    />
  );
}
