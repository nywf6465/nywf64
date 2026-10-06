import type { Metadata } from "next";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — DuPont — nywf64.com",
  description:
    "DuPont pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy dupont01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /dupontmap (Industrial Area).
 */
export default function Dupont01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="DuPont"
      titleId="dupont01-title"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupontoverview"
      nextHref="/dupont02"
      guide1964={{
        cover: {
          src: "/images/dupont01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/dupont01/dupontlogo64.gif",
          width: 144,
          height: 71,
          alt: "",
        },
        name: "DU PONT",
        copy: (
          <>
            Show business and science are artfully combined in this big,
            circular pavilion. A musical revue called &quot;Wonderful World of
            Chemistry,&quot; which was written and produced by the Broadway
            composer Michael Brown, is presented simultaneously in two theaters
            by two casts of performers. After the show is over, audiences watch
            a modern-day alchemist perform feats of wizardry through chemistry.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CHEMICAL COMEDY.",
            body: (
              <>
                Bright music and technical tricks (for example, conversations
                and stage business between filmed actors and live ones) help
                make &quot;Wonderful World of Chemistry&quot; a lively show. The
                revue traces in song and dance the evolution of chemistry, from
                ancient Greece to today. It includes an excursion into the world
                of fashion, featuring clothes made of Du Pont fibers and created
                by some of the nation&apos;s top fashion designers.
              </>
            ),
          },
          {
            label: "MOLECULAR MAGIC.",
            body: (
              <>
                In the demonstration following the show, a performer holds a
                piece of red-hot metal with his hand protected only by a thin
                sheet of material; dips a piece of cloth in a dye and pulls it
                out striped; tosses paint on fabric without staining it. In all,
                there are about two dozen demonstrations of startling uses for
                products made by Du Pont.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/dupont01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/dupont01/dupontlogo.gif",
          width: 144,
          height: 71,
          alt: "",
        },
        name: "DU PONT",
        summary: (
          <>
            A lively musical revue, new fashions and some startling
            demonstrations are devoted to progress in chemistry today.
          </>
        ),
        copy: (
          <>
            Inside the big circular pavilion, two casts in two theaters perform
            &quot;The Wonderful World of Chemistry,&quot; a show specially
            written and produced for Du Pont by Broadway composer Michael Brown.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CHEMICAL COMEDY.",
            body: (
              <>
                Live action is combined with tricks on film to trace the history
                of chemistry from ancient Greece to today. Du Pont fibers are
                displayed in clothes created by top designers.
              </>
            ),
          },
          {
            label: "MOLECULAR MAGIC.",
            body: (
              <>
                After the show, to demonstrate the extraordinary properties of
                man-made materials, a performer holds a piece of red-hot metal
                wrapped in a thin chemical film, dips a piece of plain cloth
                into dye and pulls it out striped, and throws paint on a
                synthetic fabric without staining it.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/dupont01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/dupont01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/dupontmap",
      }}
    />
  );
}
