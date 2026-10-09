import type { Metadata } from "next";
import { SwedenNavChrome } from "@/components/SwedenNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Sweden — nywf64.com",
  description:
    "Sweden pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sweden guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy sweden01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Navy title follows legacy: “… Entries”.
 */
export default function Sweden01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Sweden"
      titleId="sweden01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/swedenoverview/hero-banner.jpg",
        alt: "Sweden pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwedenNavChrome />}
      previousHref="/swedenoverview"
      nextHref="/sweden02"
      guide1964={{
        cover: {
          src: "/images/sweden01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sweden01/logo1964.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "SWEDEN",
        copy: (
          <>
            This pavilion, dedicated to the theme of &quot;Creative Sweden,&quot;
            is a testimonial to that nation&apos;s private enterprise. Sponsored
            by leading industries and businesses, it has three main sections: a
            large &quot;Hall of Industry&quot; featuring exhibits of Swedish
            technology and products, a miniature branch of Sweden&apos;s largest
            department store and a restaurant specializing in authentic Swedish
            smorgasbord.
          </>
        ),
        admission: [
          "Admission: free.",
          "Restaurant hours: noon to 10 p.m.",
        ],
        highlights: [
          {
            label: "LIGHTS AND ACTION.",
            body: (
              <>
                In the industrial section a special ceiling display simulates the
                appearance of the Northern Lights. A number of the exhibits show
                fascinating mechanical or electronic devices. In a demonstration
                of high-voltage electricity, voltage is transmitted to copper
                balls, creating an impressive crackling and flashing. A mammoth
                movable-pitch ship propeller operates in its own pool. A
                high-speed machine fills toothpaste tubes. On display for the
                first time is a large model of Sweden&apos;s supersecret new
                fighter plane, the <em>Viggen</em>, or Thunderbolt. One exhibit
                traces telephone design since the 1870s.
              </>
            ),
          },
          {
            label: "WELL-STOCKED STORE.",
            body: (
              <>
                A small branch of the Nordiska Kompaniet department store in
                Stockholm displays and sells hundreds of examples of Swedish
                craftsmanship in crystalware, ceramics, metal, textiles and other
                fields.
              </>
            ),
          },
          {
            label: "SWEDISH AND SAVORY.",
            body: (
              <>
                &quot;Restaurant Sweden&quot; offers a smorgasbord table with a
                selection of up to 40 dishes daily. The Skal Bar features Swedish
                beers, aquavit and other thirstquenchers.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sweden01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sweden01/logo1965.gif",
          width: 144,
          height: 96,
          alt: "",
        },
        name: "SWEDEN",
        summary: (
          <>
            In unusual exhibits, a creative country displays its many skills in
            technology, design and cuisine.
          </>
        ),
        copy: (
          <>
            Featured are a Hall of Industry, a miniature department store and a
            restaurant where authentic smorgasbord is served.
          </>
        ),
        admission: "Admission: free. Restaurant hours: noon-10 p.m.",
        highlights: [
          {
            label: "SOUND AND SIGHT.",
            body: (
              <>
                Swedish technical ingenuity is dramatized in several exhibits: a
                crackling demonstration of high-voltage electrical transmissions;
                a mammoth, movable-pitch ship propeller that operates in its own
                pool; a high-speed machine that fills toothpaste tubes.
              </>
            ),
          },
          {
            label: "DEPARTMENT STORE.",
            body: (
              <>
                A small branch of Stockholm&apos;s Nordiska Kompaniet sells
                Swedish crystal, ceramics, textiles and other wares.
              </>
            ),
          },
          {
            label: "FOOD AND DRINK.",
            body: (
              <>
                &quot;Restaurant Sweden&quot; offers a 40-dish smorgasbord table;
                the Skal Bar serves Swedish beer and aquavit.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/sweden01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sweden01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/swedenmap",
      }}
    />
  );
}
