import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Unisphere — nywf64.com",
  description:
    "Unisphere postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * Unisphere postcards page — “postcards” standard.
 * Body from legacy unisph03.html. Layout: PostcardPage (/bell03).
 */
export default function Unisph03Page() {
  return (
    <PostcardPage
      heroLabel="Unisphere"
      titleId="unisph03-title"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph02"
      overviewHref="/unisphoverview"
      nextHref="/unisph04"
      entries={[
        {
          front: {
            src: "/images/unisph03/61816-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere postcard No. 61816-B",
          },
          reverse: {
            src: "/images/unisph03/61816-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse of Unisphere postcard No. 61816-B",
          },
          meta: [
            "Unisphere",
            "Official Postcard",
            "No. 61816-B",
            "Dexter No. WF-7",
            "Manhattan No. W-8"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/65617-B.jpg",
            width: 290,
            height: 450,
            alt: "Unisphere (red with title on white) postcard No. 65617-B",
          },
          reverse: {
            src: "/images/unisph03/65617-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse of Unisphere (red with title on white) postcard No. 65617-B",
          },
          meta: [
            "Unisphere (red with title on white)",
            "Official Postcard",
            "No. 65617-B",
            "Dexter No. WF-25",
            "Manhattan No. W-31"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/72590-B.jpg",
            width: 450,
            height: 283,
            alt: "Plaza of the Astronauts postcard No. 72590-B",
          },
          reverse: {
            src: "/images/unisph03/72590-Breverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse of Plaza of the Astronauts postcard No. 72590-B",
          },
          meta: [
            "Plaza of the Astronauts",
            "Official Postcard",
            "No. 72590-B",
            "Dexter No. WF-8",
            "Manhattan No. W-19"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/86865-B(1).jpg",
            width: 280,
            height: 450,
            alt: "Unisphere, Night (Vertical) postcard No. 86865-B",
          },
          reverse: {
            src: "/images/unisph03/86865-B(1)reverse.jpg",
            width: 300,
            height: 118,
            alt: "Reverse of Unisphere, Night (Vertical) postcard No. 86865-B",
          },
          meta: [
            "Unisphere, Night (Vertical)",
            "Official Postcard",
            "No. 86865-B",
            "Dexter No. WF-57",
            "Manhattan No. W-60"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/86865-B(2).jpg",
            width: 450,
            height: 282,
            alt: "Unisphere, Night (Horizontal) postcard No. 86865-B",
          },
          reverse: {
            src: "/images/unisph03/86865-B(2)reverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse of Unisphere, Night (Horizontal) postcard No. 86865-B",
          },
          meta: [
            "Unisphere, Night (Horizontal)",
            "Official Postcard",
            "No. 86865-B",
            "Dexter No. WF-58",
            "Manhattan No. W-61"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/80480-B(2).jpg",
            width: 284,
            height: 450,
            alt: "Blue Unisphere postcard No. 80480-B",
          },
          reverse: {
            src: "/images/unisph03/80480-Breverse.jpg",
            width: 300,
            height: 111,
            alt: "Reverse of Blue Unisphere postcard No. 80480-B",
          },
          meta: [
            "Blue Unisphere",
            "Official Postcard",
            "No. 80480-B",
            "Dexter No. WF-11",
            "Manhattan No. W-49"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87183-B.jpg",
            width: 450,
            height: 284,
            alt: "Unipshere w/NYS Pavilion postcard No. 87183-B",
          },
          reverse: {
            src: "/images/unisph03/87183-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse of Unipshere w/NYS Pavilion postcard No. 87183-B",
          },
          meta: [
            "Unipshere w/NYS Pavilion",
            "Official Postcard",
            "No. 87183-B",
            "Dexter No. WF-64",
            "Manhattan No. W-67"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87186-B.jpg",
            width: 279,
            height: 450,
            alt: "Unisphere w/Court of Peace postcard No. 87186-B",
          },
          reverse: {
            src: "/images/unisph03/87186-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse of Unisphere w/Court of Peace postcard No. 87186-B",
          },
          meta: [
            "Unisphere w/Court of Peace",
            "Official Postcard",
            "No. 87186-B",
            "Dexter No. WF-67",
            "Manhattan No. W-70"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87187-B.jpg",
            width: 282,
            height: 450,
            alt: "Unisphere w/\"Escorters\" postcard No. 87187-B",
          },
          reverse: {
            src: "/images/unisph03/87187-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of Unisphere w/\"Escorters\" postcard No. 87187-B",
          },
          meta: [
            "Unisphere w/\"Escorters\"",
            "Official Postcard",
            "No. 87187-B",
            "Dexter No. WF-68",
            "Manhattan No. W-71"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87500-B.jpg",
            width: 450,
            height: 284,
            alt: "Unisphere from Prom. Court. of Nat's. postcard No. 87500-B",
          },
          reverse: {
            src: "/images/unisph03/87500-Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse of Unisphere from Prom. Court. of Nat's. postcard No. 87500-B",
          },
          meta: [
            "Unisphere from Prom. Court. of Nat's.",
            "Official Postcard",
            "No. 87500-B",
            "Dexter No. WF-59",
            "Manhattan No. W-62"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87501-B.jpg",
            width: 283,
            height: 450,
            alt: "Unisphere show Fount. (cont's beneath) postcard No. 87501-B",
          },
          reverse: {
            src: "/images/unisph03/87501-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of Unisphere show Fount. (cont's beneath) postcard No. 87501-B",
          },
          meta: [
            "Unisphere show Fount. (cont's beneath)",
            "Official Postcard",
            "No. 87501-B",
            "Dexter No. WF-60",
            "Manhattan No. W-63"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87425-B.jpg",
            width: 450,
            height: 279,
            alt: "Unisphere in Fountain of the Continents - From N.Y.S. Towers postcard No. 87425-B",
          },
          reverse: {
            src: "/images/unisph03/87425-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of Unisphere in Fountain of the Continents - From N.Y.S. Towers postcard No. 87425-B",
          },
          meta: [
            "Unisphere in Fountain of the Continents - From N.Y.S. Towers",
            "Official Postcard",
            "No. 87425-B",
            "Dexter No. WF-82",
            "Manhattan No. W-79"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/87426-B.jpg",
            width: 279,
            height: 450,
            alt: "Unisphere w/Flags postcard No. 87426-B",
          },
          reverse: {
            src: "/images/unisph03/87426-Breverse.jpg",
            width: 300,
            height: 109,
            alt: "Reverse of Unisphere w/Flags postcard No. 87426-B",
          },
          meta: [
            "Unisphere w/Flags",
            "Official Postcard",
            "No. 87426-B",
            "Dexter No. WF-83",
            "Manhattan No. W-84"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/88525-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere at Night postcard No. 88525-B",
          },
          reverse: {
            src: "/images/unisph03/88525-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse of Unisphere at Night postcard No. 88525-B",
          },
          meta: [
            "Unisphere at Night",
            "Official Postcard",
            "No. 88525-B",
            "Dexter No. WF-95"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y."
          ],
        },
        {
          front: {
            src: "/images/unisph03/WF-1.jpg",
            width: 450,
            height: 285,
            alt: "Theme Symbol of the World's Fair postcard No. WF1",
          },
          reverse: {
            src: "/images/unisph03/WF-1reverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse of Theme Symbol of the World's Fair postcard No. WF1",
          },
          meta: [
            "Theme Symbol of the World's Fair",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF1"
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc."
          ],
        },
        {
          front: {
            src: "/images/unisph03/WF-2.jpg",
            width: 450,
            height: 283,
            alt: "Theme Symbol of the World's Fair postcard No. WF2",
          },
          reverse: {
            src: "/images/unisph03/WF-2reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse of Theme Symbol of the World's Fair postcard No. WF2",
          },
          meta: [
            "Theme Symbol of the World's Fair",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF2"
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc."
          ],
        }
      ]}
    />
  );
}
