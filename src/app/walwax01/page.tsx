import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Walter's International Wax Museum — nywf64.com",
  description:
    "Walter's International Wax Museum entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const pavilionName = (
  <>
    WALTER&apos;S
    <br />
    INTERNATIONAL
    <br />
    WAX MUSEUM
  </>
);

/**
 * Walter's International Wax Museum guidebook page — Official Guidebook &
 * Souvenir Map Entries. Body from legacy walwax01.html.
 * Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Walwax01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Walter's International Wax Museum"
      titleId="walwax01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/walwaxoverview/hero-banner.jpg",
        alt: "Walter's International Wax Museum at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<WalwaxNavChrome />}
      previousHref="/walwaxoverview"
      nextHref="/walwax02"
      guide1964={{
        cover: {
          src: "/images/walwax01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/walwax01/walwaxlogo64.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: pavilionName,
        copy: (
          <>
            Some 160 authentically dressed lifelike figures, ranging from Lady
            Godiva on her horse to five U.S. Presidents, make up the largest
            collection of full-sized wax statues in the United States. The
            figures, grouped in 30 tableaux valued at two million dollars, are
            taken from art, history, mythology, movies and television. The
            largest scene is a 20-by-30 foot copy of Leonardo da Vinci&apos;s{" "}
            <i>The Last Supper</i>. Other groups include the Court of Napoleon
            III, Cleopatra and Superman and Cyclops.
          </>
        ),
        admission: [
          "Admission: adults, $1.00; children under 12, 50 cents.",
          "Hours: 10 a.m. to midnight.",
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/walwax01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/walwax01/walwaxlogo.gif",
          width: 144,
          height: 72,
          alt: "",
        },
        name: pavilionName,
        nameFace: "arial",
        summary: (
          <>
            Figures in this collection of life-sized images range from Lady
            Godiva to the Beatles.
          </>
        ),
        copy: (
          <>
            The 160-odd wax figures, comprising the largest collection of its
            kind in the United States, are valued at two million dollars. Among
            them are Cleopatra, Superman, five of the last six U.S. Presidents
            and a large representation of <i>The Last Supper</i> by Leonardo da
            Vinci.
          </>
        ),
        admission:
          "Admission: adults, $1.00; children under twelve, 50 cents. Hours: 10 a.m. to midnight.",
      }}
      map={{
        cover: {
          src: "/images/walwax01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/walwax01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/walwaxmap",
      }}
    />
  );
}
