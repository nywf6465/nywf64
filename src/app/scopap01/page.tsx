import type { Metadata } from "next";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Scott Paper — nywf64.com",
  description:
    "Scott Paper pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy scopap01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Scopap01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Scott Paper"
      titleId="scopap01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/scopapoverview/hero-banner.jpg",
        alt: "Scott Paper at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ScopapNavChrome />}
      previousHref="/scopapoverview"
      nextHref="/scopap02"
      guide1964={{
        cover: {
          src: "/images/scopap01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/scopap01/logo-1964.gif",
          width: 144,
          height: 105,
          alt: "",
        },
        name: "SCOTT PAPER",
        copy: (
          <>
            A 15-minute tour through an indoor &quot;Enchanted Forest&quot; -
            complete with bubbling spring, real and artificial trees, and a
            ceiling of stylized leaves - tells the story of paper from woodland
            to home. A separate building has special rest facilities, including a
            lounge and a diaper-changing room. The two other major structures are
            a 50-foot-high decorative tower and a special building set on stilts,
            14 feet off the ground, that houses the exhibit offices and has a
            private lounge. In the landscaped park outside are canopied shelters
            and benches for relaxation.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "The forest comes alive",
            body: (
              <>
                in the tour of the exhibit building. Pictorial displays show how
                trees are grown, cut, and floated to mills; other photographs
                show how they are barked, chipped, pulped and bleached. On a
                large rotating cylinder, words and pictures describe the
                paper-making processes that follow. Another part of the forest is
                devoted to a series of exhibits concerning the company&apos;s
                products.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/scopap01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/scopap01/logo-1965.gif",
          width: 144,
          height: 105,
          alt: "",
        },
        name: "SCOTT PAPER",
        summary: (
          <>
            A tour through an &quot;Enchanted Forest&quot; tells the story of
            paper from woodland to home.
          </>
        ),
        copy: (
          <>
            In a woodland setting with animated forest creatures, displays show
            how trees are grown, cut, floated to mills and made into various
            paper products. A separate building offers rest facilities, including
            a lounge and a diaper-changing room. Outside, a landscaped park has
            canopied shelters and benches for relaxation.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/scopap01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/scopap01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/scopapmap",
      }}
    />
  );
}
