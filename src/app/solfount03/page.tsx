import type { Metadata } from "next";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Solar Fountain — nywf64.com",
  description:
    "Solar Fountain postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Solar Fountain postcards page — “postcards” standard.
 * Body from legacy solfount03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Solfount03Page() {
  return (
    <PostcardPage
      heroLabel="Solar Fountain"
      titleId="solfount03-title"
      hero={{
        src: "/images/solfountoverview/hero-banner.jpg",
        alt: "Solar Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SolfountNavChrome />}
      previousHref="/solfount02"
      overviewHref="/solfountoverview"
      nextHref="/solfount04"
      entries={[
        {
          front: {
            src: "/images/solfount03/87414-B.jpg",
            width: 450,
            height: 280,
            alt: "The Solar Fountain",
          },
          reverse: {
            src: "/images/solfount03/87414-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — The Solar Fountain",
          },
          meta: [
            "The Solar Fountain",
            "Official Postcard",
            "No. 87414-B",
            "Dexter No. WF-71",
            "Manhattan No. W-80",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/solfount03/91860-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Solar Fountain",
          },
          reverse: {
            src: "/images/solfount03/91860-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Night Solar Fountain",
          },
          meta: [
            "Night Solar Fountain",
            "Official Postcard",
            "No. 91860-B",
            "Dexter No. WF-119",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/solfount03/WF419.jpg",
            width: 450,
            height: 278,
            alt: "General Scene of the Industrial Area unauthorized postcard No. WF419",
          },
          reverse: {
            src: "/images/solfount03/WF419reverse.jpg",
            width: 300,
            height: 63,
            alt: "Reverse — General Scene of the Industrial Area postcard No. WF419",
          },
          meta: [
            "General Scene of the Industrial Area",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF419",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
