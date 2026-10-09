import type { Metadata } from "next";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy sinclair01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Sinclair01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Sinclair"
      titleId="sinclair01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/sinclairoverview/hero-banner.jpg",
        alt: "Sinclair Dinoland at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SinclairNavChrome />}
      previousHref="/sinclairoverview"
      nextHref="/sinclair02"
      guide1964={{
        cover: {
          src: "/images/sinclair01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sinclair01/logo64.gif",
          width: 144,
          height: 90,
          alt: "",
        },
        name: "SINCLAIR",
        copy: (
          <>
            Life as it existed 165 million years ago is authentically and vividly
            re-created in &quot;Dinoland,&quot; a large paleontological display
            bounded by a decorative wall and a partly concealed L-shaped exhibit
            building. Life-sized dinosaur replicas were created by the
            distinguished animal sculptor, Louis Paul Jonas.
          </>
        ),
        admission: ["Admission: free."],
        highlights: [
          {
            label: "DINOSAURS IN MOTION.",
            body: (
              <>
                Nine Fiberglas dinosaurs are displayed, three of them moving
                figures, each set in the terrain and flora of its own geological
                period. Visitors follow a winding path through the garden to meet
                ostrichlike Struthiomimus, 6 feet long, then the ponderous
                Trachodon, 38 feet long and 16 feet high. Tyrannosaurus Rex, a
                meat eater, is shown attacking Triceratops, a plant eater. Nearby
                is the walking fortress, Ankylosaurus, and farther along the
                duck-billed Corythosaurus in its natural habitat, a lagoon. On
                the pavilion roof stands giant Brontosaurus, 27 feet tall and 70
                feet long, its head swinging back and forth as it peers down at
                traffic on the Grand Central Parkway. On the path beyond the
                pavilion stands tiny Ornitholestes, and finally, Stegosaurus with
                a double row of fins and four long spikes on its tail.
              </>
            ),
          },
          {
            label: "THE EVOLVING EARTH.",
            body: (
              <>
                Within the building is a 45-foot-long exhibit with erupting
                volcanoes, flashing lightening and bubbling streams. This display
                shows the earth at various stages of its growth: its birth 4.5
                billion years ago, the appearance of marine life and formation of
                oil 600 million years ago, the early dinosaurs 200 million years
                ago. Large color pictures and dioramas show Sinclair&apos;s
                operations and a view of the company&apos;s role in the future.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sinclair01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sinclair01/logo65.gif",
          width: 144,
          height: 90,
          alt: "",
        },
        name: "SINCLAIR",
        copy: (
          <>
            Life as it existed 165 million years ago is re-created in a display
            of life-sized dinosaurs.
          </>
        ),
        highlights: [
          {
            label: "AGE OF MONSTERS.",
            body: (
              <>
                The Fiberglas dinosaurs, some animated, were created by the
                distinguished animal sculptor, Louis Paul Jonas. They include the
                ostrichlike Struthiomimus and the ponderous 38-foot-long
                Trachodon. The meat-eating Tyranosaurus Rex attacks the
                rhino-like Triceratops, while from the pavilion roof the giant
                Brontosaurus peers at the parkway traffic below.
              </>
            ),
          },
          {
            label: "THE EVOLVING EARTH.",
            body: (
              <>
                Within the building, erupting volcanoes, flashing lightning and
                bubbling streams show what the earth was like at several stages
                of its growth starting with its birth 4.5 billion years ago.
                Sinclair&apos;s own operations and future plans are depicted in
                color pictures and dioramas.
              </>
            ),
          },
        ],
        admission: ["Admission: free."],
      }}
      map={{
        cover: {
          src: "/images/sinclair01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sinclair01/transportation-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/sinclairmap",
      }}
    />
  );
}
