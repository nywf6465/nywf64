import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Venezuela — nywf64.com",
  description:
    "Republic of Venezuela pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela Information Manual page — “manual” standard.
 * Body from legacy veneze02.html. Layout: InformationManualPage (/bell02).
 */
export default function Veneze02Page() {
  return (
    <InformationManualPage
      heroLabel="Venezuela"
      titleId="veneze02-title"
      hero={{
        src: "/images/veneerview/hero-banner.jpg",
        alt: "Venezuela pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<VenezeNavChrome />}
      previousHref="/veneze01"
      overviewHref="/veneerview"
      nextHref="/veneze03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Republic of Venezuela"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVES",
          lines: [
            "Dr. Luis Perez Barreto",
            "Direccion de Turismo",
            "Ministerio de Fomento",
            "Centro Simon Bolivar",
            "Caracas, Venezuela",
            "and",
            "Mr. Roberto Vincentelli",
            "Commissioner General",
            "870 Seventh Avenue",
            "New York, New York, 10019",
            "LT 1-7474",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Bruce Nicholson"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 10, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 22; Lot 14", "International Area"],
        },
        {
          label: "AREA",
          lines: ["20,000 Sq. Ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Edmundo Diquez and",
            "Mr. Oscar Gonzalez",
            "Edifico Guarimba, 5o Piso A",
            "Caracas, Venezuela",
            "and",
            "Stephen Leigh & Assocs., Inc.",
            "4 East 52nd Street",
            "New York 22, New York",
            "EL 5-1010",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Vermilya-Brown Co., Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/veneze02/veneze12.jpg",
        width: 600,
        height: 324,
        alt: "Pavilion of Venezuela",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Pavilion of Venezuela is a simple expression of modern
              Venezuelan architecture. Under the theme &quot;Venezuela--Her
              History and Future&quot;, the exhibit will take visitors on an
              imaginary voyage through time and space, showing the special
              resources with which nautre has endowed Venezuela, and the
              important aspects of this countries development.
            </>
          ),
        },
        {
          body: (
            <>
              The Pavilion is a mounted concrete structure, formed by four
              &quot;Hyperbolic parabolic&quot; umbrellas. The walls, constructed
              of wood, are a composition of planes and volumes, separated by
              openings, which permit the entrance of natural light, and
              contribute to the beauty and enhancement of the structure.
            </>
          ),
        },
        {
          body: (
            <>
              The integration of roof and walls produces a dramatic interior
              which enables the visitor to enjoy the changes in perspectives.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/veneze02/veneze13.jpg",
        width: 600,
        height: 364,
        alt: "The Republic of Venezeula",
        bordered: true,
        title: "The Republic of Venezeula",
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
