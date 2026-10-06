import type { Metadata } from "next";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Chukin Inn — nywf64.com",
  description:
    "Chun King Inn concession entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn Information Manual page — “manual” standard.
 * Body from legacy chukininn02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (Pago-type, New york) preserved.
 */
export default function Chukininn02Page() {
  return (
    <InformationManualPage
      heroLabel="Chukin Inn"
      titleId="chukininn02-title"
      hero={{
        src: "/images/chukininnoverview/hero-banner.jpg",
        alt: "Chukin Inn at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<ChukininnNavChrome />}
      previousHref="/chukininn01"
      overviewHref="/chukininnoverview"
      nextHref="/chukininn03"
      factsLeft={[
        {
          label: "CONCESSION",
          lines: ["Chun King Inn"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Ray Denslow",
            "The Chun King Corporation",
            "5020 Roosevelt Street",
            "Duluth, Minnesota",
            "218 628-1021",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["January 8, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 57; Lot 3", "Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["40,000 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Stanley J. Shaftel",
            "150-05 Hillside Avenue",
            "Jamaica 32, New york",
            "RE 9-1515",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["East Coast Industrial Building Corporation"],
        },
      ]}
      primaryFigure={{
        src: "/images/chukininn02/line-drawing.jpg",
        width: 600,
        height: 419,
        alt: "Chun King Inn line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Two Pago-type teahouses and a Chinese Restaurant will be set in an
              authentic oriental garden adjoining several small lakes. A 50 foot
              tall pylon will attract visitors to the restaurant. Both indoor and
              outdoor dining will be available. Seven course meals, consisting of
              American-Oriental food specialties, for less than a dollar will be
              served.
            </>
          ),
        },
        {
          body: (
            <>
              Chun King products will be sold at the Brass Rail concessions on the
              Fair site. It is expected that more than 100,000 people will
              &quot;Sample&quot; Chun King food each day.
            </>
          ),
        },
      ]}
    />
  );
}
