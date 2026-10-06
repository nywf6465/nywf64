import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — General Motors — nywf64.com",
  description:
    "General Motors Pavilion postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * General Motors postcards page.
 * Body from legacy gm03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Gm03Page() {
  return (
    <PostcardPage
      heroLabel="General Motors Pavilion"
      titleId="gm03-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm02"
      overviewHref="/gmoverview"
      nextHref="/gm04"
      entries={[
        {
          front: {
            src: "/images/gm03/65622-B.jpg",
            width: 450,
            height: 279,
            alt: "General Motors Futurama II Building postcard",
          },
          reverse: {
            src: "/images/gm03/65622-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of General Motors Futurama II Building postcard",
          },
          meta: [
            "General Motors Futurama II Building",
            "Official Postcard",
            "No. 65622-B",
            "Dexter No. WF-9",
            "Manhattan No. W-11",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/gm03/87416-B.jpg",
            width: 450,
            height: 280,
            alt: "General Motors Futurama II postcard",
          },
          reverse: {
            src: "/images/gm03/87416-Breverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse of General Motors Futurama II postcard",
          },
          meta: [
            "General Motors Futurama II",
            "Official Postcard",
            "No. 87417-B",
            "Dexter No. WF-74",
            "Manhattan No. W-81",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/gm03/WF401.jpg",
            width: 450,
            height: 271,
            alt: "General Motors Pavilion postcard",
          },
          reverse: {
            src: "/images/gm03/WF401reverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse of General Motors Pavilion postcard",
          },
          meta: [
            "General Motors Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF401",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/gm03/WF422.jpg",
            width: 450,
            height: 277,
            alt: "General Motors Pavilion postcard",
          },
          reverse: {
            src: "/images/gm03/WF422reverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse of General Motors Pavilion postcard",
          },
          meta: [
            "General Motors Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF422",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/gm03/WF431.jpg",
            width: 450,
            height: 265,
            alt: "General Motors Pavilion postcard",
          },
          reverse: {
            src: "/images/gm03/WF431reverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse of General Motors Pavilion postcard",
          },
          meta: [
            "General Motors Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF431",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
