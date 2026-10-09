import type { Metadata } from "next";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Insurance — nywf64.com",
  description:
    "Continental Insurance pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy conins01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Conins01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Continental Insurance"
      titleId="conins01-title"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/coninsoverview"
      nextHref="/conins02"
      guide1964={{
        cover: {
          src: "/images/conins01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/conins01/coninslogo64.gif",
          width: 118,
          height: 144,
          alt: "",
        },
        name: "CONTINENTAL INSURANCE",
        copy: (
          <>
            The theme of the pavilion is &quot;Great Moments of the American
            Revolution.&quot; The facade of the exhibition building forms a
            striking modern shadow box, which frames an outside projection screen
            for showings of a musical cartoon view of history. On display within
            the building are dioramas, large color transparencies and works of
            art.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "A PARADE OF HEROES.",
            body: (
              <>
                &quot;Cinema &apos;76,&quot; a continuous 30-minute screen show,
                is seen from a viewing platform that holds 200 spectators. In
                cartoon and song, the show tells of Revolutionary War heroes,
                some known to all Americans, some obscure. Among them:
                <br />¶ Sharpshooter Timothy (&quot;Double-barreled&quot;) Murphy
                picked off a British general at the Battle of Saratoga.
                <br />¶ Lady in uniform. Deborah Sampson, fought as a Continental
                soldier.
                <br />¶ Mounted scout Allan McLane gathered intelligence and
                funneled British food into Patriot larders.
                <br />¶ Marblehead fishermen, led by John Glover, successfully
                extricated Washington&apos;s defeated force by boat from the
                Battle of Long Island, and later rowed it to success at Trenton.
                <br />¶ Able drillmaster General Friedrich Wilhelm von Steuben,
                who could swear in four languages, molded an army.
                <br />¶ Commander in Chief George Washington.
              </>
            ),
          },
          {
            label: "BATTLES, MAPS AND PAINTINGS.",
            body: (
              <>
                A Continental soldier (the exhibitor&apos;s familiar trademark)
                stands inside the exhibit building in a color transparency of a
                painting by Tom Lovell. Dioramas show - among other things - the
                winter encampment at Valley Forge; the Battles of Bennington,
                Fort Moultrie and Long Island; and, on a simulated sea, Captain
                John Paul Jones&apos;s Bonhomme Richard , her guns blazing,
                fighting Serapis rail to rail, Also on the exhibit floor:
                <br />¶ Patriotic paintings, commissioned by Continental Insurance
                over the years, are on display.
                <br />¶ Transparencies detail some of the operations of The
                Continental Insurance Companies.
                <br />¶ An illuminated map of the U.S. shows, by push button,
                facts and figures about the entire U.S. or any of the 50 states.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/conins01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/conins01/coninslogo.gif",
          width: 118,
          height: 144,
          alt: "",
        },
        name: "CONTINENTAL INSURANCE",
        summary: (
          <>
            The American Revolution comes alive in a short musical cartoon, in
            dioramas and paintings, and in displays of arms and artifacts.
          </>
        ),
        copy: (
          <>
            Outside the pavilion, a life-sized tableau of The Spirit of &apos;76
            is suspended before a huge flag. On both sides of the viewing platform
            fly 13 battle flags of the Revolution.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "A PARADE OF HEROES.",
            body: (
              <>
                &quot;Cinema &apos;76&quot; is screened continuously in a
                comfortable theater. Cartoons and songs tell of Revolutionary War
                heroes such as Henry Knox, Baron von Steuben, John Glover and his
                Marblehead fishermen (who saved George Washington&apos;s defeated
                force from Long Island and later rowed it to success at Trenton),
                and General Washington himself.
              </>
            ),
          },
          {
            label: "BATTLES AND PAINTINGS.",
            body: (
              <>
                Dioramas show the winter encampment at Valley Forge; the Battles
                of Bennington, Fort Moultrie and Long Island; and John Paul
                Jones&apos;s ship Bonhomme Richard fighting Serapis rail-to-rail.
                Patriotic paintings commissioned by Continental Insurance are also
                on display.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/conins01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/conins01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/coninsmap",
      }}
    />
  );
}
