import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — General Electric — nywf64.com",
  description:
    "General Electric Progressland postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * General Electric postcards page — “postcards” standard.
 * Body from legacy genele03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Genele03Page() {
  return (
    <PostcardPage
      heroLabel="General Electric Pavilion"
      titleId="genele03-title"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele02"
      overviewHref="/geneleoverview"
      nextHref="/genele04"
      entries={[
        {
          front: {
            src: "/images/genele03/74195-B.jpg",
            width: 450,
            height: 281,
            alt: "General Electric Progressland postcard",
          },
          reverse: {
            src: "/images/genele03/74195-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse \u2014 General Electric Progressland postcard",
          },
          meta: [
            "General Electric Progressland",
            "Official Postcard",
            "No. 74195-B",
            "Dexter No. N/A",
            "Manhattan No. W-22"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/genele03/87184-B.jpg",
            width: 450,
            height: 283,
            alt: "General Electric Progressland postcard",
          },
          reverse: {
            src: "/images/genele03/87184-Breverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse \u2014 General Electric Progressland postcard",
          },
          meta: [
            "General Electric Progressland",
            "Official Postcard",
            "No. 87184-B",
            "Dexter No. WF-65",
            "Manhattan No. W-68"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y."
          ],
        },
        {
          front: {
            src: "/images/genele03/91861-B.jpg",
            width: 450,
            height: 281,
            alt: "Night General Electric postcard",
          },
          reverse: {
            src: "/images/genele03/91861-Breverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse \u2014 Night General Electric postcard",
          },
          meta: [
            "Night General Electric",
            "Official Postcard",
            "No. 91861-B",
            "Dexter No. WF-112"
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y."
          ],
        },
        {
          front: {
            src: "/images/genele03/WF404.jpg",
            width: 450,
            height: 272,
            alt: "General Electric Pavilion postcard",
          },
          reverse: {
            src: "/images/genele03/WF404reverse.jpg",
            width: 300,
            height: 98,
            alt: "Reverse \u2014 General Electric Pavilion postcard",
          },
          meta: [
            "General Electric Pavilion",
            <span key="u" className={styles.unauthorized}>Unauthorized Postcard</span>,
            "No. WF404"
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)"
          ],
        },
      ]}
    />
  );
}
