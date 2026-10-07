import type { Metadata } from "next";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Jordan — nywf64.com",
  description:
    "Jordan pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Jordan"
      titleId="jordan01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/jordanoverview/hero-banner.jpg",
        alt: "Jordan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JordanNavChrome />}
      previousHref="/jordanoverview"
      nextHref="/jordan02"
      guide1964={{
        cover: {
          src: "/images/jordan01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/jordan01/jordanlogo64.gif",
          width: 144,
          height: 81,
          alt: "",
        },
        name: "JORDAN",
        copy: (
          <>
            The Government of the Hashemite Kingdom of Jordan, whose land is the
            seedbed of many civilizations and religions, is represented by one of
            the most striking buildings at the Fair. It is a multi-peaked-and-domed
            structure covered with gold mosaic and sparkling colored glass. The
            undulating roof surfaces swoop to the ground, forming Arabic arches:
            They shade the stained-glass windows that make up two sides of the
            building and walls with bas-reliefs that make up other sides. Inside
            the building diverse exhibits - including a scroll from the Dead Sea
            area - reflect some of the cultures that rose in this region of ancient
            Palestine. A theater provides entertainment by Arab dancers and a
            military band.
          </>
        ),
        admission: "Admission: adults 50 cents, children free.",
        highlights: [
          {
            label: "CHRIST AND MOHAMMED.",
            body: (
              <>
                In stained glass (best seen from inside the pavilion), the story of
                Christ&apos;s agony and death is told in the traditional Fourteen
                Stations of the Cross, rendered in unusual abstract forms created
                by Spanish painter Antonio Saura. On the other walls (seen only
                from outside the pavilion) are bas-relief representations of the
                Roman-built city of Jarash; the ancient city of Petra, which was
                carved from rock in ancient times and populated by robber bands
                that preyed on caravans; and the Dome of the Rock of Jerusalem,
                where, according to Moslem tradition, Mohammed prayed before
                ascending to heaven.
              </>
            ),
          },
          {
            label: "TWENTY HUNDRED YEARS.",
            body: (
              <>
                One of the Dead Sea Scrolls, written by the ascetic Essene sect
                about the time of Christ, is shown in an exhibit area together
                with a replica of the cave in which it was discovered. Also on
                display are a scale model of the Dome of the Rock, statues of the
                Three Kings, a Christian creche, and many articles from antiquity,
                including a column from Jarash to be presented to the City of New
                York for permanent display in the Flushing Meadow Park.
              </>
            ),
          },
          {
            label: "DANCERS AND A MOVIE.",
            body: (
              <>
                A troupe of Arab dancers and a military band of pipers put on
                frequent performances in the 245-seat theater. At other times a
                half-hour color movie of modern Jordan is shown.
              </>
            ),
          },
          {
            label: "JEWELRY AND BARBECUES.",
            body: (
              <>
                Large color transparencies and slide viewers show Jordan&apos;s
                expanding economy and increasing numbers of schools, hospitals,
                roads and other facilities. A bazaar sells Hebron glass,
                olive-wood carvings, mother-of-pearl work and Bedouin jewelry. A
                restaurant and snack bar serve such Jordanian specialties as{" "}
                <em>homas</em> (an appetizer of mashed chick peas mixed with spices
                and oil, eaten cold), <em>shaurmah</em> (spiced and barbecued
                lamb), Arab and Turkish pastries, coffee and wine.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/jordan01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/jordan01/jordanlogo.gif",
          width: 144,
          height: 81,
          alt: "",
        },
        name: "JORDAN",
        nameFace: "arial",
        summary: (
          <>
            The age-old cultures of this land -- a seedbed of civilizations and
            religions -- are graphically displayed in an unusual pavilion.
          </>
        ),
        copy: (
          <>
            Gold mosaic and colored glass cover this many-domed structure.
          </>
        ),
        admission: "Admission: 50 cents, children free.",
        highlights: [
          {
            label: "TWO RELIGIONS",
            labelFace: "arial",
            body: (
              <>
                In stained glass, the story of Christ&apos;s agony and His death is
                told in the traditional 14 Stations of the Cross, rendered in
                abstract forms by Spanish painter Antonio Saura. Bas-reliefs depict
                the Roman-built city of Jarash; the ancient town of Petra, once a
                haven for robber bands; and the Dome of the Rock of Jerusalem,
                where Mohammed prayed before ascending to heaven.
              </>
            ),
          },
          {
            label: "TWO THOUSAND YEARS",
            labelFace: "arial",
            body: (
              <>
                Dead Sea Scrolls, written in Christ&apos;s time, and other artifacts
                are displayed.
              </>
            ),
          },
          {
            label: "ENTERTAINMENT",
            labelFace: "arial",
            body: (
              <>
                Arab dancers and military pipers put on frequent performances and a
                color movie on modern Jordan is also shown.
              </>
            ),
          },
          {
            label: "JORDAN TODAY",
            labelFace: "arial",
            body: (
              <>
                Color slides depict Jordan&apos;s economic and social progress. A
                bazaar sells Jordanian handiwork, including Hebron glass, jewelry
                and wood carvings.
              </>
            ),
          },
          {
            label: "RESTAURANT",
            labelFace: "arial",
            body: (
              <>
                Middle Eastern food is served. There is also a snack bar.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/jordan01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/jordan01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/jordanmap",
      }}
    />
  );
}
