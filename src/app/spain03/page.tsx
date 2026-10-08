import type { Metadata } from "next";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Spain — nywf64.com",
  description:
    "Pavilion of Spain exhibitor postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const EDICOLOR_SOURCES = [
  "Source: Postcard Made by Edicolor.",
  "Source: Postcard Published by Pavilion of Spain",
];

/**
 * Spain postcards page — “postcards” standard.
 * Body from legacy spain03.html. Layout: PostcardPage (/bell03).
 */
export default function Spain03Page() {
  return (
    <PostcardPage
      heroLabel="Spain Pavilion"
      titleId="spain03-title"
      hero={{
        src: "/images/spainoverview/hero-banner.jpg",
        alt: "Spain Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<SpainNavChrome />}
      previousHref="/spain02"
      overviewHref="/spainoverview"
      nextHref="/spain04"
      entries={[
        {
          front: {
            src: "/images/spain03/Spain2.jpg",
            width: 391,
            height: 600,
            alt: "Pavilion of Spain (2 of 7) — Film Festivals",
          },
          reverse: {
            src: "/images/spain03/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (2 of 7)",
            "Film Festivals",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/Spain3.jpg",
            width: 393,
            height: 600,
            alt: "Pavilion of Spain (3 of 7) — Espana Design on Pavilion Wall",
          },
          reverse: {
            src: "/images/spain03/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (3 of 7)",
            "Espana Design on Pavilion Wall",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/02.jpg",
            width: 450,
            height: 288,
            alt: "Pavilion of Spain (5 of 7) — Spain Design on Pavilion Wall",
          },
          reverse: {
            src: "/images/spain03/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (5 of 7)",
            "Spain Design on Pavilion Wall",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/Spain4.jpg",
            width: 600,
            height: 391,
            alt: "Pavilion of Spain (4 of 7) — Rendering of Pavilion",
          },
          reverse: {
            src: "/images/spain03/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (4 of 7)",
            "Rendering of Pavilion",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/Spain1.jpg",
            width: 390,
            height: 600,
            alt: "Pavilion of Spain (1 of 7) — Music and Dance",
          },
          reverse: {
            src: "/images/spain03/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (1 of 7)",
            "Music and Dance",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/02.jpg",
            width: 450,
            height: 288,
            alt: "Pavilion of Spain (6 of 7) — Three Women with Brown Background",
          },
          reverse: {
            src: "/images/spain03/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (6 of 7)",
            "Three Women with Brown Background",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
        {
          front: {
            src: "/images/spain03/Spain7.jpg",
            width: 390,
            height: 600,
            alt: "Pavilion of Spain (7 of 7) — Fiestas at the Pavilion of Spain",
          },
          reverse: {
            src: "/images/spain03/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain postcard",
          },
          meta: [
            "Pavilion of Spain (7 of 7)",
            "Fiestas at the Pavilion of Spain",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: EDICOLOR_SOURCES,
        },
      ]}
    />
  );
}
