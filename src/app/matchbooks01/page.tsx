import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Exhibitor Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Exhibitor Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Exhibitor Matchbooks gallery (legacy matchbooks02.html → /matchbooks01).
 * Shared MatchbooksHero (1905×826). Nav Page 2 (overview is Page 1).
 * PREVIOUS → /matchbooksoverview; NEXT → /matchbooks02.
 */
export default function Matchbooks01Page() {
  return (
    <MatchbooksGalleryPage
      title="Exhibitor Matchbooks"
      titleId="matchbooks01-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooksoverview"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooks02"
      sections={[
        {
          heading: "The Caribbean",
          images: [
          {
            src: "/images/matchbooks01/caribb01.1.jpg",
            width: 188,
            height: 426,
            alt: "The Caribbean matchbook",
          },
          {
            src: "/images/matchbooks01/caribb01.2.jpg",
            width: 188,
            height: 426,
            alt: "The Caribbean matchbook",
          }
          ],
        },
        {
          heading: "Parker Pen",
          images: [
          {
            src: "/images/matchbooks01/parker01.1.jpg",
            width: 187,
            height: 419,
            alt: "Parker Pen matchbook",
          },
          {
            src: "/images/matchbooks01/parker01.2.jpg",
            width: 187,
            height: 419,
            alt: "Parker Pen matchbook",
          }
          ],
        },
        {
          heading: "General Electric",
          images: [
          {
            src: "/images/matchbooks01/genele01.1.jpg",
            width: 187,
            height: 430,
            alt: "General Electric matchbook",
          },
          {
            src: "/images/matchbooks01/genele01.2.jpg",
            width: 187,
            height: 430,
            alt: "General Electric matchbook",
          }
          ],
        },
        {
          heading: "Coca-Cola",
          images: [
          {
            src: "/images/matchbooks01/coke01.1.jpg",
            width: 199,
            height: 428,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks01/coke01.2.jpg",
            width: 199,
            height: 428,
            alt: "Coca-Cola matchbook",
          }
          ],
        },
        {
          heading: "Festival of Gas '64",
          images: [
          {
            src: "/images/matchbooks01/fesgas02.1.jpg",
            width: 187,
            height: 433,
            alt: "Festival of Gas '64 matchbook",
          },
          {
            src: "/images/matchbooks01/fesgas02.2.jpg",
            width: 187,
            height: 433,
            alt: "Festival of Gas '64 matchbook",
          },
          {
            src: "/images/matchbooks01/fesgas02.3.jpg",
            width: 187,
            height: 433,
            alt: "Festival of Gas '64 matchbook",
          }
          ],
        },
        {
          heading: "Festival of Gas '65",
          images: [
          {
            src: "/images/matchbooks01/fesgas01.1.jpg",
            width: 189,
            height: 432,
            alt: "Festival of Gas '65 matchbook",
          },
          {
            src: "/images/matchbooks01/fesgas01.2.jpg",
            width: 189,
            height: 432,
            alt: "Festival of Gas '65 matchbook",
          },
          {
            src: "/images/matchbooks01/fesgas01.3.jpg",
            width: 187,
            height: 430,
            alt: "Festival of Gas '65 matchbook",
          }
          ],
        },
        {
          heading: "Switzerland",
          images: [
          {
            src: "/images/matchbooks01/switz01.2.jpg",
            width: 139,
            height: 431,
            alt: "Switzerland matchbook",
          },
          {
            src: "/images/matchbooks01/switz01.1.jpg",
            width: 139,
            height: 431,
            alt: "Switzerland matchbook",
          }
          ],
        },
        {
          heading: "Ford",
          images: [
          {
            src: "/images/matchbooks01/ford01.1.jpg",
            width: 187,
            height: 425,
            alt: "Ford matchbook",
          },
          {
            src: "/images/matchbooks01/ford01.2.jpg",
            width: 187,
            height: 425,
            alt: "Ford matchbook",
          },
          {
            src: "/images/matchbooks01/ford01.3.jpg",
            width: 185,
            height: 423,
            alt: "Ford matchbook",
          }
          ],
        },
        {
          heading: "Minnesota",
          images: [
          {
            src: "/images/matchbooks01/minnesota01.1.jpg",
            width: 187,
            height: 427,
            alt: "Minnesota matchbook",
          },
          {
            src: "/images/matchbooks01/minnesota01.2.jpg",
            width: 187,
            height: 427,
            alt: "Minnesota matchbook",
          },
          {
            src: "/images/matchbooks01/minnesota01.3.jpg",
            width: 187,
            height: 428,
            alt: "Minnesota matchbook",
          }
          ],
        },
        {
          heading: "Eastman Kodak",
          images: [
          {
            src: "/images/matchbooks01/easkod01.1.jpg",
            width: 198,
            height: 435,
            alt: "Eastman Kodak matchbook",
          },
          {
            src: "/images/matchbooks01/easkod01.2.jpg",
            width: 198,
            height: 435,
            alt: "Eastman Kodak matchbook",
          }
          ],
        },
        {
          heading: "U.S. Rubber",
          images: [
          {
            src: "/images/matchbooks01/usrub01.1.jpg",
            width: 139,
            height: 419,
            alt: "U.S. Rubber matchbook",
          },
          {
            src: "/images/matchbooks01/usrub01.2.jpg",
            width: 139,
            height: 419,
            alt: "U.S. Rubber matchbook",
          }
          ],
        },
        {
          heading: "Port Authority Heliport",
          images: [
          {
            src: "/images/matchbooks01/poraut01.1.jpg",
            width: 139,
            height: 430,
            alt: "Port Authority Heliport matchbook",
          },
          {
            src: "/images/matchbooks01/poraut01.2.jpg",
            width: 139,
            height: 430,
            alt: "Port Authority Heliport matchbook",
          },
          {
            src: "/images/matchbooks01/poraut01.3.jpg",
            width: 140,
            height: 431,
            alt: "Port Authority Heliport matchbook",
          }
          ],
        },
        {
          heading: "Port Authority Heliport",
          images: [
          {
            src: "/images/matchbooks01/poraut02.1.jpg",
            width: 140,
            height: 426,
            alt: "Port Authority Heliport matchbook",
          },
          {
            src: "/images/matchbooks01/poraut02.2.jpg",
            width: 140,
            height: 426,
            alt: "Port Authority Heliport matchbook",
          },
          {
            src: "/images/matchbooks01/poraut02.3.jpg",
            width: 139,
            height: 426,
            alt: "Port Authority Heliport matchbook",
          }
          ],
        },
        {
          heading: "Long Island Rail Road",
          images: [
          {
            src: "/images/matchbooks01/lirr01.1.jpg",
            width: 139,
            height: 426,
            alt: "Long Island Rail Road matchbook",
          },
          {
            src: "/images/matchbooks01/lirr01.2.jpg",
            width: 139,
            height: 426,
            alt: "Long Island Rail Road matchbook",
          },
          {
            src: "/images/matchbooks01/lirr01.3.jpg",
            width: 140,
            height: 429,
            alt: "Long Island Rail Road matchbook",
          }
          ],
        },
        {
          heading: "Hong Kong",
          images: [
          {
            src: "/images/matchbooks01/honkon01.1.jpg",
            width: 199,
            height: 430,
            alt: "Hong Kong matchbook",
          },
          {
            src: "/images/matchbooks01/honkon01.2.jpg",
            width: 199,
            height: 430,
            alt: "Hong Kong matchbook",
          },
          {
            src: "/images/matchbooks01/honkon01.3.jpg",
            width: 198,
            height: 433,
            alt: "Hong Kong matchbook",
          }
          ],
        },
        {
          heading: "Venezuela",
          images: [
          {
            src: "/images/matchbooks01/venez01.1.jpg",
            width: 187,
            height: 429,
            alt: "Venezuela matchbook",
          },
          {
            src: "/images/matchbooks01/venez01.2.jpg",
            width: 187,
            height: 429,
            alt: "Venezuela matchbook",
          },
          {
            src: "/images/matchbooks01/venez01.3.jpg",
            width: 187,
            height: 429,
            alt: "Venezuela matchbook",
          }
          ],
        }
      ]}
    />
  );
}
