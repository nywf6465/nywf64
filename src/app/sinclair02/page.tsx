import type { Metadata } from "next";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair Information Manual page — “manual” standard.
 * Body from legacy sinclair02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sinclair02Page() {
  return (
    <InformationManualPage
      heroLabel="Sinclair"
      titleId="sinclair02-title"
      hero={{
        src: "/images/sinclairoverview/hero-banner.jpg",
        alt: "Sinclair Dinoland at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SinclairNavChrome />}
      previousHref="/sinclair01"
      overviewHref="/sinclairoverview"
      nextHref="/sinclair03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ['"Sinclair Dino Land"'],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James R. Tucker",
            "Sinclair Refining Company",
            "600 Fifth Avenue",
            "New York 20, New York",
            "CI 6-3600",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["February 16, 1962"],
        },
        {
          label: "LOCATION",
          lines: ["Block 47; Lot 2", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["34,418 sq. ft."],
        },
      ]}
      factsRight={[
        {
          label: "ARCHITECT",
          lines: [
            "J. Gordon Carr & Associates",
            "80 West 40th Street",
            "New York 18, New York",
            "OX 5-4660",
          ],
        },
        {
          label: "EXHIBIT DESIGNER",
          lines: [
            "Lewis Paul Jonas Studio",
            "R.D. 2",
            "Hudson, New York",
            "518 TL 1-2211",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Rand Construction Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/sinclair02/sincla120.jpg",
        width: 600,
        height: 405,
        alt: 'Sinclair "Dinoland"',
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      secondaryFigure={{
        src: "/images/sinclair02/sincla119.jpg",
        width: 600,
        height: 349,
        alt: "Sinclair Dinoland",
        source:
          "Source: NY World's Fair Publication For Those Who Produced the New York World's Fair 1964-1965",
      }}
      features={[
        {
          body: (
            <>
              The Sinclair Refining Company&apos;s exhibit at the Fair will be a
              completely authentic, full-size re-creation of nine different
              genera of dinosaurs, and a scientific display of life as it
              endured and developed over some 165 million years.
            </>
          ),
        },
        {
          body: (
            <>
              The life-size reproduction will be shown in a natural setting based
              on fossil evidence of plant life exisiting in North America at the
              time in which the dinosaur lived, from a world of primitive plants
              to the world of forests, which came later. Three of the larger
              models will be partially animated to indicate the way the animals
              moved. These replicas of the largest land creature that ever
              existed were being constructed under the guidance of the late Dr.
              Barnum Brown, Curator Emeritus of the American Museum of Natural
              History. His discoveries and writings had earned him the title
              &quot;Mr. Dinosaur&quot;. Currently Dr. John Ostrum noted
              paleontologist of Yale University&apos;s Peabody Museum has been
              appointed as a consultant.
            </>
          ),
        },
        {
          body: (
            <>
              The dinosaurs in the exhibit will be: COELOPHYSIS (See-lo-fy-sis),
              forerunner of the giant dinosaurs, dating back 180 to 230 million
              years ago; two reptiles of a later period, 135 to 180 million years
              ago, BRONTOSAURUS (Bront-o-sawr-us), he&apos;s the largest and best
              known and STEGOSAURUS (Steg-o-sawr-us); The six other reptiles
              dating 63 to 135 million years ago are; TYRANNOSAURUS
              (Tye-ran-o-sawr-us), TRICERATOPS (Tri-ser-at-ops), ANKYLOSAURUS
              (An-kyle-o-sawr-us), CORYTHOSAURUS (Kor-it-o-sawr-us),
              ORNITHOMIMUS (Or-nith-o-my-mus) and TRACHODON (Trak-o-don).
            </>
          ),
        },
        {
          body: (
            <>
              All the dinosaurs are bing constructed by Louis Paul Jonas, noted
              sculptor, whose rare combination of talents - a creative
              imagination and a scientific accuracy - have made him uniquely
              competent to meet the challenging task set before him by Sinclair.
              The molded fiber glass creatures will be made to endure for many
              years and will be available for permanent display after the Fair
              closes.
            </>
          ),
        },
      ]}
    />
  );
}
