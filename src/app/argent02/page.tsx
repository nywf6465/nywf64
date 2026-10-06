import type { Metadata } from "next";
import { ArgentNavChrome } from "@/components/ArgentNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Argentina — nywf64.com",
  description:
    "Argentina pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Argentina Information Manual page — “manual” standard.
 * Body from legacy argent02.html. Layout: InformationManualPage (/bell02).
 */
export default function Argent02Page() {
  return (
    <InformationManualPage
      heroLabel="Argentina"
      titleId="argent02-title"
      hero={{
        src: "/images/argentoverview/hero-banner.jpg",
        alt: "Argentina at the 1964/1965 New York World’s Fair",
        width: 1907,
        height: 825,
      }}
      nav={<ArgentNavChrome />}
      previousHref="/argent01"
      overviewHref="/argent01"
      nextHref="/argent03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Republic of Argentina"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Dr. Ignacio M. Monaco",
            "Comarg S.R.L.",
            "Lavalle 1125 - Piso 11, Of. 25",
            "Buenos Aires, Argentina",
            "and",
            "Mr. E. O. Schmied",
            "550 Montgomery Street",
            "Room 910",
            "San Francisco 11, California",
            "415 EX 2-8052",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 24, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 29; Lot 6", "International Area"],
        },
        {
          label: "AREA",
          lines: ["20,408 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Paul K. Y. Chen",
            "343 Lexington Avenue",
            "New York 16, New York",
            "MU 5-0066",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Taylor and Gaskin", "International, Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/argent02/line-drawing.jpg",
        width: 600,
        height: 155,
        alt: "Argentina pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Argentine participation at the Fair, endorsed by the
              Government&apos;s Ministry of Foreign Commerce, reflects her
              expanded interest in worldwide commerce. The two story concrete and
              glass building will highlight the cultural, industrial and tourist
              aspects of the nation through exhibits, and a large native
              restaurant.
            </>
          ),
        },
        {
          body: (
            <>
              An important cuisine feature for Fair visitors will be a large
              wheel rotisserie on which whole steers will be roasted in the
              Argentine manner. Also promised, will be &quot;Empanadas&quot;
              popular meat delicacies of that country. Choice Argentine vintage
              wines will be served from the balcony bar in the pavilion&apos;s
              rotunda.
            </>
          ),
        },
      ]}
    />
  );
}
