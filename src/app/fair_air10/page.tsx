import type { Metadata } from "next";
import { FairAirAerialPage } from "@/components/FairAirAerialPage";

export const metadata: Metadata = {
  title: "Industrial Area — See the Fair from the Air — nywf64.com",
  description: "Industrial Area aerial photograph — See the Fair from the Air at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air — Industrial Area.
 * Page 10 in A–Z explore-menu order (Photograph Index remains Page 1).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairAir10Page() {
  return (
    <FairAirAerialPage
      pageNum={10}
      title="Industrial Area"
      photoSrc="/images/fair_air10/aerial08.jpg"
      photoAlt="Industrial Area"
      photoWidth={1200}
      photoHeight={963}
      caption="Featuring the Pavilions of Japan, Austria, General Cigar, Johnson Wax, Tower of Light, General Electric, Fountains of the Planets and others."
      previousHref="/fair_air09"
      nextHref="/fair_air11"
    />
  );
}
