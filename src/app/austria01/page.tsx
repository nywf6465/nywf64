import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Austria — nywf64.com",
  description:
    "Austria pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy austria01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Austria01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Austria"
      titleId="austria01-title"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austriaoverview"
      nextHref="/austria02"
      guide1964={{
        cover: {
          src: "/images/austria01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/austria01/austria-logo-1964.gif",
          width: 144,
          height: 114,
          alt: "",
        },
        name: "AUSTRIA",
        copy: (
          <>
            Industry, art and social work are featured in this modernistic
            mountain lodge, suspended 15 feet above the ground from three soaring
            A-shaped supports. Beside the pavilion stands a 55-foot abstract
            sculpture in stainless steel; in the area under the building are
            other examples of contemporary sculpture, and a large photographic
            exhibit of one of Austria&apos;s most admired enterprises - SOS
            Children&apos;s Villages, which are settlements for homeless
            children. Within the exhibit hall, the music of Mozart and Strauss is
            heard, and there are brilliant color transparencies of Vienna&apos;s
            baroque splendors and Salzburg&apos;s elegant opera performances.
            Modern Austria is represented by a number of exhibits of the
            nation&apos;s industry, products and handicraft.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "HOMES FOR THE HOMELESS.",
            body: (
              <>
                Pictures show the growth of the SOS Children&apos;s Villages,
                established in Austria in 1949. They now number some 75 all over
                the world. The exhibit reflects the care and education the
                children receive in their communities.
              </>
            ),
          },
          {
            label: "STEEL AND PETIT POINT.",
            body: (
              <>
                Among the industrial exhibits is a detailed model of a steel
                plant featuring a new process for producing high-grade steel
                cheaply. The products displayed include ski equipment, toys and
                petit point handbags.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/austria01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/austria01/austria-logo-1965.gif",
          width: 144,
          height: 114,
          alt: "",
        },
        name: "AUSTRIA",
        nameFace: "arial",
        summary: (
          <>
            Art and industry, culture and tourism are featured in this striking
            pavilion that echoes the lines of an Alpine lodge.
          </>
        ),
        copy: (
          <>
            The pavilion, fashioned from laminated Alpine spruce, is suspended
            15 feet above the ground from three soaring A-shaped supports.
            Examples of contemporary sculpture are dominated by a stainless-steel
            figure 55 feet high that dramatizes postwar Austria&apos;s
            technological contribution to steelmaking. Inside, murals glorify
            Austria&apos;s cultural heritage and natural attractions. Handicrafts
            and industrial products are on display, and a shop offers a wide
            selection of goods.
          </>
        ),
        highlights: [
          {
            label: "RESTAURANT.",
            labelFace: "arial",
            body: (
              <>
                In a typical Viennese coffeehouse, guests enjoy Austrian cuisine,
                including <em>Sachertorte</em> and other specialties of the
                pastry tray.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/austria01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/austria01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/austriamap",
      }}
    />
  );
}
