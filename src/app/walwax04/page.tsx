import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Walter's International Wax Museum — nywf64.com",
  description:
    "Walter's International Wax Museum photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Walter's International Wax Museum photograph album.
 * Body from legacy walwax04.html (Gallery of Photographs → Photograph Album;
 * Scrap Book banner omitted). Layout: PhotographsPage (/aertow03).
 */
export default function Walwax04Page() {
  return (
    <PhotographsPage
      heroLabel="Walter's International Wax Museum"
      titleId="walwax04-title"
      hero={{
        src: "/images/walwaxoverview/hero-banner.jpg",
        alt: "Walter's International Wax Museum at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<WalwaxNavChrome />}
      previousHref="/walwax03"
      overviewHref="/walwaxoverview"
      nextHref="/walwaxoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/walwax04/S-186DLarge.jpg",
                width: 400,
                height: 346,
                alt: "Artist's rendering of Walters International Wax Museum",
              },
              title: "Artist's rendering of Walters International Wax Museum",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/walwax04/5527.jpg",
                width: 400,
                height: 267,
                alt: "Walters International Wax Museum",
              },
              title: "Walters International Wax Museum",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/walwax04/5615.jpg",
                width: 400,
                height: 267,
                alt: "Cleopatra scene in Walters International Wax Museum",
              },
              title: "Cleopatra scene in Walters International Wax Museum",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/walwax04/633-94.jpg",
                width: 400,
                height: 267,
                alt: "Walters International Wax Museum",
              },
              title: "Walters International Wax Museum",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/walwax04/79079Large.jpg",
                width: 263,
                height: 400,
                alt: "Moses smashes the Ten Commandments inside Walters International Wax Museum",
              },
              title:
                "Moses smashes the Ten Commandments inside Walters International Wax Museum",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide
                  Films
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
