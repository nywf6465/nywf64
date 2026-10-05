import type { Metadata } from "next";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — China — nywf64.com",
  description:
    "Republic of China pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy china01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /chinamap (International Area).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function China01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="China"
      titleId="china01-title"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/chinaoverview"
      nextHref="/china02"
      guide1964={{
        cover: {
          src: "/images/china01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/china01/logo1964.gif",
          width: 144,
          height: 128,
          alt: "",
        },
        name: "REPUBLIC OF CHINA",
        copy: (
          <>
            The opulent red and gold pavilion is a reproduction of a tradtional
            imperial palace - the first of its kind which has ever been erected
            in the Western hemisphere. Within the structure are exhibits of
            ancient and modern Chinese culture, and many rare and beautiful art
            objects: bronzes, porcelains, jades, silks and carvings in ivory,
            wood and stone. Taiwan&apos;s scenery, its land reform and industry
            are pictured. Some of the objects are in a museum.
          </>
        ),
        admission: "Admission: free to pavilion; 25 cents to museum.",
        highlights: [
          {
            label: "IMPERIAL PALACE.",
            body: (
              <>
                All the components of the pavilion except its structural steel
                were handmade in Taiwan and are in the traditional of imperial
                architecture. These include painted wall and ceiling panels, roof
                tiles and ceremonial gate.
              </>
            ),
          },
          {
            label: "DOMESTIC CULTURE.",
            body: (
              <>
                On the second floor is a reproduction of three Chinese rooms,
                with inlaid wood tables, embroidered cushions, musical
                instruments and so forth.
              </>
            ),
          },
          {
            label: "ANCIENT ART.",
            body: (
              <>
                Most precious among the many richly carved objects in the
                third-floor museum is a 15-inch-high stone monster, with the head
                of a tiger and a semihuman body, perfectly preserved from the Yin
                Dynasty (1384-1111 B.C.). Among the bronzes are a wine cup from
                the same era, and a bell dating from 1122-250 B.C. Other features
                are a jade incense burner and a rhinoceros horn cup carved with
                dragons.
              </>
            ),
          },
          {
            label: "THE BEGINNINGS OF WRITING.",
            body: (
              <>
                A display of calligraphy includes a tortoise shell which was
                inscribed 3,000 years ago with one of man&apos;s earliest written
                languages.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/china01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/china01/logo1965.gif",
          width: 144,
          height: 128,
          alt: "",
        },
        name: "REPUBLIC OF CHINA",
        nameFace: "arial",
        summary: (
          <>
            Ancient bronzes, porcelain and ivory carvings are among the rare art
            objects shown in the replica of an emperor&apos;s palace.
          </>
        ),
        copy: (
          <>
            The opulent red and gold building, constructed in Taiwan and shipped
            in pieces to the Fair, also houses modern Chinese products, a gift
            shop and a restaurant.
          </>
        ),
        admission: "Admission: free to the pavilion; 25 cents to the museum.",
        highlights: [
          {
            label: "ANCIENT CULTURE.",
            body: (
              <>
                On display in the pavilion&apos;s museum is a small stone figure
                with a tiger&apos;s head and a semihuman body, carved more than
                3,000 years ago; a bronze wine cup of the same period; and an
                ancient jade incense burner.
              </>
            ),
          },
          {
            label: "WRITING BEGINS.",
            body: (
              <>
                A display on the evolution of calligraphy begins with a tortoise
                shell inscribed a thousand years before the birth of Christ.
              </>
            ),
          },
          {
            label: "TAIWAN TODAY.",
            body: (
              <>
                Displays of modern farm and industrial products illustrate recent
                progress on the island, which boasts one of Asia&apos;s most
                advanced economics.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: <>The cuisine includes the standard Chinese dishes.</>,
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/china01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/china01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/chinamap",
      }}
    />
  );
}
