import type { Metadata } from "next";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Korea, Republic of — nywf64.com",
  description:
    "Korea, Republic of pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Korea guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy korea01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Korea01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Korea, Republic of"
      titleId="korea01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/koreaoverview/hero-banner.jpg",
        alt: "Korea, Republic of pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<KoreaNavChrome />}
      previousHref="/koreaoverview"
      nextHref="/korea02"
      guide1964={{
        cover: {
          src: "/images/korea01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/korea01/korealogo64.gif",
          width: 144,
          height: 68,
          alt: "",
        },
        name: "REPUBLIC OF KOREA",
        copy: (
          <>
            An Oriental teahouse, with traditional peaked wooden roof, is linked
            with a concrete pavilion of free-flowing contemporary lines, linking
            the Korea of yesterday and today. Within the pavilion, ancient art
            and folk dances are on view along with products for sale from South
            Korea&apos;s rebuilt industries. In the teahouse, waitresses in
            flowing silk robes serve delicacies from the nation&apos;s
            2,000-year-old cuisine.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "A SCULPTURED WELCOME.",
            body: (
              <>
                Above the entrance to the area is a contemporary wood sculpture
                suggesting old Korean calligraphy. Inside the main building,
                grasscloth, silk and other fabrics from modern Korea are
                displayed among paintings, carvings and ornamental screens many
                centuries old. Handicrafts on sale include dolls in native
                dress, brass and lacquer ware and embroidered silks. Guides
                also take orders for 800 listed products.
              </>
            ),
          },
          {
            label: "TOWER OF TREASURES.",
            body: (
              <>
                Standing in between the two buildings is a replica of the Tabo
                Pagoda, or Tower of Many Treasures. Built in Kyongju,
                Korea&apos;s capital during its Golden Age, the Sixth Century
                pagoda is considered a masterpiece of Oriental carved
                stonemasonry.
              </>
            ),
          },
          {
            label: "THE NATION'S CULTURE.",
            body: (
              <>
                Films and slides show the art and life of contemporary Korea.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                The teahouse serves individual dishes or complete meals. One of
                the specialties is <i>Kimchi</i>, a mixture of spiced and
                pickled vegetables which has been seasoned underground in huge
                jars. Costumed entertainers offer folk dances.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/korea01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/korea01/korealogo.gif",
          width: 144,
          height: 68,
          alt: "",
        },
        name: "REPUBLIC OF KOREA",
        nameFace: "arial",
        summary: (
          <>
            A traditional teahouse and a modern pavilion are settings for
            exhibits that link the Korea of yesterday and today.
          </>
        ),
        copy: (
          <>
            The pavilion houses products of Korea&apos;s rebuilt industries and
            displays of the nation&apos;s artistic and cultural past. Waitresses
            dressed in flowing silk robes serve the delicacies of a cuisine that
            dates back more than 2,000 years.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "ART AND INDUSTRY.",
            labelFace: "arial",
            body: (
              <>
                Paintings and ornamental screens are displayed among silk
                fabrics. Films depict Korea&apos;s industrial and cultural
                achievements, and a shop sells dolls, silks and brassware.
              </>
            ),
          },
          {
            label: "DANCING DRUMMERS.",
            labelFace: "arial",
            body: (
              <>
                Among various folk dances presented is a number in which girls
                tap on drums while executing intricate steps.
              </>
            ),
          },
          {
            label: "TOWER OF TREASURES.",
            labelFace: "arial",
            body: (
              <>
                Between the two buildings stands a replica of a Sixth Century
                pagoda known as the Tower of Many Treasures.
              </>
            ),
          },
          {
            label: "TEAHOUSE.",
            labelFace: "arial",
            body: (
              <>
                Individual dishes and complete meals are served. A specialty is{" "}
                <i>Kimchi</i>, a mixture of spiced and pickled vegetables.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/korea01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/korea01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/koreamap",
      }}
    />
  );
}
