import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Central America — nywf64.com",
  description:
    "Central America entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America Information Manual page — “manual” standard.
 * Body from legacy cenamer02.html (no primary photo; SOURCE under FEATURES;
 * secondary produced-photo figure).
 * Layout: InformationManualPage (/bell02).
 */
export default function Cenamer02Page() {
  return (
    <InformationManualPage
      heroLabel="Central America"
      titleId="cenamer02-title"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenamer01"
      overviewHref="/cenameriverview"
      nextHref="/cenamer03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Pavilion of Central America - Panama"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Dr. Pedro Abelardo Delgado",
            "Secretario General",
            "Secretaria Permanente del Tratado",
            "General de Integracion Economica",
            "Centroamericana",
            "Apartado 1237",
            "Guatemala, Centralamerica",
            "and",
            "The Honorable Olga Marshall",
            "Commissioner General",
            "Consul General of Costa Rica",
            "420 Lexington Avenue",
            "New York 17, New York",
            "MU 5-1517",
            "and",
            "The Honorable",
            "Roberto Trigueros Larraondo",
            "Consul General of El Salvador",
            "211 East 43 Street",
            "New York 17, New York",
            "TN 7-0065",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Bruce Nicholson"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 8, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 30; Lot 7", "International Area"],
        },
        {
          label: "AREA",
          lines: ["9,950 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Gaspar Pacheco",
            "c/o Secretaria Permanente del Tratado",
            "General de Integracion Economic",
            "Centroamericana",
            "Apartado 1237",
            "Guatemala, Centralamerica",
            "and",
            "Arq. Federico Morales",
            "Av. Juan Aberle No. 19",
            "San Salvador",
            "El Salvador, Centralamerica",
            "and",
            "Ing. Harold Albert Sumner",
            "Apartado Postal 1021",
            "San Salvador",
            "El Salvador, Centralamerica",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Tradesman Construction Co."],
        },
      ]}
      features={[
        {
          body: (
            <>
              The theme and interior design of the Pavilion presents three
              aspects of Centralamerica and Panama; agriculture, industry and
              commerce. On the front facade of the Pavilion is a mural showing a
              map of the Centralamerican countries with the Pan American Highway
              as well as other regional roads and railroads.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit also features six swivel mountings with 12 enlarged
              photos showing archeological scenes of the countries and pictorial
              exhibits to further tourism.
            </>
          ),
        },
        {
          body: (
            <>
              The first floor features a coffee bar. On the mezzanine is a small
              gift shop. The rear plaza is designed as a show area for the daily
              presentation of folkloric dances.
            </>
          ),
        },
        {
          body: (
            <>
              Pre-Columbian designs and ancient and contemporary art from El
              Salvador, Costa Rica, Guatemala, Honduras, Nicaragua and Panama are
              exhibited on a revolving basis.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/cenamer02/produced-photo.jpg",
        width: 600,
        height: 340,
        alt: "Centralamerica and Panama",
        title: "Centralamerica and Panama",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
