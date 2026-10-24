import type { Metadata } from "next";
import { MatchbooksGalleryPage } from "@/components/MatchbooksGalleryPage";
import { MatchbooksNavChrome } from "@/components/MatchbooksNavChrome";

export const metadata: Metadata = {
  title: "Souvenir Matchbooks — World’s Fair Matchbook Collection — nywf64.com",
  description:
    "Souvenir Matchbooks from the 1964/1965 New York World’s Fair — nywf64.com Matchbook Collection.",
};

/**
 * Souvenir Matchbooks gallery (legacy matchbooks06.html → /matchbooks05).
 * Shared MatchbooksHero (1905×826). Nav Page 6.
 * PREVIOUS → /matchbooks04; NEXT → /matchbooks08.
 */
export default function Matchbooks05Page() {
  return (
    <MatchbooksGalleryPage
      title="Souvenir Matchbooks"
      titleId="matchbooks05-title"
      nav={<MatchbooksNavChrome />}
      previousHref="/matchbooks04"
      overviewHref="/matchbooksoverview"
      nextHref="/matchbooks08"
      sections={[
        {
          heading: "Monorail",
          images: [
          {
            src: "/images/matchbooks05/amf01.1.jpg",
            width: 187,
            height: 427,
            alt: "Monorail matchbook",
          },
          {
            src: "/images/matchbooks05/amf01.2.jpg",
            width: 187,
            height: 427,
            alt: "Monorail matchbook",
          },
          {
            src: "/images/matchbooks05/amf01.3.jpg",
            width: 187,
            height: 429,
            alt: "Monorail matchbook",
          }
          ],
        },
        {
          heading: "Coca-Cola",
          images: [
          {
            src: "/images/matchbooks05/coke03.1.jpg",
            width: 187,
            height: 425,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks05/coke03.2.jpg",
            width: 187,
            height: 425,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks05/coke03.3.jpg",
            width: 188,
            height: 427,
            alt: "Coca-Cola matchbook",
          }
          ],
        },
        {
          heading: "Fountain of the Planets",
          images: [
          {
            src: "/images/matchbooks05/pooind01.1.jpg",
            width: 187,
            height: 425,
            alt: "Fountain of the Planets matchbook",
          },
          {
            src: "/images/matchbooks05/pooind01.2.jpg",
            width: 187,
            height: 425,
            alt: "Fountain of the Planets matchbook",
          },
          {
            src: "/images/matchbooks05/pooind01.3.jpg",
            width: 187,
            height: 428,
            alt: "Fountain of the Planets matchbook",
          }
          ],
        },
        {
          heading: "Unisphere",
          images: [
          {
            src: "/images/matchbooks05/unisph03.1.jpg",
            width: 186,
            height: 428,
            alt: "Unisphere matchbook",
          },
          {
            src: "/images/matchbooks05/unisph03.2.jpg",
            width: 186,
            height: 428,
            alt: "Unisphere matchbook",
          },
          {
            src: "/images/matchbooks05/unisph03.3.jpg",
            width: 187,
            height: 431,
            alt: "Unisphere matchbook",
          }
          ],
        },
        {
          heading: "United States",
          images: [
          {
            src: "/images/matchbooks05/unista01.1.jpg",
            width: 187,
            height: 427,
            alt: "United States matchbook",
          },
          {
            src: "/images/matchbooks05/unista01.2.jpg",
            width: 187,
            height: 427,
            alt: "United States matchbook",
          },
          {
            src: "/images/matchbooks05/unista01.3.jpg",
            width: 186,
            height: 430,
            alt: "United States matchbook",
          }
          ],
        },
        {
          heading: "Pool of Industry",
          images: [
          {
            src: "/images/matchbooks05/pooind02.1.jpg",
            width: 187,
            height: 428,
            alt: "Pool of Industry matchbook",
          },
          {
            src: "/images/matchbooks05/pooind02.2.jpg",
            width: 187,
            height: 428,
            alt: "Pool of Industry matchbook",
          },
          {
            src: "/images/matchbooks05/pooind02.3.jpg",
            width: 188,
            height: 431,
            alt: "Pool of Industry matchbook",
          }
          ],
        },
        {
          heading: "Shea Stadium",
          images: [
          {
            src: "/images/matchbooks05/sheasta01.1.jpg",
            width: 188,
            height: 427,
            alt: "Shea Stadium matchbook",
          },
          {
            src: "/images/matchbooks05/sheasta01.2.jpg",
            width: 188,
            height: 427,
            alt: "Shea Stadium matchbook",
          },
          {
            src: "/images/matchbooks05/sheasta01.3.jpg",
            width: 189,
            height: 431,
            alt: "Shea Stadium matchbook",
          }
          ],
        },
        {
          heading: "Missouri",
          images: [
          {
            src: "/images/matchbooks05/missouri01.1.jpg",
            width: 188,
            height: 427,
            alt: "Missouri matchbook",
          },
          {
            src: "/images/matchbooks05/missouri01.2.jpg",
            width: 188,
            height: 427,
            alt: "Missouri matchbook",
          },
          {
            src: "/images/matchbooks05/missouri01.3.jpg",
            width: 186,
            height: 430,
            alt: "Missouri matchbook",
          }
          ],
        },
        {
          heading: "Amphitheater",
          images: [
          {
            src: "/images/matchbooks05/amphit01.1.jpg",
            width: 284,
            height: 426,
            alt: "Amphitheater matchbook",
          },
          {
            src: "/images/matchbooks05/amphit01.2.jpg",
            width: 284,
            height: 426,
            alt: "Amphitheater matchbook",
          },
          {
            src: "/images/matchbooks05/amphit01.3.jpg",
            width: 282,
            height: 425,
            alt: "Amphitheater matchbook",
          }
          ],
        },
        {
          heading: "Monorail",
          images: [
          {
            src: "/images/matchbooks05/amf02.1.jpg",
            width: 286,
            height: 426,
            alt: "Monorail matchbook",
          },
          {
            src: "/images/matchbooks05/amf02.2.jpg",
            width: 286,
            height: 426,
            alt: "Monorail matchbook",
          },
          {
            src: "/images/matchbooks05/amf02.3.jpg",
            width: 285,
            height: 422,
            alt: "Monorail matchbook",
          }
          ],
        },
        {
          heading: "Main Mall",
          images: [
          {
            src: "/images/matchbooks05/mainmall01.1.jpg",
            width: 283,
            height: 426,
            alt: "Main Mall matchbook",
          },
          {
            src: "/images/matchbooks05/mainmall01.2.jpg",
            width: 283,
            height: 426,
            alt: "Main Mall matchbook",
          },
          {
            src: "/images/matchbooks05/mainmall01.3.jpg",
            width: 284,
            height: 427,
            alt: "Main Mall matchbook",
          }
          ],
        },
        {
          heading: "Coca-Cola",
          images: [
          {
            src: "/images/matchbooks05/coke04.1.jpg",
            width: 284,
            height: 426,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks05/coke04.2.jpg",
            width: 284,
            height: 426,
            alt: "Coca-Cola matchbook",
          },
          {
            src: "/images/matchbooks05/coke04.3.jpg",
            width: 283,
            height: 431,
            alt: "Coca-Cola matchbook",
          }
          ],
        },
        {
          heading: "Astral Fountain",
          images: [
          {
            src: "/images/matchbooks05/astfou01.1.jpg",
            width: 283,
            height: 427,
            alt: "Astral Fountain matchbook",
          },
          {
            src: "/images/matchbooks05/astfou01.2.jpg",
            width: 283,
            height: 427,
            alt: "Astral Fountain matchbook",
          },
          {
            src: "/images/matchbooks05/astfou01.3.jpg",
            width: 282,
            height: 432,
            alt: "Astral Fountain matchbook",
          }
          ],
        },
        {
          heading: "Souvenir Set",
          images: [
          {
            src: "/images/matchbooks05/matches01.1.jpg",
            width: 600,
            height: 662,
            alt: "Souvenir Set matchbook",
          }
          ],
        }
      ]}
    />
  );
}
