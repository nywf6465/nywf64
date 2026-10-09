import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — United States Pavilion — nywf64.com",
  description:
    "United States Pavilion postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * United States Pavilion postcards page — “postcards” standard.
 * Body from legacy unista03.html. Layout: PostcardPage (/bell03).
 */
export default function Unista03Page() {
  return (
    <PostcardPage
      heroLabel="United States Pavilion"
      titleId="unista03-title"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista02"
      overviewHref="/unistaoverview"
      nextHref="/unista04"
      entries={[
        {
          front: {
            src: "/images/unista03/85086-B.jpg",
            width: 450,
            height: 283,
            alt: "Owens-Corning Fiberglas United States Pavilion postcard No. 85086-B",
          },
          reverse: {
            src: "/images/unista03/85086-Breverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse of Owens-Corning Fiberglas postcard No. 85086-B",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "United States Pavilion",
            <span key="advertising" style={{ color: "#2e8b57" }}>
              Advertising Postcard
            </span>,
            "No. 85086-B",
            <Image
              key="logo"
              src="/images/unista03/03.jpg"
              alt=""
              width={150}
              height={55}
              unoptimized
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/unista03/86864-B.jpg",
            width: 450,
            height: 282,
            alt: "United States Pavilion official postcard No. 86864-B",
          },
          reverse: {
            src: "/images/unista03/86864-Breverse.jpg",
            width: 300,
            height: 105,
            alt: "Reverse of United States Pavilion postcard No. 86864-B",
          },
          meta: [
            "United States Pavilion",
            "Official Postcard",
            "No. 86864-B",
            "Dexter No. WF-56",
            "Manhattan No. W-59",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/unista03/87425-B.jpg",
            width: 450,
            height: 279,
            alt: "Unisphere in Fountain of the Continents official postcard No. 87425-B",
          },
          reverse: {
            src: "/images/unista03/87425-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of Unisphere postcard No. 87425-B",
          },
          meta: [
            "Unisphere in Fountain of the Continents - From N.Y.S. Towers",
            "Official Postcard",
            "No. 87425-B",
            "Dexter No. WF-82",
            "Manhattan No. W-79",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/unista03/91865-B.jpg",
            width: 450,
            height: 278,
            alt: "Night United States Pavilion official postcard No. 91865-B",
          },
          reverse: {
            src: "/images/unista03/91865-Breverse.jpg",
            width: 300,
            height: 99,
            alt: "Reverse of Night United States Pavilion postcard No. 91865-B",
          },
          meta: [
            "Night United States Pavilion",
            "Official Postcard",
            "No. 91865-B",
            "Dexter No. WF-115",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/unista03/WF409.jpg",
            width: 450,
            height: 279,
            alt: "Kennedy Circle Looking Southwest unauthorized postcard No. WF409",
          },
          reverse: {
            src: "/images/unista03/WF409reverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse of Kennedy Circle postcard No. WF409",
          },
          meta: [
            "Kennedy Circle Looking Southwest",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF409",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/unista03/WF-13.jpg",
            width: 450,
            height: 283,
            alt: "United States Pavilion unauthorized postcard No. WF13",
          },
          reverse: {
            src: "/images/unista03/WF-13reverse.jpg",
            width: 300,
            height: 110,
            alt: "Reverse of United States Pavilion postcard No. WF13",
          },
          meta: [
            "United States Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF13",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/unista03/WF415.jpg",
            width: 450,
            height: 278,
            alt: "The Federal Pavilion of the United States unauthorized postcard No. WF415",
          },
          reverse: {
            src: "/images/unista03/WF415reverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse of Federal Pavilion postcard No. WF415",
          },
          meta: [
            "The Federal Pavilion of the United States",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF415",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
