import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "International & Industrial Areas — See the Fair from the Air — nywf64.com",
  description: "International & Industrial Areas aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — International & Industrial Areas.
 * Page 22 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir22Page() {
  return (
    <FairAirAerialPage
      pageNum={22}
      title="International & Industrial Areas"
      photoSrc="/images/fair_air22/aerial33.jpg"
      photoAlt="International Area"
      photoWidth={1200}
      photoHeight={957}
      caption="Featuring the Singer Bowl and others."
      previousHref="/fair_air21"
      nextHref="/fair_air23"
    />
  );
}
