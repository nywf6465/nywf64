import type { Metadata } from "next";
import { TwothoNavChrome } from "@/components/TwothoNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Two Thousand Tribes — nywf64.com",
  description:
    "Two Thousand Tribes entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const name1964 = (
  <>
    TWO THOUSAND
    <br />
    TRIBES
  </>
);

/**
 * Two Thousand Tribes guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy twotho01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Twotho01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Two Thousand Tribes"
      titleId="twotho01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/twothooverview/hero-banner.jpg",
        alt: "Two Thousand Tribes pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<TwothoNavChrome />}
      previousHref="/twothooverview"
      nextHref="/twotho02"
      guide1964={{
        cover: {
          src: "/images/twotho01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/twotho01/twothologo64.gif",
          width: 144,
          height: 101,
          alt: "",
        },
        name: name1964,
        copy: (
          <>
            This unusual pavilion is modeled on an aborigine hut and is named
            for 2,000 tribal groups throughout the world which are still so
            primitive they have no written language. It is sponsored by the
            Wycliffe Bible Translators, an American society dedicated to
            carrying the Scriptures to primitive peoples. The WBT reduces their
            unwritten tongues to simple phonetic systems, and translates the
            Bible into this new, easily understood writing. In the pavilion is a
            museum of artifacts from many tribes. Five contemporary paintings
            depicting Amazon scenes are displayed in an adjoining theater. From
            time to time demonstrations of the translating process are also
            given by WBT scholars.
          </>
        ),
        admission: [
          "Admission: free to the museum; 50 cents to the theater.",
          "Performances in the theater every 15 minutes. Program lasts 7 minutes.",
        ],
        highlights: [
          {
            label: "BOWLS AND BLOWGUNS.",
            body: (
              <>
                On view in the museum are totem poles from the Indian tribes of
                the Pacific Northwest, brightly colored feather capes, carved
                wooden ornaments, bowls and woven work from North and South
                America. An exhibit also shows how Amazon Indians make blowguns
                and mix the poison they put on their darts - just one of the
                hazards WBT missionaries have encountered. Large photographs
                show WBT emissaries teaching basic hygiene and agriculture to
                primitive tribes, and providing medical care.
              </>
            ),
          },
          {
            label: "JUNGLE SCENES.",
            body: (
              <>
                On the stage of the 10-seat theater are shown panels, 10 by 25
                feet, depicting in dramatic scenes the conversion of an Amazon
                jungle headhunter who learned to read and write, then taught
                fellow tribesmen. Lights pick out each mural in turn in the
                darkened theater.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/twotho01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/twotho01/twothologo.gif",
          width: 144,
          height: 101,
          alt: "",
        },
        name: "TWO THOUSAND TRIBES",
        nameFace: "arial",
        summary: (
          <>
            The ancient artifacts and modern progress of tribal groups around the
            world are shown in a large stylized aboriginal hut.
          </>
        ),
        copy: (
          <>
            The pavilion, named for the world&apos;s &quot;preliterate&quot;
            tribes -- those having no written language -- is sponsored by the
            Wycliffe Bible Translators, Inc., an organization dedicated to
            spreading the Scriptures and teaching literacy through phonetics.
          </>
        ),
        admission: "Admission: free. Performances every 15 minutes.",
        highlights: [
          {
            label: "TRIBAL MUSEUM.",
            labelFace: "arial",
            body: (
              <>
                On view are Indian totem poles of the Pacific Northwest and the
                bright, feathered garb and household objects of various other
                tribes. Also shown are poisoned darts and blowguns and a
                head-hunter&apos;s belt made of human hair. Photographs depict
                Wycliffe emissaries teaching in the field.
              </>
            ),
          },
          {
            label: "JUNGLE THEATER.",
            labelFace: "arial",
            body: (
              <>
                A five-panel mural depicts the conversion of an Amazon
                head-hunter chief.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/twotho01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/twotho01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/twothomap",
      }}
    />
  );
}
