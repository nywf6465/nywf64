import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International & Industrial Areas — See the Fair from the Air — nywf64.com",
  description: "International & Industrial Areas aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International & Industrial Areas.
 * Body from legacy fair_air34.html (Page 34; 1:1 with legacy numbering).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir34Page() {
  return (
    <FairAirAerialPage
      pageNum={34}
      title="International & Industrial Areas"
      photoSrc="/images/fair_air34/aerial33.jpg"
      photoAlt="International & Industrial Areas"
      photoWidth={1200}
      photoHeight={957}
      caption="Featuring the Singer Bowl and others."
      previousHref="/fair_air33"
      nextHref="/fair_air35"
    />
  );
}
