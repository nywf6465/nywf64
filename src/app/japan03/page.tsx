import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Japan — nywf64.com",
  description:
    "Japan pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan03.html (Adobe chrome omitted). */
export default function Japan03Page() {
  return (
    <PostcardPage
      heroLabel="Japan"
      titleId="japan03-title"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      previousHref="/japan02"
      overviewHref="/japanoverview"
      nextHref="/japan04"
      entries={[
        {
          front: {
            src: "/images/japan03/japan143.jpg",
            width: 450,
            height: 282,
            alt: "Japan Pavilion outside general view",
          },
          reverse: {
            src: "/images/japan03/japan141.jpg",
            width: 200,
            height: 61,
            alt: "Japan Trade Center card back",
          },
          meta: [
            "Japan Pavilion (1 of 3)",
            "Outside of Pavilion General View",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Japan Trade Center, New York",
          ],
        },
        {
          front: {
            src: "/images/japan03/japan140.jpg",
            width: 450,
            height: 286,
            alt: "Japan Pavilion outside entrance",
          },
          reverse: {
            src: "/images/japan03/japan141.jpg",
            width: 200,
            height: 61,
            alt: "Japan Trade Center card back",
          },
          meta: [
            "Japan Pavilion (2 of 3)",
            "Outside Entrance of Pavilion",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Japan Trade Center, New York",
          ],
        },
        {
          front: {
            src: "/images/japan03/japan142.jpg",
            width: 450,
            height: 285,
            alt: "Japan Pavilion outside north wall",
          },
          reverse: {
            src: "/images/japan03/japan141.jpg",
            width: 200,
            height: 61,
            alt: "Japan Trade Center card back",
          },
          meta: [
            "Japan Pavilion (3 of 3)",
            "Outside North Wall of Pavilion",
            "Exhibitor Postcard Set",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Japan Trade Center, New York",
          ],
        },
        {
          front: {
            src: "/images/japan03/88347-B.jpg",
            width: 450,
            height: 283,
            alt: "TIK-TOK Seiko Watch Exhibit",
          },
          reverse: {
            src: "/images/japan03/88347-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of TIK-TOK Seiko Watch Exhibit postcard",
          },
          meta: [
            "TIK-TOK Seiko Watch Exhibit",
            "Exhibitor Postcard",
            "No. 88347-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Tokyu America, Inc.",
          ],
        },
      ]}
    />
  );
}
