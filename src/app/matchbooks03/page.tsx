import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Exhibitor Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Exhibitor Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Exhibitor Matchbooks gallery (legacy matchbooks04.html → /matchbooks03).
 * Shared MatchbooksHero (1905×826). Nav Page 4.
 * PREVIOUS → /matchbooks02; NEXT → /matchbooks04.
 */
export default function Matchbooks03Page() {
  return (
    <MatchbooksGalleryPage
      title="Exhibitor Matchbooks"
      titleId="matchbooks03-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooks02"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooks04"
      sections={[
        {
          heading: "American Express",
          images: [
          {
            src: "/images/matchbooks03/amex02.1.jpg",
            width: 139,
            height: 417,
            alt: "American Express matchbook",
          },
          {
            src: "/images/matchbooks03/amex02.2.jpg",
            width: 139,
            height: 417,
            alt: "American Express matchbook",
          },
          {
            src: "/images/matchbooks03/amex02.3.jpg",
            width: 139,
            height: 422,
            alt: "American Express matchbook",
          }
          ],
        },
        {
          heading: "General Motors",
          images: [
          {
            src: "/images/matchbooks03/gm01.1.jpg",
            width: 282,
            height: 435,
            alt: "General Motors matchbook",
          },
          {
            src: "/images/matchbooks03/gm01.2.jpg",
            width: 282,
            height: 435,
            alt: "General Motors matchbook",
          }
          ],
        },
        {
          heading: "Wisconsin",
          images: [
          {
            src: "/images/matchbooks03/wisconsin01.1.jpg",
            width: 141,
            height: 429,
            alt: "Wisconsin matchbook",
          },
          {
            src: "/images/matchbooks03/wisconsin01.2.jpg",
            width: 141,
            height: 429,
            alt: "Wisconsin matchbook",
          }
          ],
        },
        {
          heading: "Johnson Wax",
          images: [
          {
            src: "/images/matchbooks03/johwax01.1.jpg",
            width: 175,
            height: 486,
            alt: "Johnson Wax matchbook",
          },
          {
            src: "/images/matchbooks03/johwax01.2.jpg",
            width: 175,
            height: 486,
            alt: "Johnson Wax matchbook",
          }
          ],
        },
        {
          heading: "Better Living Center (Purex)",
          images: [
          {
            src: "/images/matchbooks03/betliv01.1.jpg",
            width: 187,
            height: 419,
            alt: "Better Living Center (Purex) matchbook",
          },
          {
            src: "/images/matchbooks03/betliv01.2.jpg",
            width: 187,
            height: 419,
            alt: "Better Living Center (Purex) matchbook",
          },
          {
            src: "/images/matchbooks03/betliv01.3.jpg",
            width: 188,
            height: 419,
            alt: "Better Living Center (Purex) matchbook",
          }
          ],
        },
        {
          heading: "Republic of Korea",
          images: [
          {
            src: "/images/matchbooks03/korea01.1.jpg",
            width: 282,
            height: 433,
            alt: "Republic of Korea matchbook",
          },
          {
            src: "/images/matchbooks03/korea01.2.jpg",
            width: 282,
            height: 433,
            alt: "Republic of Korea matchbook",
          }
          ],
        },
        {
          heading: "International Plaza (San Miguel Beer)",
          images: [
          {
            src: "/images/matchbooks03/intpla02.1.jpg",
            width: 199,
            height: 433,
            alt: "International Plaza (San Miguel Beer) matchbook",
          },
          {
            src: "/images/matchbooks03/intpla02.2.jpg",
            width: 199,
            height: 433,
            alt: "International Plaza (San Miguel Beer) matchbook",
          }
          ],
        },
        {
          heading: "Texas Pavilions",
          images: [
          {
            src: "/images/matchbooks03/texas01.1.jpg",
            width: 200,
            height: 427,
            alt: "Texas Pavilions matchbook",
          },
          {
            src: "/images/matchbooks03/texas01.2.jpg",
            width: 200,
            height: 427,
            alt: "Texas Pavilions matchbook",
          }
          ],
        },
        {
          heading: "Scott Paper",
          images: [
          {
            src: "/images/matchbooks03/scopap01.1.jpg",
            width: 283,
            height: 429,
            alt: "Scott Paper matchbook",
          },
          {
            src: "/images/matchbooks03/scopap01.2.jpg",
            width: 283,
            height: 429,
            alt: "Scott Paper matchbook",
          }
          ],
        },
        {
          heading: "Indonesia",
          images: [
          {
            src: "/images/matchbooks03/indones01.1.jpg",
            width: 186,
            height: 431,
            alt: "Indonesia matchbook",
          },
          {
            src: "/images/matchbooks03/indones01.2.jpg",
            width: 186,
            height: 431,
            alt: "Indonesia matchbook",
          },
          {
            src: "/images/matchbooks03/indones01.3.jpg",
            width: 185,
            height: 431,
            alt: "Indonesia matchbook",
          }
          ],
        },
        {
          heading: "General Cigar",
          images: [
          {
            src: "/images/matchbooks03/gencig01.1.jpg",
            width: 198,
            height: 427,
            alt: "General Cigar matchbook",
          },
          {
            src: "/images/matchbooks03/gencig01.2.jpg",
            width: 198,
            height: 427,
            alt: "General Cigar matchbook",
          },
          {
            src: "/images/matchbooks03/gencig01.3.jpg",
            width: 198,
            height: 429,
            alt: "General Cigar matchbook",
          }
          ],
        },
        {
          heading: "Simmons",
          images: [
          {
            src: "/images/matchbooks03/simmons01.1.jpg",
            width: 186,
            height: 421,
            alt: "Simmons matchbook",
          },
          {
            src: "/images/matchbooks03/simmons01.2.jpg",
            width: 186,
            height: 421,
            alt: "Simmons matchbook",
          }
          ],
        },
        {
          heading: "Mexico",
          images: [
          {
            src: "/images/matchbooks03/mexico01.1.jpg",
            width: 281,
            height: 424,
            alt: "Mexico matchbook",
          },
          {
            src: "/images/matchbooks03/mexico01.2.jpg",
            width: 281,
            height: 424,
            alt: "Mexico matchbook",
          },
          {
            src: "/images/matchbooks03/mexico01.3.jpg",
            width: 281,
            height: 429,
            alt: "Mexico matchbook",
          }
          ],
        },
        {
          heading: "Guinea",
          images: [
          {
            src: "/images/matchbooks03/guinea01.1.jpg",
            width: 281,
            height: 426,
            alt: "Guinea matchbook",
          },
          {
            src: "/images/matchbooks03/guinea01.2.jpg",
            width: 281,
            height: 426,
            alt: "Guinea matchbook",
          },
          {
            src: "/images/matchbooks03/guinea01.3.jpg",
            width: 281,
            height: 429,
            alt: "Guinea matchbook",
          }
          ],
        },
        {
          heading: "Travelers Insurance",
          images: [
          {
            src: "/images/matchbooks03/travelers02.1.jpg",
            width: 140,
            height: 421,
            alt: "Travelers Insurance matchbook",
          },
          {
            src: "/images/matchbooks03/travelers02.2.jpg",
            width: 140,
            height: 421,
            alt: "Travelers Insurance matchbook",
          }
          ],
        },
        {
          heading: "Brass Rail Restaurants",
          images: [
          {
            src: "/images/matchbooks03/brassrail02.1.jpg",
            width: 139,
            height: 423,
            alt: "Brass Rail Restaurants matchbook",
          },
          {
            src: "/images/matchbooks03/brassrail02.2.jpg",
            width: 139,
            height: 423,
            alt: "Brass Rail Restaurants matchbook",
          },
          {
            src: "/images/matchbooks03/brassrail02.3.jpg",
            width: 140,
            height: 422,
            alt: "Brass Rail Restaurants matchbook",
          }
          ],
        }
      ]}
    />
  );
}
