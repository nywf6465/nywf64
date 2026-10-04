import type { Metadata } from "next";
import Link from "next/link";
import { AmptheNavChrome } from "@/components/AmptheNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Amphitheatre — nywf64.com",
  description:
    "Amphitheatre entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphitheatre guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy ampthe01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: Wonder World show entry. 1965: status note (Florida Citrus Water Ski Show).
 */
export default function Ampthe01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Amphitheatre"
      titleId="ampthe01-title"
      hero={{
        src: "/images/amptheoverview/hero-banner.jpg",
        alt: "Amphitheatre at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmptheNavChrome />}
      previousHref="/amptheoverview"
      nextHref="/ampthe02"
      guide1964={{
        cover: {
          src: "/images/ampthe01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ampthe01/ampthe-logo.gif",
          width: 144,
          height: 80,
          alt: "",
        },
        name: "AMPHITHEATRE",
        nameFace: "arial",
        copy: (
          <>
            Some of the biggest names in show business have created a
            two-million-dollar extravaganza, &quot;Wonder World,&quot; in the
            only permanent open-air auditorium on the fairgrounds. An
            international cast of 250 includes singers and dancers, swimmers and
            divers, comedians and acrobats; the visual effects range from a giant
            waterfall, which pours 22,000 gallons of water a minute onto the
            stage, to the launching, in a cloud of smoke, of a &quot;lady
            astronaut&quot; in a &quot;moon rocket.&quot;
            <br />
            <br />
            The Amphitheatre, site of Billy Rose&apos;s famous Aquacade at the
            1939 World&apos;s Fair, has been completely refurbished. The new
            production takes place on a turntable 75 feet in diameter, one of the
            largest in the world; in a swimming pool in front of the stage; and
            on moveable platforms that shuttle back and forth over the pool. On
            either side of the stage are acoustical shells for an orchestra and
            choral groups. The show is presented by society bandleader Meyer
            Davis, directed by Leon Leonidoff of Radio City Music Hall, and
            alternately stars Chita Rivera and Gretchen Wyler. The choreographer
            and associate director is Broadway&apos;s Michael Kidd. Jule Styne of
            stage and movie fame wrote the music.
          </>
        ),
        admission: [
          "Admission: unreserved seats, $1.00; reserved section, $2.25; special reserved seats, $350.",
          "Performances: four shows daily. Show lasts 1 1/2 hours.",
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/ampthe01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Amphitheatre &quot;Wonder World&quot; Show appeared in 1964. In
            1965, the Amphitheatre housed the{" "}
            <Link href="/flowatski01">Florida Citrus Water Ski Show</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/ampthe01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/ampthe01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/ampthemap",
      }}
    />
  );
}
