import type { Metadata } from "next";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Pool of Industry — nywf64.com",
  description:
    "Pool of Industry postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry postcards page — “postcards” standard.
 * Body from legacy poolin03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Poolin03Page() {
  return (
    <PostcardPage
      heroLabel="Pool of Industry"
      titleId="poolin03-title"
      hero={{
        src: "/images/poolinoverview/hero-banner.jpg",
        alt: "Pool of Industry at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<PoolinNavChrome />}
      previousHref="/poolin02"
      overviewHref="/poolinoverview"
      nextHref="/poolin04"
      entries={[
        {
          front: {
            src: "/images/poolin03/81440-B.jpg",
            width: 450,
            height: 285,
            alt: "Fountain of Planets in Pool of Industry - Red",
          },
          reverse: {
            src: "/images/poolin03/81440-Breverse.jpg",
            width: 300,
            height: 139,
            alt: "Reverse — Fountain of Planets in Pool of Industry - Red",
          },
          meta: [
            "Fountain of Planets in Pool of Industry - Red",
            "Official Postcard",
            "No. 81440-B",
            "Dexter No. WF-31",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/poolin03/83099-B.jpg",
            width: 450,
            height: 280,
            alt: "Fountain of the Planets",
          },
          reverse: {
            src: "/images/poolin03/83099-Breverse.jpg",
            width: 300,
            height: 114,
            alt: "Reverse — Fountain of the Planets",
          },
          meta: [
            "Fountain of the Planets",
            "Official Postcard",
            "No. 83099-B",
            "Dexter No. WF-16",
            "Manhattan No. W-33",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/poolin03/91863-B.jpg",
            width: 450,
            height: 279,
            alt: "Night Fountain of Planets (Gold)",
          },
          reverse: {
            src: "/images/poolin03/91863-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Night Fountain of Planets (Gold)",
          },
          meta: [
            "Night Fountain of Planets (Gold)",
            "Official Postcard",
            "No. 91863-B",
            "Dexter No. WF-113",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/poolin03/91864-B.jpg",
            width: 450,
            height: 279,
            alt: "Night Fountain of Planets (Blue)",
          },
          reverse: {
            src: "/images/poolin03/91864-Breverse.jpg",
            width: 300,
            height: 92,
            alt: "Reverse — Night Fountain of Planets (Blue)",
          },
          meta: [
            "Night Fountain of Planets (Blue)",
            "Official Postcard",
            "No. 91864-B",
            "Dexter No. WF-114",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/poolin03/WF413.jpg",
            width: 450,
            height: 281,
            alt: "Fountain of the Planets",
          },
          reverse: {
            src: "/images/poolin03/WF413reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Fountain of the Planets",
          },
          meta: [
            "Fountain of the Planets",
            "Unauthorized Postcard",
            "No. WF413",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        }
      ]}
    />
  );
}
