import type { Metadata } from "next";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Indonesia — nywf64.com",
  description:
    "Indonesia pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Indonesia guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy indones01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy typos preserved: temple gat, move apart, with was, including large collection.
 */
export default function Indones01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Indonesia"
      titleId="indones01-title"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indonesoverview"
      nextHref="/indones02"
      guide1964={{
        cover: {
          src: "/images/indones01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/indones01/indonelogo64.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "INDONESIA",
        copy: (
          <>
            The cultural heritage of this nation of more than 3,000 islands and
            many diverse people is displayed in a graceful pavilion designed by
            R. M. Sudarsono, architect of the Palace of State on Bali. A temple
            gat and a shrine stand outside the main building. Inside, photographs
            illustrate the country&apos;s history, natural resources and current
            social programs, and various aspects of life on the major islands of
            Bali, Java and Sumatra are also shown. There are works of art
            (including large collection of puppets), demonstrations of handicrafts,
            a souvenir shop and a restaurant with entertainment.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "GATEWAYS OF FAITH.",
            body: (
              <>
                The gate leading into the pavilion is a &quot;split temple&quot; -
                an intricately carved sculpture, constructed as if it had been
                sliced down the middle and move apart to enable people to walk
                between the halves. To the right of the gate is a seven-roofed
                shrine with four dragonlike stone lions at its base.
              </>
            ),
          },
          {
            label: "DIP-DYED BATIK.",
            body: (
              <>
                An Indonesian woman draws on cotton cloth with was, showing how
                the colorful patterns of batiks are created. Other craftsmen
                carve wood and stone, and work in silver. Handicrafts are for
                sale in the exhibit area.
              </>
            ),
          },
          {
            label: "PUPPET SHOW.",
            body: (
              <>
                More than a hundred stylized puppets used in religious plays are
                on display. Some are fabricated of elaborately painted leather,
                others are made of wood. There are demonstrations of puppetry in
                the pavilion from time to time.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                Utensils of bamboo and coconut shell help create an Oriental
                atmosphere in the restaurant and cocktail lounge. Specialties
                include sliced abalone in chicken broth. A <i>gamelan</i>, an
                orchestra peculiar to Indonesia, accompanies dancers and singers.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/indones01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/indones01/indonelogo.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "INDONESIA",
        nameFace: "arial",
        summary: (
          <>
            Highlights among many displays is a large theater-restaurant where
            Javanese and Balinese dancers and musicians perform.
          </>
        ),
        copy: (
          <>
            The pavilion, which is based on a sketch by Indonesia&apos;s President
            Sukarno, contains exhibits on the nation&apos;s history, resources and
            social programs. Various aspects of life on Java, Sumatra and Bali
            are shown, and there are demonstrations of puppetry and handicrafts.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "GATEWAY OF FAITH.",
            labelFace: "arial",
            body: (
              <>
                Outside the main building, an intricately carved temple, split
                into halves, serves as a gateway. Nearby is a seven-roofed shrine,
                with four dragonlike stone beasts at its base.
              </>
            ),
          },
          {
            label: "DIP-DYED BATIK.",
            labelFace: "arial",
            body: (
              <>
                An Indonesian woman draws on cotton cloth with wax, showing how
                batik&apos;s colorful patterns are made. Other craftsmen work in
                wood, leather and filigree silver, and a shop sells various
                products of Indonesian workmanship.
              </>
            ),
          },
          {
            label: "PUPPET SHOW.",
            labelFace: "arial",
            body: (
              <>
                Stylized puppets of painted leather and wood are on display, and
                shows are given.
              </>
            ),
          },
          {
            label: "THEATER-RESTAURANT.",
            labelFace: "arial",
            body: (
              <>
                Teak from Indonesia and utensils of bamboo and coconut lend
                atmosphere. A specialty is <i>sate kambing</i> (broiled lamb). Two
                orchestras accompany dancers and singers.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/indones01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/indones01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/indonesmap",
      }}
    />
  );
}
