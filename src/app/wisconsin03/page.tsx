import type { Metadata } from "next";
import { PostcardPage } from "@/components/PostcardPage";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";

export const metadata: Metadata = {
  title: "Postcards — Wisconsin — nywf64.com",
  description:
    "Wisconsin Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin postcards page.
 * Body from legacy wisconsin03.html. Layout: PostcardPage (/bell03).
 */
export default function Wisconsin03Page() {
  return (
    <PostcardPage
      heroLabel="Wisconsin"
      titleId="wisconsin03-title"
      hero={{
        src: "/images/wisconsinoverview/hero-banner.jpg",
        alt: "Wisconsin pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WisconsinNavChrome />}
      previousHref="/wisconsin02"
      overviewHref="/wisconsinoverview"
      nextHref="/wisconsin04"
      entries={[
        {
          front: {
            src: "/images/wisconsin03/None3.jpg",
            width: 450,
            height: 283,
            alt: "Wisconsin Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/wisconsin03/None3-reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse of Wisconsin Pavilion exhibitor postcard",
          },
          meta: [
            "Wisconsin Pavilion",
            "Exhibitor Postcard",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/wisconsin03/80841-B.jpg",
            width: 600,
            height: 463,
            alt: "Wisconsin Pavilon exhibitor postcard set No. 80841-B",
          },
          reverse: {
            src: "/images/wisconsin03/80841-B-reverse.jpg",
            width: 300,
            height: 156,
            alt: "Reverse of Wisconsin Pavilon postcard No. 80841-B",
          },
          meta: [
            "Wisconsin Pavilon",
            "Exhibitor Postcard Set",
            "No. 80841-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Color Illinois, Inc.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
