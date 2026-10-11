import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Page 21 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir21Page() {
  return (
    <FairAirAerialPage
      pageNum={21}
      title="Industrial Area"
      photoSrc="/images/fair_air21/aerial43.jpg"
      photoAlt="Industrial Area"
      photoWidth={1186}
      photoHeight={952}
      caption="Featuring the Pavilion of The Pavilion."
      previousHref="/fair_air20"
      nextHref="/fair_air22"
    />
  );
}
