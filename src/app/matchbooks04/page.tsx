import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Exhibitor Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Exhibitor Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Exhibitor Matchbooks gallery (legacy matchbooks05.html → /matchbooks04).
 * Shared MatchbooksHero (1905×826). Nav Page 5.
 * PREVIOUS → /matchbooks03; NEXT → /matchbooks05.
 */
export default function Matchbooks04Page() {
  return (
    <MatchbooksGalleryPage
      title="Exhibitor Matchbooks"
      titleId="matchbooks04-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooks03"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooks05"
      sections={[
        {
          heading: "Minnesota",
          images: [
          {
            src: "/images/matchbooks04/minnesota02.1.jpg",
            width: 142,
            height: 429,
            alt: "Minnesota matchbook",
          },
          {
            src: "/images/matchbooks04/minnesota02.2.jpg",
            width: 142,
            height: 429,
            alt: "Minnesota matchbook",
          }
          ],
        },
        {
          heading: "Chrysler",
          images: [
          {
            src: "/images/matchbooks04/chrysler01.1.jpg",
            width: 200,
            height: 436,
            alt: "Chrysler matchbook",
          },
          {
            src: "/images/matchbooks04/chrysler01.2.jpg",
            width: 200,
            height: 436,
            alt: "Chrysler matchbook",
          },
          {
            src: "/images/matchbooks04/chrysler01.3.jpg",
            width: 200,
            height: 436,
            alt: "Chrysler matchbook",
          }
          ],
        },
        {
          heading: "Hawaii",
          images: [
          {
            src: "/images/matchbooks04/hawaii01.1.jpg",
            width: 199,
            height: 434,
            alt: "Hawaii matchbook",
          },
          {
            src: "/images/matchbooks04/hawaii01.2.jpg",
            width: 199,
            height: 434,
            alt: "Hawaii matchbook",
          },
          {
            src: "/images/matchbooks04/hawaii01.3.jpg",
            width: 199,
            height: 433,
            alt: "Hawaii matchbook",
          }
          ],
        },
        {
          heading: "United States Steel (Unisphere)",
          images: [
          {
            src: "/images/matchbooks04/unisph01.1.jpg",
            width: 179,
            height: 486,
            alt: "United States Steel (Unisphere) matchbook",
          },
          {
            src: "/images/matchbooks04/unisph01.2.jpg",
            width: 179,
            height: 486,
            alt: "United States Steel (Unisphere) matchbook",
          }
          ],
        },
        {
          heading: "Greyhound",
          images: [
          {
            src: "/images/matchbooks04/greyhound02.1.jpg",
            width: 138,
            height: 419,
            alt: "Greyhound matchbook",
          },
          {
            src: "/images/matchbooks04/greyhound02.2.jpg",
            width: 138,
            height: 419,
            alt: "Greyhound matchbook",
          },
          {
            src: "/images/matchbooks04/greyhound02.3.jpg",
            width: 140,
            height: 419,
            alt: "Greyhound matchbook",
          }
          ],
        },
        {
          heading: "Greece",
          images: [
          {
            src: "/images/matchbooks04/greece02.1.jpg",
            width: 140,
            height: 428,
            alt: "Greece matchbook",
          },
          {
            src: "/images/matchbooks04/greece02.2.jpg",
            width: 140,
            height: 428,
            alt: "Greece matchbook",
          }
          ],
        },
        {
          heading: "Hollywood",
          images: [
          {
            src: "/images/matchbooks04/holwod01.1.jpg",
            width: 138,
            height: 424,
            alt: "Hollywood matchbook",
          },
          {
            src: "/images/matchbooks04/holwod01.2.jpg",
            width: 138,
            height: 424,
            alt: "Hollywood matchbook",
          },
          {
            src: "/images/matchbooks04/holwod01.3.jpg",
            width: 139,
            height: 425,
            alt: "Hollywood matchbook",
          }
          ],
        },
        {
          heading: "Africa",
          images: [
          {
            src: "/images/matchbooks04/africa01.1.jpg",
            width: 140,
            height: 433,
            alt: "Africa matchbook",
          },
          {
            src: "/images/matchbooks04/africa01.2.jpg",
            width: 140,
            height: 433,
            alt: "Africa matchbook",
          }
          ],
        },
        {
          heading: "General Electric",
          images: [
          {
            src: "/images/matchbooks04/genele02.1.jpg",
            width: 187,
            height: 420,
            alt: "General Electric matchbook",
          },
          {
            src: "/images/matchbooks04/genele02.2.jpg",
            width: 187,
            height: 420,
            alt: "General Electric matchbook",
          }
          ],
        },
        {
          heading: "India",
          images: [
          {
            src: "/images/matchbooks04/india01.1.jpg",
            width: 147,
            height: 433,
            alt: "India matchbook",
          },
          {
            src: "/images/matchbooks04/india01.2.jpg",
            width: 147,
            height: 433,
            alt: "India matchbook",
          }
          ],
        },
        {
          heading: "Port Authority Heliport (Terrace Club)",
          images: [
          {
            src: "/images/matchbooks04/poraut03.1.jpg",
            width: 141,
            height: 427,
            alt: "Port Authority Heliport (Terrace Club) matchbook",
          },
          {
            src: "/images/matchbooks04/poraut03.2.jpg",
            width: 141,
            height: 427,
            alt: "Port Authority Heliport (Terrace Club) matchbook",
          }
          ],
        },
        {
          heading: "International Plaza (Dinkelacker Beer)",
          images: [
          {
            src: "/images/matchbooks04/intpla03.1.jpg",
            width: 184,
            height: 475,
            alt: "International Plaza (Dinkelacker Beer) matchbook",
          },
          {
            src: "/images/matchbooks04/intpla03.2.jpg",
            width: 184,
            height: 475,
            alt: "International Plaza (Dinkelacker Beer) matchbook",
          },
          {
            src: "/images/matchbooks04/intpla03.3.jpg",
            width: 184,
            height: 473,
            alt: "International Plaza (Dinkelacker Beer) matchbook",
          }
          ],
        },
        {
          heading: "Restaurant of All Nations",
          images: [
          {
            src: "/images/matchbooks04/resallnat01.1.jpg",
            width: 144,
            height: 433,
            alt: "Restaurant of All Nations matchbook",
          },
          {
            src: "/images/matchbooks04/resallnat01.2.jpg",
            width: 144,
            height: 433,
            alt: "Restaurant of All Nations matchbook",
          },
          {
            src: "/images/matchbooks04/resallnat01.3.jpg",
            width: 144,
            height: 434,
            alt: "Restaurant of All Nations matchbook",
          }
          ],
        },
        {
          heading: "Hollywood",
          images: [
          {
            src: "/images/matchbooks04/holwod02.1.jpg",
            width: 139,
            height: 426,
            alt: "Hollywood matchbook",
          },
          {
            src: "/images/matchbooks04/holwod02.2.jpg",
            width: 139,
            height: 426,
            alt: "Hollywood matchbook",
          },
          {
            src: "/images/matchbooks04/holwod02.3.jpg",
            width: 139,
            height: 426,
            alt: "Hollywood matchbook",
          }
          ],
        },
        {
          heading: "Ireland",
          images: [
          {
            src: "/images/matchbooks04/ireland01.1.jpg",
            width: 283,
            height: 431,
            alt: "Ireland matchbook",
          },
          {
            src: "/images/matchbooks04/ireland01.2.jpg",
            width: 283,
            height: 431,
            alt: "Ireland matchbook",
          }
          ],
        },
        {
          heading: "International Plaza (Punjab Export Corp., Ltd.)",
          images: [
          {
            src: "/images/matchbooks04/intpla04.1.jpg",
            width: 200,
            height: 424,
            alt: "International Plaza (Punjab Export Corp., Ltd.) matchbook",
          },
          {
            src: "/images/matchbooks04/intpla04.2.jpg",
            width: 200,
            height: 424,
            alt: "International Plaza (Punjab Export Corp., Ltd.) matchbook",
          },
          {
            src: "/images/matchbooks04/intpla04.3.jpg",
            width: 199,
            height: 427,
            alt: "International Plaza (Punjab Export Corp., Ltd.) matchbook",
          }
          ],
        },
        {
          heading: "World's Fair",
          images: [
          {
            src: "/images/matchbooks04/unisph02.1.jpg",
            width: 139,
            height: 427,
            alt: "World's Fair matchbook",
          },
          {
            src: "/images/matchbooks04/unisph02.2.jpg",
            width: 139,
            height: 427,
            alt: "World's Fair matchbook",
          }
          ],
        },
        {
          heading: "World's Fair",
          images: [
          {
            src: "/images/matchbooks04/unisph04.1.jpg",
            width: 141,
            height: 427,
            alt: "World's Fair matchbook",
          },
          {
            src: "/images/matchbooks04/unisph04.2.jpg",
            width: 141,
            height: 427,
            alt: "World's Fair matchbook",
          }
          ],
        }
      ]}
    />
  );
}
