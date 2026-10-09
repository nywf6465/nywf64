import type { Metadata } from "next";
import Link from "next/link";
import { TexasNavChrome } from "@/components/TexasNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Texas Pavilions & Music Hall entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy texas01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Texas01Page() {
  const pavilionName = (
    <>
      TEXAS PAVILIONS
      <br />
      AND MUSIC HALL
    </>
  );

  return (
    <GuidebookSouvenirPage
      heroLabel="Texas Pavilions & Music Hall"
      titleId="texas01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/texasoverview/hero-banner.jpg",
        alt: "Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TexasNavChrome />}
      previousHref="/texasoverview"
      nextHref="/texas02"
      guide1964={{
        cover: {
          src: "/images/texas01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/texas01/texaslogo64.gif",
          width: 144,
          height: 89,
          alt: "",
        },
        name: pavilionName,
        copy: (
          <>
            &quot;Friendship at the Fair&quot; is the theme of an exuberant
            multiple exhibit which as been produced for the state by Dallas
            showman Angus G. Wynne Jr., in association with Compass Fair, Inc.
            The Music hall, offering a lavish - and critically acclaimed -
            musical on a huge stage, has 2,400 seats plus a Champagne Circle of
            24 enclosed boxes. Elsewhere in the theater building are assorted
            cocktail lounges and the Frontier Palace restaurant and bar, sporting
            a facade out of the Old West. Outside are a beer garden, snack bars
            and wandering entertainers.
          </>
        ),
        admission: [
          "Admission: free, except to The Music Hall.",
          "The Music Hall: $2.00 to $4.80 for reserved seats; performances at 3, 7 and 9:30 p.m. daily.",
          "Hours: 10 a.m. to 2 a.m.",
        ],
        highlights: [
          {
            label: "SUDDEN FUN.",
            body: (
              <>
                Surprise is a feature of the entire area. A young man suddenly
                stands up and breaks into song. A girl walking along a path
                bullwhips a cigarette from the mouth of a friend. Two arguing
                waiters bring their feud to a head in a burst of gunfire.
              </>
            ),
          },
          {
            label: '"TO BROADWAY WITH LOVE."',
            body: (
              <>
                This is the title of the 90-minute musical spectacular in The
                Music Hall. Presented by producer George Schaefer, who produced{" "}
                <em>Teahouse of the August Moon</em>, and Morton Da Costa, who
                directed <em>The Music Man</em>, the new show is an anthology
                packed with the moods and music of the American theater from{" "}
                <em>The Black Crook of 1864</em> to recent hits. The show,
                which cost $1,250,000 to stage, has imaginative costumes and
                effects; it was cheered by every Broadway critic when it opened.
              </>
            ),
          },
          {
            label: "BITS OF TEXAS.",
            body: (
              <>
                Among the side attractions are:
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Life on the range.</em> Symbolizing the luxurious care given
                to modern livestock, a real bull is sumptuously stabled in an
                elegant French bedroom.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Art in Texas. </em>An exhibit of home-state paintings is on
                view in the Music Hall.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                Wildest and wooliest of the numerous dining areas is the Frontier
                Palace, where the air is filled with the aroma of chuckwagon beef,
                and girls dance the cancan. There are also Mexico, Tourism and
                New Texas snack bars, snacks with the beer in the Beer Garden,
                and a Shrimp Bar.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/texas01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote: (
          <>
            The Texas Pavilion and Music Hall were open for the 1964 Season. In
            1965 the building housed{" "}
            <Link href="/carniv01">Carnival</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/texas01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/texas01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/texasmap",
      }}
    />
  );
}
