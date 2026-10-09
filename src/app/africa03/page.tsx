import type { Metadata } from "next";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Africa — nywf64.com",
  description:
    "Africa Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Africa postcards page — “postcards” standard.
 * Body from legacy africa03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Africa03Page() {
  return (
    <PostcardPage
      heroLabel="Africa"
      titleId="africa03-title"
      hero={{
        src: "/images/africaoverview/hero-banner.jpg",
        alt: "Africa pavilion at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AfricaNavChrome />}
      previousHref="/africa02"
      overviewHref="/africa01"
      nextHref="/africa04"
      entries={[
        {
          front: {
            src: "/images/africa03/none-28.jpg",
            width: 450,
            height: 278,
            alt: "Babe and Sara - Elephants",
          },
          reverse: {
            src: "/images/africa03/none-28-reverse.jpg",
            width: 300,
            height: 51,
            alt: "Reverse \u2014 Babe and Sara - Elephants",
          },
          meta: [
            "Africa Pavilion (1 of 20)",
            "Babe and Sara - Elephants",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-22.jpg",
            width: 283,
            height: 450,
            alt: "Susie - Giraffe",
          },
          reverse: {
            src: "/images/africa03/none-22-reverse.jpg",
            width: 300,
            height: 64,
            alt: "Reverse \u2014 Susie - Giraffe",
          },
          meta: [
            "Africa Pavilion (2 of 20)",
            "Susie - Giraffe",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-34.jpg",
            width: 450,
            height: 290,
            alt: "Lion in a Tree",
          },
          reverse: {
            src: "/images/africa03/none-34-reverse.jpg",
            width: 300,
            height: 67,
            alt: "Reverse \u2014 Lion in a Tree",
          },
          meta: [
            "Africa Pavilion (3 of 20)",
            "Lion in a Tree",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-36.jpg",
            width: 450,
            height: 286,
            alt: "Leopard",
          },
          reverse: {
            src: "/images/africa03/none-36-reverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse \u2014 Leopard",
          },
          meta: [
            "Africa Pavilion (4 of 20)",
            "Leopard",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa05.jpg",
            width: 450,
            height: 286,
            alt: "Africa Pavilion - Air View",
          },
          reverse: {
            src: "/images/africa03/africa05-reverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse \u2014 Africa Pavilion - Air View",
          },
          meta: [
            "Africa Pavilion (5 of 20)",
            "Africa Pavilion - Air View",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa06.jpg",
            width: 450,
            height: 288,
            alt: "Africa Pavilion - Front View",
          },
          reverse: {
            src: "/images/africa03/africa06-reverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse \u2014 Africa Pavilion - Front View",
          },
          meta: [
            "Africa Pavilion (6 of 20)",
            "Africa Pavilion - Front View",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa07.jpg",
            width: 450,
            height: 288,
            alt: "Main Lobby Sculpture",
          },
          reverse: {
            src: "/images/africa03/africa07-reverse.jpg",
            width: 300,
            height: 59,
            alt: "Reverse \u2014 Main Lobby Sculpture",
          },
          meta: [
            "Africa Pavilion (7 of 20)",
            "Main Lobby Sculpture",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-29.jpg",
            width: 450,
            height: 276,
            alt: "Main Lobby Natural Resources",
          },
          reverse: {
            src: "/images/africa03/none-29-reverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse \u2014 Main Lobby Natural Resources",
          },
          meta: [
            "Africa Pavilion (8 of 20)",
            "Main Lobby Natural Resources",
            "Exhibitor Postcard Set",
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
            src: "/images/africa03/africa09.jpg",
            width: 450,
            height: 286,
            alt: "The Royal Drummers - Burundi",
          },
          reverse: {
            src: "/images/africa03/africa09-reverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse \u2014 The Royal Drummers - Burundi",
          },
          meta: [
            "Africa Pavilion (9 of 20)",
            "The Royal Drummers - Burundi",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-18.jpg",
            width: 450,
            height: 283,
            alt: "The Royal Drummers - Burundi",
          },
          reverse: {
            src: "/images/africa03/none-18-reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse \u2014 The Royal Drummers - Burundi",
          },
          meta: [
            "Africa Pavilion (10 of 20)",
            "The Royal Drummers - Burundi",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-35.jpg",
            width: 285,
            height: 450,
            alt: "The Royal Drummers - Burundi",
          },
          reverse: {
            src: "/images/africa03/none-35-reverse.jpg",
            width: 300,
            height: 62,
            alt: "Reverse \u2014 The Royal Drummers - Burundi",
          },
          meta: [
            "Africa Pavilion (11 of 20)",
            "The Royal Drummers - Burundi",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa12.jpg",
            width: 450,
            height: 286,
            alt: "Drums of Passion - Nigeria",
          },
          reverse: {
            src: "/images/africa03/africa12-reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse \u2014 Drums of Passion - Nigeria",
          },
          meta: [
            "Africa Pavilion (12 of 20)",
            "Drums of Passion - Nigeria",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa13.jpg",
            width: 450,
            height: 286,
            alt: "Drums of Passion - Nigeria",
          },
          reverse: {
            src: "/images/africa03/africa13-reverse.jpg",
            width: 300,
            height: 57,
            alt: "Reverse \u2014 Drums of Passion - Nigeria",
          },
          meta: [
            "Africa Pavilion (13 of 20)",
            "Drums of Passion - Nigeria",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa14.jpg",
            width: 450,
            height: 287,
            alt: "Zulu Group - Southern",
          },
          reverse: {
            src: "/images/africa03/africa14-reverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse \u2014 Zulu Group - Southern",
          },
          meta: [
            "Africa Pavilion (14 of 20)",
            "Zulu Group - Southern",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-19.jpg",
            width: 450,
            height: 281,
            alt: "Zulu Group - Southern Africa",
          },
          reverse: {
            src: "/images/africa03/none-19-reverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse \u2014 Zulu Group - Southern Africa",
          },
          meta: [
            "Africa Pavilion (15 of 20)",
            "Zulu Group - Southern Africa",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa16.jpg",
            width: 282,
            height: 450,
            alt: "Ivory Coast Group",
          },
          reverse: {
            src: "/images/africa03/africa16-reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse \u2014 Ivory Coast Group",
          },
          meta: [
            "Africa Pavilion (16 of 20)",
            "Ivory Coast Group",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/africa17.jpg",
            width: 450,
            height: 287,
            alt: "Ivory Coast Group",
          },
          reverse: {
            src: "/images/africa03/africa17-reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse \u2014 Ivory Coast Group",
          },
          meta: [
            "Africa Pavilion (17 of 20)",
            "Ivory Coast Group",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-32.jpg",
            width: 450,
            height: 289,
            alt: "Tree House Restaurant",
          },
          reverse: {
            src: "/images/africa03/none-32-reverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse \u2014 Tree House Restaurant",
          },
          meta: [
            "Africa Pavilion (18 of 20)",
            "Tree House Restaurant",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-33.jpg",
            width: 450,
            height: 287,
            alt: "Tree House Restaurant",
          },
          reverse: {
            src: "/images/africa03/none-33-reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse \u2014 Tree House Restaurant",
          },
          meta: [
            "Africa Pavilion (19 of 20)",
            "Tree House Restaurant",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/africa03/none-24.jpg",
            width: 450,
            height: 280,
            alt: "A Royal Dancer - Burundi",
          },
          reverse: {
            src: "/images/africa03/none-24-reverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse \u2014 A Royal Dancer - Burundi",
          },
          meta: [
            "Africa Pavilion (20 of 20)",
            "A Royal Dancer - Burundi",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
