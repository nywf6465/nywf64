import type { Metadata } from "next";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland postcards — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair postcard page — “postcards” standard.
 * Body from legacy sinclair03.html. Layout: PostcardPage (/bell03).
 */
export default function Sinclair03Page() {
  return (
    <PostcardPage
      heroLabel="Sinclair"
      titleId="sinclair03-title"
      hero={{
        src: "/images/sinclairoverview/hero-banner.jpg",
        alt: "Sinclair Dinoland at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SinclairNavChrome />}
      previousHref="/sinclair02"
      overviewHref="/sinclairoverview"
      nextHref="/sinclair04"
      entries={[
        {
          front: {
            src: "/images/sinclair03/74143-B.jpg",
            width: 450,
            height: 281,
            alt: "Sinclair Dinoland postcard front",
          },
          reverse: {
            src: "/images/sinclair03/74143-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Sinclair Dinoland postcard reverse",
          },
          meta: [
            "Sinclair Dinoland",
            "Official Postcard",
            "No. 74143-B",
            "Dexter No. WF-44",
            "Manhattan No. W-21",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/88533-B.jpg",
            width: 281,
            height: 450,
            alt: "Sinclair Tyrannosaur postcard front",
          },
          reverse: {
            src: "/images/sinclair03/88533-Breverse.jpg",
            width: 300,
            height: 77,
            alt: "Sinclair Tyrannosaur postcard reverse",
          },
          meta: [
            "Sinclair Tyrannosaur",
            "Official Postcard",
            "No. 88533-B",
            "Dexter No. WF-101",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/73111-B.jpg",
            width: 450,
            height: 284,
            alt: "Sinclair Dinoland exhibitor postcard front",
          },
          reverse: {
            src: "/images/sinclair03/73111-Breverse.jpg",
            width: 300,
            height: 55,
            alt: "Sinclair Dinoland exhibitor postcard reverse",
          },
          meta: ["Sinclair Dinoland", "Exhibitor Postcard", "No. 73111-B"],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/98035-B.jpg",
            width: 450,
            height: 282,
            alt: "Sinclair Dinoland aerial view postcard",
          },
          reverse: {
            src: "/images/sinclair03/98035-Breverse.jpg",
            width: 300,
            height: 52,
            alt: "Sinclair Dinoland aerial view postcard reverse",
          },
          meta: [
            "Sinclair Dinoland (1 of 5)",
            "Aerial View",
            "Exhibitor Postcard Set",
            "No. 98035-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/98036-B.jpg",
            width: 450,
            height: 284,
            alt: "Brontosaurus postcard",
          },
          reverse: {
            src: "/images/sinclair03/98036-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Brontosaurus postcard reverse",
          },
          meta: [
            "Sinclair Dinoland (2 of 5)",
            "Brontosaurus",
            "Exhibitor Postcard Set",
            "No. 98036-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/98037-B.jpg",
            width: 450,
            height: 281,
            alt: "Corythosaurus postcard",
          },
          reverse: {
            src: "/images/sinclair03/98037-Breverse.jpg",
            width: 300,
            height: 60,
            alt: "Corythosaurus postcard reverse",
          },
          meta: [
            "Sinclair Dinoland (3 of 5)",
            "Corthosaurus",
            "Exhibitor Postcard Set",
            "No. 98037-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/98038-B.jpg",
            width: 282,
            height: 450,
            alt: "Trachodon postcard",
          },
          reverse: {
            src: "/images/sinclair03/98038-Breverse.jpg",
            width: 300,
            height: 64,
            alt: "Trachodon postcard reverse",
          },
          meta: [
            "Sinclair Dinoland (4 of 5)",
            "Trachodon",
            "Exhibitor Postcard Set",
            "No. 98038-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/DT-88533-B.jpg",
            width: 282,
            height: 450,
            alt: "Tyrannosaurus Rex postcard",
          },
          reverse: {
            src: "/images/sinclair03/DT-88533-Breverse.jpg",
            width: 300,
            height: 71,
            alt: "Tyrannosaurus Rex postcard reverse",
          },
          meta: [
            "Sinclair Dinoland (5 of 5)",
            "Tyrannosaurus Rex",
            "Exhibitor Postcard Set",
            "No. DT-88533-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/sinclair03/WF416.jpg",
            width: 450,
            height: 279,
            alt: "Sinclair Dinoland unauthorized postcard",
          },
          reverse: {
            src: "/images/sinclair03/WF416reverse.jpg",
            width: 300,
            height: 60,
            alt: "Sinclair Dinoland unauthorized postcard reverse",
          },
          meta: ["Sinclair Dinoland", "Unauthorized Postcard", "No. WF416"],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
