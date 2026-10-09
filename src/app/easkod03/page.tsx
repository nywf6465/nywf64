import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * Eastman Kodak postcards page.
 * Body from legacy easkod03.html. Layout: PostcardPage (/bell03).
 */
export default function Easkod03Page() {
  return (
    <PostcardPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod03-title"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod02"
      overviewHref="/easkodoverview"
      nextHref="/easkod04"
      entries={[
        {
          front: {
            src: "/images/easkod03/76589-B.jpg",
            width: 450,
            height: 283,
            alt: "Kodak Pavilion official postcard No. 76589-B",
          },
          reverse: {
            src: "/images/easkod03/76589-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse of Kodak Pavilion postcard No. 76589-B",
          },
          meta: [
            "Kodak Pavilion",
            "Official Postcard",
            "No. 76589-B",
            "Dexter No. N/A",
            "Manhattan No. W-28",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/easkod03/80484-B.jpg",
            width: 450,
            height: 283,
            alt: "Kodak Pavilion official postcard No. 80484-B",
          },
          reverse: {
            src: "/images/easkod03/80484-Breverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse of Kodak Pavilion postcard No. 80484-B",
          },
          meta: [
            "Kodak Pavilion",
            "Official Postcard",
            "No. 80484-B",
            "Dexter No. WF-20",
            "Manhattan No. W-44",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/easkod03/WF434.jpg",
            width: 450,
            height: 280,
            alt: "The Kodak Pavilion unauthorized postcard No. WF434",
          },
          reverse: {
            src: "/images/easkod03/WF434reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse of The Kodak Pavilion postcard No. WF434",
          },
          meta: [
            "The Kodak Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF434",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/easkod03/WF-3.jpg",
            width: 450,
            height: 281,
            alt: "Eastman Kodak Pavilion unauthorized postcard No. WF3",
          },
          reverse: {
            src: "/images/easkod03/WF-3reverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse of Eastman Kodak Pavilion postcard No. WF3",
          },
          meta: [
            "Eastman Kodak Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF3",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
      ]}
    />
  );
}
