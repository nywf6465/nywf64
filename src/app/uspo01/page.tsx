import type { Metadata } from "next";
import { UspoNavChrome } from "@/components/UspoNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — U.S. Post Office — nywf64.com",
  description:
    "U.S. Post Office entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Post Office guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy uspo01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Uspo01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="U.S. Post Office"
      titleId="uspo01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/uspooverview/hero-banner.jpg",
        alt: "U.S. Post Office at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UspoNavChrome />}
      previousHref="/uspooverview"
      nextHref="/uspo02"
      guide1964={{
        cover: {
          src: "/images/uspo01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/uspo01/uspologo64.gif",
          width: 144,
          height: 61,
          alt: "",
        },
        name: "U.S. POST OFFICE",
        copy: (
          <>
            The nation&apos;s most mechanized mail service is in operation in a
            purely functional building put up by the Fair, and the public is
            invited to watch. A multitude of new sorting and handling machines
            enables the Post Office to deliver twice-a-day, six-day-a-week mail
            to all Fair exhibitors. A nine-foot high ramp leads visitors
            through the working area, where they may watch the machines in
            operation while a recorded narration explains what is going on below.
            A museum of colorful international mailboxes is on display outside.
          </>
        ),
        admission: "Admission: free. Open daily.",
      }}
      guide1965={{
        cover: {
          src: "/images/uspo01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/uspo01/uspologo.gif",
          width: 144,
          height: 61,
          alt: "",
        },
        name: "U.S. POST OFFICE",
        nameFace: "arial",
        summary: (
          <>
            Visitors climb a ramp to see one of America&apos;s most mechanized Post
            Offices in full operation.
          </>
        ),
        copy: (
          <>
            In this highly functional building, advanced sorting and handling
            machines process mail for twice-a-day delivery to all Fair exhibitors.
            Visitors hear a recorded explanation of the operations. Colorful
            mailboxes from many nations are on display outside.
          </>
        ),
        admission: "Admission: free. Open daily.",
      }}
      map={{
        cover: {
          src: "/images/uspo01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/uspo01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/uspomap",
      }}
    />
  );
}
