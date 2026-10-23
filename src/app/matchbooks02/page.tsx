import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Exhibitor Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Exhibitor Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Exhibitor Matchbooks gallery (legacy matchbooks03.html → /matchbooks02).
 * Shared MatchbooksHero (1905×826). Nav Page 3 (overview Page 1, matchbooks01 Page 2).
 * PREVIOUS → /matchbooks01; NEXT → /matchbooks03.
 */
export default function Matchbooks02Page() {
  return (
    <MatchbooksGalleryPage
      title="Exhibitor Matchbooks"
      titleId="matchbooks02-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooks01"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooks03"
      sections={[
        {
          heading: "Sweden",
          images: [
          {
            src: "/images/matchbooks02/sweden01.1.jpg",
            width: 165,
            height: 431,
            alt: "Sweden matchbook",
          },
          {
            src: "/images/matchbooks02/sweden01.2.jpg",
            width: 165,
            height: 431,
            alt: "Sweden matchbook",
          },
          {
            src: "/images/matchbooks02/sweden01.3.jpg",
            width: 165,
            height: 427,
            alt: "Sweden matchbook",
          }
          ],
        },
        {
          heading: "Greece",
          images: [
          {
            src: "/images/matchbooks02/greece01.1.jpg",
            width: 188,
            height: 425,
            alt: "Greece matchbook",
          },
          {
            src: "/images/matchbooks02/greece01.2.jpg",
            width: 188,
            height: 425,
            alt: "Greece matchbook",
          },
          {
            src: "/images/matchbooks02/greece01.3.jpg",
            width: 188,
            height: 425,
            alt: "Greece matchbook",
          }
          ],
        },
        {
          heading: "International Plaza (Wienerwald)",
          images: [
          {
            src: "/images/matchbooks02/intpla01.1.jpg",
            width: 189,
            height: 430,
            alt: "International Plaza (Wienerwald) matchbook",
          },
          {
            src: "/images/matchbooks02/intpla01.2.jpg",
            width: 189,
            height: 430,
            alt: "International Plaza (Wienerwald) matchbook",
          },
          {
            src: "/images/matchbooks02/intpla01.3.jpg",
            width: 188,
            height: 431,
            alt: "International Plaza (Wienerwald) matchbook",
          }
          ],
        },
        {
          heading: "American Express",
          images: [
          {
            src: "/images/matchbooks02/amex01.1.jpg",
            width: 140,
            height: 420,
            alt: "American Express matchbook",
          },
          {
            src: "/images/matchbooks02/amex01.2.jpg",
            width: 140,
            height: 420,
            alt: "American Express matchbook",
          }
          ],
        },
        {
          heading: "Transportation & Travel (Allied)",
          images: [
          {
            src: "/images/matchbooks02/trantrav01.1.jpg",
            width: 140,
            height: 427,
            alt: "Transportation & Travel (Allied) matchbook",
          },
          {
            src: "/images/matchbooks02/trantrav01.2.jpg",
            width: 140,
            height: 427,
            alt: "Transportation & Travel (Allied) matchbook",
          }
          ],
        },
        {
          heading: "House of Good Taste",
          images: [
          {
            src: "/images/matchbooks02/hougt01.1.jpg",
            width: 187,
            height: 434,
            alt: "House of Good Taste matchbook",
          },
          {
            src: "/images/matchbooks02/hougt01.2.jpg",
            width: 187,
            height: 434,
            alt: "House of Good Taste matchbook",
          },
          {
            src: "/images/matchbooks02/hougt01.3.jpg",
            width: 187,
            height: 430,
            alt: "House of Good Taste matchbook",
          }
          ],
        },
        {
          heading: "Travelers Insurance",
          images: [
          {
            src: "/images/matchbooks02/travelers01.1.jpg",
            width: 139,
            height: 420,
            alt: "Travelers Insurance matchbook",
          },
          {
            src: "/images/matchbooks02/travelers01.2.jpg",
            width: 139,
            height: 420,
            alt: "Travelers Insurance matchbook",
          }
          ],
        },
        {
          heading: "Coca-Cola",
          images: [
          {
            src: "/images/matchbooks02/coke02.1.jpg",
            width: 141,
            height: 425,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks02/coke02.2.jpg",
            width: 141,
            height: 425,
            alt: "Coca-Cola matchbook",
          }
          ],
        },
        {
          heading: "Polynesia",
          images: [
          {
            src: "/images/matchbooks02/polyne01.1.jpg",
            width: 187,
            height: 432,
            alt: "Polynesia matchbook",
          },
          {
            src: "/images/matchbooks02/polyne01.2.jpg",
            width: 187,
            height: 432,
            alt: "Polynesia matchbook",
          }
          ],
        },
        {
          heading: "Morocco",
          images: [
          {
            src: "/images/matchbooks02/morocco01.1.jpg",
            width: 283,
            height: 426,
            alt: "Morocco matchbook",
          },
          {
            src: "/images/matchbooks02/morocco01.2.jpg",
            width: 283,
            height: 426,
            alt: "Morocco matchbook",
          },
          {
            src: "/images/matchbooks02/morocco01.3.jpg",
            width: 283,
            height: 426,
            alt: "Morocco matchbook",
          }
          ],
        },
        {
          heading: "Louisiana",
          images: [
          {
            src: "/images/matchbooks02/louisiana01.1.jpg",
            width: 200,
            height: 433,
            alt: "Louisiana matchbook",
          },
          {
            src: "/images/matchbooks02/louisiana01.2.jpg",
            width: 200,
            height: 433,
            alt: "Louisiana matchbook",
          },
          {
            src: "/images/matchbooks02/louisiana01.3.jpg",
            width: 200,
            height: 434,
            alt: "Louisiana matchbook",
          }
          ],
        },
        {
          heading: "Tower of Light",
          images: [
          {
            src: "/images/matchbooks02/twrlit01.1.jpg",
            width: 284,
            height: 431,
            alt: "Tower of Light matchbook",
          },
          {
            src: "/images/matchbooks02/twrlit01.2.jpg",
            width: 284,
            height: 431,
            alt: "Tower of Light matchbook",
          }
          ],
        },
        {
          heading: "Greyhound",
          images: [
          {
            src: "/images/matchbooks02/greyhound01.1.jpg",
            width: 139,
            height: 418,
            alt: "Greyhound matchbook",
          },
          {
            src: "/images/matchbooks02/greyhound01.2.jpg",
            width: 139,
            height: 418,
            alt: "Greyhound matchbook",
          },
          {
            src: "/images/matchbooks02/greyhound01.3.jpg",
            width: 140,
            height: 420,
            alt: "Greyhound matchbook",
          }
          ],
        },
        {
          heading: "Schaefer",
          images: [
          {
            src: "/images/matchbooks02/schcen01.1.jpg",
            width: 187,
            height: 427,
            alt: "Schaefer matchbook",
          },
          {
            src: "/images/matchbooks02/schcen01.2.jpg",
            width: 187,
            height: 427,
            alt: "Schaefer matchbook",
          },
          {
            src: "/images/matchbooks02/schcen01.3.jpg",
            width: 187,
            height: 428,
            alt: "Schaefer matchbook",
          }
          ],
        },
        {
          heading: "Japan",
          images: [
          {
            src: "/images/matchbooks02/japan01.1.jpg",
            width: 140,
            height: 428,
            alt: "Japan matchbook",
          },
          {
            src: "/images/matchbooks02/japan01.2.jpg",
            width: 140,
            height: 428,
            alt: "Japan matchbook",
          },
          {
            src: "/images/matchbooks02/japan01.3.jpg",
            width: 139,
            height: 428,
            alt: "Japan matchbook",
          }
          ],
        },
        {
          heading: "Brass Rail Restaurants",
          images: [
          {
            src: "/images/matchbooks02/brassrail01.1.jpg",
            width: 138,
            height: 429,
            alt: "Brass Rail Restaurants matchbook",
          },
          {
            src: "/images/matchbooks02/brassrail01.2.jpg",
            width: 138,
            height: 429,
            alt: "Brass Rail Restaurants matchbook",
          },
          {
            src: "/images/matchbooks02/brassrail01.3.jpg",
            width: 138,
            height: 428,
            alt: "Brass Rail Restaurants matchbook",
          }
          ],
        }
      ]}
    />
  );
}
