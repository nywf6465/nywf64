import type { Metadata } from "next";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — U.S. Rubber — nywf64.com",
  description:
    "U.S. Rubber entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy usrub01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Usrub01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="U.S. Rubber"
      titleId="usrub01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usruboverview"
      nextHref="/usrub02"
      guide1964={{
        cover: {
          src: "/images/usrub01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/usrub01/usrublogo64.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: "U.S. RUBBER",
        copy: (
          <>
            Visitors riding along the rim of a giant whitewall tire soar 80 feet
            into the air for a spectacular view of the fairgrounds. Twenty-four
            barrel-shaped gondolas that carry four people each move around the
            circumference of the wheel. The tire, which is floodlighted at night,
            stands in a landscaped area; at the entrance to the ride are
            interesting displays of the company&apos;s products.
          </>
        ),
        admission: "Admission: 25 cents",
      }}
      guide1965={{
        cover: {
          src: "/images/usrub01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/usrub01/usrublogo.gif",
          width: 144,
          height: 92,
          alt: "",
        },
        name: "U.S. RUBBER",
        summary: (
          <>
            Visitors soar 80 feet in the air around a giant auto tire for a
            spectacular view of the Fair.
          </>
        ),
        copy: (
          <>
            Twenty-four gondolas seating four people each move around the
            circumference of the wheel. The tire, floodlighted at night, stands
            in a landscaped area.
          </>
        ),
        admission: "Admission: 50 cents.",
      }}
      map={{
        cover: {
          src: "/images/usrub01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/usrub01/trasmlmap.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/usrubmap",
      }}
    />
  );
}
