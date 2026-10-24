import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Advertising Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Advertising Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Advertising Matchbooks gallery (legacy matchbooks07.html → /matchbooks08).
 * Shared MatchbooksHero (1905×826). Nav Page 7.
 * PREVIOUS → /matchbooks05; NEXT → /matchbooksoverview (legacy more → matchbooks01).
 */
export default function Matchbooks08Page() {
  return (
    <MatchbooksGalleryPage
      title="Advertising Matchbooks"
      titleId="matchbooks08-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooks05"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooksoverview"
      sections={[
        {
          heading: "Dental Society of the State of New York",
          images: [
          {
            src: "/images/matchbooks08/dental01.1.jpg",
            width: 139,
            height: 420,
            alt: "Dental Society of the State of New York matchbook",
          },
          {
            src: "/images/matchbooks08/dental01.2.jpg",
            width: 139,
            height: 420,
            alt: "Dental Society of the State of New York matchbook",
          }
          ],
        },
        {
          heading: "Harmonia Savings Bank",
          images: [
          {
            src: "/images/matchbooks08/harmonia01.1.jpg",
            width: 187,
            height: 427,
            alt: "Harmonia Savings Bank matchbook",
          },
          {
            src: "/images/matchbooks08/harmonia01.2.jpg",
            width: 187,
            height: 427,
            alt: "Harmonia Savings Bank matchbook",
          },
          {
            src: "/images/matchbooks08/harmonia01.3.jpg",
            width: 187,
            height: 426,
            alt: "Harmonia Savings Bank matchbook",
          }
          ],
        },
        {
          heading: "Rutland County Bank",
          images: [
          {
            src: "/images/matchbooks08/rutland01.1.jpg",
            width: 140,
            height: 427,
            alt: "Rutland County Bank matchbook",
          },
          {
            src: "/images/matchbooks08/rutland01.2.jpg",
            width: 140,
            height: 427,
            alt: "Rutland County Bank matchbook",
          },
          {
            src: "/images/matchbooks08/rutland01.3.jpg",
            width: 139,
            height: 425,
            alt: "Rutland County Bank matchbook",
          }
          ],
        },
        {
          heading: "American Airlines",
          images: [
          {
            src: "/images/matchbooks08/aa01.1.jpg",
            width: 138,
            height: 420,
            alt: "American Airlines matchbook",
          },
          {
            src: "/images/matchbooks08/aa01.2.jpg",
            width: 138,
            height: 420,
            alt: "American Airlines matchbook",
          },
          {
            src: "/images/matchbooks08/aa01.3.jpg",
            width: 138,
            height: 419,
            alt: "American Airlines matchbook",
          }
          ],
        },
        {
          heading: "American Bank",
          images: [
          {
            src: "/images/matchbooks08/ambank01.1.jpg",
            width: 139,
            height: 429,
            alt: "American Bank matchbook",
          },
          {
            src: "/images/matchbooks08/ambank01.2.jpg",
            width: 139,
            height: 429,
            alt: "American Bank matchbook",
          },
          {
            src: "/images/matchbooks08/ambank01.3.jpg",
            width: 139,
            height: 427,
            alt: "American Bank matchbook",
          }
          ],
        },
        {
          heading: "General Electric",
          images: [
          {
            src: "/images/matchbooks08/genele03.1.jpg",
            width: 187,
            height: 424,
            alt: "General Electric matchbook",
          },
          {
            src: "/images/matchbooks08/genele03.2.jpg",
            width: 187,
            height: 424,
            alt: "General Electric matchbook",
          },
          {
            src: "/images/matchbooks08/genele03.3.jpg",
            width: 188,
            height: 428,
            alt: "General Electric matchbook",
          }
          ],
        }
      ]}
    />
  );
}
