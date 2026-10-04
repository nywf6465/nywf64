import type { Metadata } from "next";
import { BoustrNavChrome } from "@/components/BoustrNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Bourbon Street — nywf64.com",
  description:
    "Bourbon Street photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bourbon Street photograph album — “photographs” standard.
 * Body from legacy boustr03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Boustr03Page() {
  return (
    <PhotographsPage
      heroLabel="Bourbon Street"
      titleId="boustr03-title"
      hero={{
        src: "/images/boustroverview/hero-banner.jpg",
        alt: "Bourbon Street at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<BoustrNavChrome />}
      previousHref="/boustr02"
      overviewHref="/boustroverview"
      nextHref="/boustroverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/boustr03/mainliner-633-34.jpg",
                width: 264,
                height: 400,
                alt: "Five Flags Bistro Bar on Bourbon Street",
              },
              title: "Five Flags Bistro Bar on Bourbon Street",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/boustr03/boustr02.jpg",
                width: 350,
                height: 400,
                alt: "Fairgoers stroll along Bourbon Street at New York World's Fair",
              },
              title:
                "Fairgoers stroll along Bourbon Street at New York World's Fair",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/boustr03/boustr05.jpg",
                width: 400,
                height: 264,
                alt: "Bourbon Street Entrance",
              },
              title: "Bourbon Street Entrance",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/boustr03/boustr06.jpg",
                width: 400,
                height: 261,
                alt: "Bourbon Street",
              },
              title: "Bourbon Street",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/boustr03/boustr09.jpg",
                width: 400,
                height: 392,
                alt: "Bourbon Street",
              },
              title: "Bourbon Street",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/boustr03/boustr08.jpg",
                width: 400,
                height: 255,
                alt: "Dixieland Band",
              },
              title: "Dixieland Band",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/boustr03/boustr07.jpg",
                width: 269,
                height: 400,
                alt: "Dixieland Band",
              },
              title: "Dixieland Band",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/boustr03/boustr01.jpg",
                width: 400,
                height: 273,
                alt: "Bourbon Street's passing paraders and Ted diGeorgia's band",
              },
              title:
                "Bourbon Street's passing paraders stop, sit and listen to Ted diGeorgia and his men dishing out dixie from the bandstand. The Creole-flavored food, drink and music center also boasts an antique fair displaying fine armor.",
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, June 6, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
