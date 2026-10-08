import type { Metadata } from "next";
import Image from "next/image";
import { PostcardPage } from "@/components/PostcardPage";
import { WfmarNavChrome } from "@/components/WfmarNavChrome";

export const metadata: Metadata = {
  title: "Postcards — World's Fair Marina — nywf64.com",
  description:
    "World's Fair Marina postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Marina postcards page.
 * Body from legacy wfmar03.html. Layout: PostcardPage (/bell03).
 */
export default function Wfmar03Page() {
  return (
    <PostcardPage
      heroLabel="World's Fair Marina"
      titleId="wfmar03-title"
      hero={{
        src: "/images/wfmaroverview/hero-banner.jpg",
        alt: "World's Fair Marina at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfmarNavChrome />}
      previousHref="/wfmar02"
      overviewHref="/wfmaroverview"
      nextHref="/wfmar04"
      entries={[
        {
          front: {
            src: "/images/wfmar03/75494-B.jpg",
            width: 450,
            height: 281,
            alt: "World's Fair Marina official postcard No. 75494-B",
          },
          reverse: {
            src: "/images/wfmar03/75494-B-reverse.jpg",
            width: 300,
            height: 116,
            alt: "Reverse of World's Fair Marina postcard No. 75494-B",
          },
          meta: [
            "World's Fair Marina",
            "Official Postcard",
            "No. 75494-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/wfmar03/85084-B.jpg",
            width: 450,
            height: 284,
            alt: "Owens-Corning Fiberglas World's Fair Marina advertising postcard No. 85084-B",
          },
          reverse: {
            src: "/images/wfmar03/85084-B-reverse.jpg",
            width: 300,
            height: 122,
            alt: "Reverse of Owens-Corning Fiberglas advertising postcard No. 85084-B",
          },
          meta: [
            "Owens-Corning Fiberglas",
            "World's Fair Marina",
            <span key="adv" style={{ color: "#2e8b57" }}>
              Advertising Postcard
            </span>,
            "No. 85084-B",
            <Image
              key="logo"
              src="/images/wfmar03/03.jpg"
              width={150}
              height={55}
              alt=""
              unoptimized
            />,
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
