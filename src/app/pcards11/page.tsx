import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Exhibitor Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Exhibitor Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

/**
 * Exhibitor Postcards gallery continued (legacy pcards12.html → /pcards11).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 12. PREVIOUS → /pcards10; NEXT → /pcards12.
 */
export default function Pcards11Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards11-title"
      title="Exhibitor Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards10"
      overviewHref="/pcardsoverview"
      nextHref="/pcards12"
      entries={[
        {
          front: {
            src: "/images/pcards11/None(28).jpg",
            width: 450,
            height: 278,
            alt: "Africa Pavilion (1 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(28)reverse.jpg",
            width: 300,
            height: 51,
            alt: "Reverse — Africa Pavilion (1 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (1 of 20)",
            "Babe and Sara - Elephants",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(22).jpg",
            width: 283,
            height: 450,
            alt: "Africa Pavilion (2 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(22)reverse.jpg",
            width: 300,
            height: 64,
            alt: "Reverse — Africa Pavilion (2 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (2 of 20)",
            "Susie - Giraffe",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(34).jpg",
            width: 450,
            height: 290,
            alt: "Africa Pavilion (3 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(34)reverse.jpg",
            width: 300,
            height: 67,
            alt: "Reverse — Africa Pavilion (3 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (3 of 20)",
            "Lion in a Tree",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(36).jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion (4 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(36)reverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse — Africa Pavilion (4 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (4 of 20)",
            "Leopard",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa05.jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion (5 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa05reverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Africa Pavilion (5 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (5 of 20)",
            "Africa Pavilion - Air View",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa06.jpg",
            width: 450,
            height: 288,
            alt: "Africa Pavilion (6 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa06reverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Africa Pavilion (6 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (6 of 20)",
            "Africa Pavilion - Front View",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa07.jpg",
            width: 450,
            height: 288,
            alt: "Africa Pavilion (7 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa07reverse.jpg",
            width: 300,
            height: 59,
            alt: "Reverse — Africa Pavilion (7 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (7 of 20)",
            "Main Lobby Sculpture",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(29).jpg",
            width: 450,
            height: 276,
            alt: "Africa Pavilion (8 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(29)reverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse — Africa Pavilion (8 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (8 of 20)",
            "Main Lobby Natural Resources",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa09.jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion (9 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa09reverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse — Africa Pavilion (9 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (9 of 20)",
            "The Royal Drummers - Burundi",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
            "Source: Online: Cowcard.com",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(18).jpg",
            width: 450,
            height: 283,
            alt: "Africa Pavilion (10 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(18)reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Africa Pavilion (10 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (10 of 20)",
            "The Royal Drummers - Burundi",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(35).jpg",
            width: 285,
            height: 450,
            alt: "Africa Pavilion (11 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(35)reverse.jpg",
            width: 300,
            height: 62,
            alt: "Reverse — Africa Pavilion (11 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (11 of 20)",
            "The Royal Drummers - Burundi",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa12.jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion (12 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa12reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Africa Pavilion (12 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (12 of 20)",
            "Drums of Passion - Nigeria",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa13.jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion (13 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa13reverse.jpg",
            width: 300,
            height: 57,
            alt: "Reverse — Africa Pavilion (13 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (13 of 20)",
            "Drums of Passion - Nigeria",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa14.jpg",
            width: 450,
            height: 287,
            alt: "Africa Pavilion (14 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa14reverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse — Africa Pavilion (14 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (14 of 20)",
            "Zulu Group - Southern",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(19).jpg",
            width: 450,
            height: 281,
            alt: "Africa Pavilion (15 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(19)reverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse — Africa Pavilion (15 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (15 of 20)",
            "Zulu Group - Southern Africa",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa16.jpg",
            width: 282,
            height: 450,
            alt: "Africa Pavilion (16 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa16reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Africa Pavilion (16 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (16 of 20)",
            "Ivory Coast Group",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/africa17.jpg",
            width: 450,
            height: 287,
            alt: "Africa Pavilion (17 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/africa17reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse — Africa Pavilion (17 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (17 of 20)",
            "Ivory Coast Group",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(32).jpg",
            width: 450,
            height: 289,
            alt: "Africa Pavilion (18 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(32)reverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Africa Pavilion (18 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (18 of 20)",
            "Tree House Restaurant",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(33).jpg",
            width: 450,
            height: 287,
            alt: "Africa Pavilion (19 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/None(33)reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse — Africa Pavilion (19 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (19 of 20)",
            "Tree House Restaurant",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/None(24).jpg",
            width: 450,
            height: 280,
            alt: "Africa Pavilion (20 of 20) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/none(24)reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse — Africa Pavilion (20 of 20) exhibitor postcard",
          },
          meta: [
            "Africa Pavilion (20 of 20)",
            "A Royal Dancer - Burundi",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards11/Spain3.jpg",
            width: 393,
            height: 600,
            alt: "Pavilion of Spain (3 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain (3 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (3 of 7)",
            "Espana Design on Pavilion Wall",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/02.jpg",
            width: 450,
            height: 288,
            alt: "Pavilion of Spain (5 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pavilion of Spain (5 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (5 of 7)",
            "Spain Design on Pavilion Wall",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/Spain4.jpg",
            width: 600,
            height: 391,
            alt: "Pavilion of Spain (4 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain (4 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (4 of 7)",
            "Rendering of Pavilion",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/Spain1.jpg",
            width: 390,
            height: 600,
            alt: "Pavilion of Spain (1 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain (1 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (1 of 7)",
            "Music and Dance",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/02.jpg",
            width: 450,
            height: 288,
            alt: "Pavilion of Spain (6 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/02reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pavilion of Spain (6 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (6 of 7)",
            "Three Women with Brown Background",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/Spain7.jpg",
            width: 390,
            height: 600,
            alt: "Pavilion of Spain (7 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain (7 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (7 of 7)",
            "Fiestas at the Pavilion of Spain",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        },
        {
          front: {
            src: "/images/pcards11/Spain2.jpg",
            width: 391,
            height: 600,
            alt: "Pavilion of Spain (2 of 7) exhibitor postcard No. N/A",
          },
          reverse: {
            src: "/images/pcards11/Spain1reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Pavilion of Spain (2 of 7) exhibitor postcard",
          },
          meta: [
            "Pavilion of Spain (2 of 7)",
            "Film Festivals",
            exhibitorSet,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Edicolor.",
            "Source: Postcard Published by Pavilion of Spain",
          ],
        }
      ]}
    />
  );
}
