import type { Metadata } from "next";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — China — nywf64.com",
  description:
    "Republic of China pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const unauthorized = (
  <span style={{ color: "#1e90ff" }}>Unauthorized Postcard</span>
);

const official = (
  <span style={{ color: "#1e90ff" }}>Official Postcard</span>
);

const dexterChineseNews = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Chinese News Service, New York",
];

const dexterChineseNewsPost = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Chinese News Service, New York",
  "Presented courtesy Richard Post Collection",
];

/**
 * China postcards page — “postcards” standard.
 * Body from legacy china03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function China03Page() {
  return (
    <PostcardPage
      heroLabel="China"
      titleId="china03-title"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/china02"
      overviewHref="/chinaoverview"
      nextHref="/china04"
      entries={[
        {
          front: {
            src: "/images/china03/None37.jpg",
            width: 450,
            height: 322,
            alt: "Pavilion of Republic of China",
          },
          reverse: {
            src: "/images/china03/None37reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — Pavilion of Republic of China",
          },
          meta: ["Pavilion of Republic of China", exhibitor, "No. N/A"],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/china03/WF-10.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China Pavilions",
          },
          reverse: {
            src: "/images/china03/WF-10reverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — Republic of China Pavilions",
          },
          meta: [
            "Republic of China Pavilions",
            unauthorized,
            "No. WF10",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/china03/DT-87181-B.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China Pavilion",
          },
          reverse: {
            src: "/images/china03/DT-87181-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Republic of China Pavilion",
          },
          meta: [
            "Republic of China Pavilion",
            official,
            "No. 87181-B",
            "Dexter No. WF-62",
            "Manhattan No. W-65",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/china03/86405-B.jpg",
            width: 450,
            height: 288,
            alt: "Balcony",
          },
          reverse: {
            src: "/images/china03/86405-Breverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Balcony",
          },
          meta: [
            "Republic of China (1 of 11)",
            "Balcony",
            exhibitorSet,
            "No. 86405-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/86484-B.jpg",
            width: 450,
            height: 288,
            alt: "Second Floor Exhibit",
          },
          reverse: {
            src: "/images/china03/86484-Breverse.jpg",
            width: 300,
            height: 117,
            alt: "Reverse — Second Floor Exhibit",
          },
          meta: [
            "Republic of China (2 of 11)",
            "Second Floor Exhibit",
            exhibitorSet,
            "No. 86484-B",
          ],
          sources: dexterChineseNewsPost,
        },
        {
          front: {
            src: "/images/china03/86486-B.jpg",
            width: 450,
            height: 285,
            alt: "The Pavilion",
          },
          reverse: {
            src: "/images/china03/86486-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — The Pavilion",
          },
          meta: [
            "Republic of China (3 of 11)",
            "The Pavilion",
            exhibitorSet,
            "No. 86486-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/86487-B.jpg",
            width: 450,
            height: 282,
            alt: "Ceremonial Arch",
          },
          reverse: {
            src: "/images/china03/86487-Breverse.jpg",
            width: 300,
            height: 71,
            alt: "Reverse — Ceremonial Arch",
          },
          meta: [
            "Republic of China (4 of 11)",
            "Ceremonial Arch",
            exhibitorSet,
            "No. 86487-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/86488-B.jpg",
            width: 450,
            height: 285,
            alt: "Chinese Architecture",
          },
          reverse: {
            src: "/images/china03/86488-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Chinese Architecture",
          },
          meta: [
            "Republic of China (5 of 11)",
            "Chinese Architecture",
            exhibitorSet,
            "No. 86488-B",
          ],
          sources: dexterChineseNewsPost,
        },
        {
          front: {
            src: "/images/china03/86489-B.jpg",
            width: 450,
            height: 293,
            alt: "Front View Framed by Arch",
          },
          reverse: {
            src: "/images/china03/86489-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Front View Framed by Arch",
          },
          meta: [
            "Republic of China (6 of 11)",
            "Front View Framed by Arch",
            exhibitorSet,
            "No. 86489-B",
          ],
          sources: dexterChineseNewsPost,
        },
        {
          front: {
            src: "/images/china03/87332-B.jpg",
            width: 450,
            height: 285,
            alt: "Unisphere from Pavilion",
          },
          reverse: {
            src: "/images/china03/87332-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Unisphere from Pavilion",
          },
          meta: [
            "Republic of China (7 of 11)",
            "Unisphere from Pavilion",
            exhibitorSet,
            "No. 87332-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/87333-B.jpg",
            width: 450,
            height: 281,
            alt: "Chinese Pavilion Faces Unisphere",
          },
          reverse: {
            src: "/images/china03/87333-Breverse.jpg",
            width: 300,
            height: 72,
            alt: "Reverse — Chinese Pavilion Faces Unisphere",
          },
          meta: [
            "Republic of China (8 of 11)",
            "Chinese Pavilion Faces Unisphere",
            exhibitorSet,
            "No. 87333-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/87334-B.jpg",
            width: 286,
            height: 450,
            alt: "Reflection of Pavilion",
          },
          reverse: {
            src: "/images/china03/87334-Breverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — Reflection of Pavilion",
          },
          meta: [
            "Republic of China (9 of 11)",
            "Reflection of Pavilion",
            exhibitorSet,
            "No. 87334-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/87335-B.jpg",
            width: 450,
            height: 283,
            alt: "The Pavilion at Night",
          },
          reverse: {
            src: "/images/china03/87335-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — The Pavilion at Night",
          },
          meta: [
            "Republic of China (10 of 11)",
            "The Pavilion at Night",
            exhibitorSet,
            "No. 87335-B",
          ],
          sources: dexterChineseNews,
        },
        {
          front: {
            src: "/images/china03/88255-B.jpg",
            width: 450,
            height: 287,
            alt: "Carved Wood Screen",
          },
          reverse: {
            src: "/images/china03/88255-Breverse.jpg",
            width: 300,
            height: 134,
            alt: "Reverse — Carved Wood Screen",
          },
          meta: [
            "Republic of China (11 of 11)",
            "Carved Wood Screen",
            exhibitorSet,
            "No. 88255-B",
          ],
          sources: dexterChineseNewsPost,
        },
      ]}
    />
  );
}
