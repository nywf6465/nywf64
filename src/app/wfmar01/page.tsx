import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WfmarNavChrome } from "@/components/WfmarNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — World's Fair Marina — nywf64.com",
  description:
    "World's Fair Marina entries from the 1964 and 1965 Official Guide Books — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Marina guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy wfmar01.html (two Guide Book columns only; no Souvenir Map column).
 * Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Wfmar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="World's Fair Marina"
      titleId="wfmar01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      subjectNoun="facility"
      hero={{
        src: "/images/wfmaroverview/hero-banner.jpg",
        alt: "World's Fair Marina at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfmarNavChrome />}
      previousHref="/wfmaroverview"
      nextHref="/wfmar02"
      guide1964={{
        cover: {
          src: "/images/wfmar01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wfmar01/wfmar0164.gif",
          width: 144,
          height: 83,
          alt: "",
        },
        name: (
          <>
            WORLD&apos;S FAIR
            <br />
            MARINA
          </>
        ),
        copy: (
          <>
            One of the Fair&apos;s permanent installations, this 800-boat marina
            is one of the largest on the East Coast. It is the port of call for
            boatmen cruising to the Fair, and the temrinal for commercial boat and
            hydrofoil lines from New York City and other nearby points.. Scheduled
            for display is one of New York City&apos;s new jet-powered fireboats.
            Evinrude Motors mantains a mail port and message center for boatmen,
            and Johnson Motors offers information on boating facilities around the
            world. In one building is a display presented by the Olympic Committee
            of the International Yacht Racing Association. the marina has a
            restuarant and coffee shop.
          </>
        ),
        admission: ["Admission: free.", "Restaurant hours: 10 a.m. to 1 a.m."],
      }}
      guide1965={{
        cover: {
          src: "/images/wfmar01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wfmar01/wfmar01.gif",
          width: 144,
          height: 87,
          alt: "",
        },
        name: "WORLD'S FAIR MARINA",
        nameFace: "arial",
        summary: (
          <>
            Fairgoers can watch yachtsmen and small-boat buffs at work, and tour
            a Coast Guard exhibit.
          </>
        ),
        copy: (
          <>
            One of the Fair&apos;s permanent installations, this 800-boat docking
            and mooring facility is among the largest on the East Coast. It also
            serves as a terminal for commercial charter craft and hydrofoils to
            and from New York City.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "SHORE ESTABLISHMENTS.",
            body: (
              <>
                There are shops, a boat lift and restaurant, and displays by the
                U.S. Coast Guard and Evinrude and Johnson Motors. The Coast Guard
                shows radar and radio search equipment in action. Evinrude displays
                the world&apos;s fastest outboard motor and runs a message service
                for yachtsmen. Johnson features charts of North American coastlines
                and inland waterways, displays of motors and a hospitality service.
              </>
            ),
          },
        ],
      }}
    />
  );
}
